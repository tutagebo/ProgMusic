import { Key } from "./key";
import { Chord } from "./chord";
import { Degree, Mood, ProgressionOptions, SectionStructure, SectionType, TonalityType } from "./type";
import { ProgressionRule } from "./progressionRules/progressionRule";
import { chooseByWeight } from "./random";
import { TransitionRule } from "./progressionRules/commonRules";

export class ProgressionGenerator {
    private readonly key: Key;
    // 遷移ルールなどを持つ
    private rand: () => number;
    private rules: ProgressionRule;
    constructor(key: Key, tonality:TonalityType, rand: () => number) {
        this.key = key;
        this.rules = new ProgressionRule(tonality, "./rules/rules.json"); // とりあえず
        this.rand = rand;
    }

    private applyMood(degree: Degree, rules: TransitionRule[], mood?: Mood, section?: SectionType): TransitionRule[] {
        if (!section || !mood || mood === "neutral") return rules;

        const moodBias = this.rules?.moodBias[mood];
        const sectionBias = this.rules?.sectionBias[section];

        return rules.map(rule => {
            const factor = (moodBias[rule.to] ?? 1) * (sectionBias[rule.to] ?? 1);
            return {
                to: rule.to,
                weight: rule.weight * factor,
            };
        });
    }

    private randomStartDegree(mood?: Mood): Degree {
        const degreeWeights = this.rules.startDegrees[mood ?? "neutral"];
        return chooseByWeight(degreeWeights.map(dw => ({ to: dw.degree, weight: dw.weight })), this.rand) as Degree;
    }

    private randomEndDegree(mood?: Mood): Degree {
        const degreeWeights = this.rules.endDegrees[mood ?? "neutral"];
        return chooseByWeight(degreeWeights.map(dw => ({ to: dw.degree, weight: dw.weight })), this.rand) as Degree;
    }

    // まずは「度数の並び」だけ生成する
    generateSectionDegrees(section: SectionStructure): Degree[] {
        const length = section.length;
        if (length <= 0) throw new Error("length must be > 0");

        const mood = section.mood;
        const start: Degree = section.startDegree ?? this.randomStartDegree(mood);
        const end: Degree | undefined = section.endDegree ?? this.randomEndDegree(mood);

        const result: Degree[] = [];
        let current: Degree = start;
        result.push(current);

        for (let i = 1; i < length; i++) {
            const baseRules = this.rules.transitionTable[current];
            if (!baseRules || baseRules.length === 0) {
                // fallback：とりあえず I に戻る
                current = 1;
                result.push(current);
                continue;
            }

            // mood による補正
            const rulesWithMood = this.applyMood(current, baseRules, mood);

            let next = chooseByWeight(rulesWithMood, this.rand) as Degree;

            // 最後の1つ手前で endDegree が指定されているなら、弱めに寄せるとかもあり
            // ここではシンプルに、最後だけ上書きする形にしておく
            if (i === length - 1 && end !== undefined) {
                next = end;
            }

            result.push(next);
            current = next;
        }

        return Array.from({ length: section.repeat ?? 1 }).flatMap(() => result);
    }

    // Key を使って Chord に変換する
    generateChords(options: ProgressionOptions): Chord[] {
        const degrees = options.section.flatMap(section => this.generateSectionDegrees(section));
        return degrees.map(degree => this.key.getDiatonicChord(degree));
    }
}
