import { TransitionRule } from "./progressionRules/commonRules";

export function createSeededRandom(seed: number): () => number {
  const rng = new Xorshift32(seed);
  // 0 <= x < 1 の乱数を返す関数を返す
  return () => rng.nextFloat();
}

export function chooseByWeight(rules: TransitionRule[], rand: () => number): number {
    const total = rules.reduce((sum, r) => sum + r.weight, 0);
    const r = rand() * total;
    let acc = 0;
    for (const rule of rules) {
        acc += rule.weight;
        if (r <= acc) return rule.to;
    }
    // 浮動小数誤差対策
    return rules[rules.length - 1]?.to as number;
}

class Xorshift32 {
  private state: number;

  constructor(seed: number) {
    if (seed === 0) {
      // 0 は XORShift32 だとずっと 0 になってしまうので適当にずらす
      seed = 0x12345678;
    }
    // 32bit に丸める
    this.state = seed | 0;
  }

  /** 0〜0xffffffff の整数を返す */
  nextUint32(): number {
    let x = this.state | 0;

    // XORShift32 本体
    x ^= x << 13;
    x ^= x >>> 17;
    x ^= x << 5;

    // 32bit に丸めて state に保存
    this.state = x | 0;

    // 符号付き32bitなので >>> 0 で 0〜2^32-1 の符号なしにする
    return this.state >>> 0;
  }

  /** 0 <= x < 1 の浮動小数乱数を返す（Math.random っぽい） */
  nextFloat(): number {
    return this.nextUint32() / 0x100000000; // 2^32
  }

  /** min <= x < max の整数乱数を返す */
  nextInt(min: number, max: number): number {
    if (max <= min) {
      throw new Error("max は min より大きい必要があります");
    }
    const range = max - min;
    return min + (this.nextUint32() % range);
  }
}
