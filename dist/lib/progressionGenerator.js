"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressionGenerator = void 0;
const progressionRule_1 = require("./progressionRules/progressionRule");
const random_1 = require("./random");
class ProgressionGenerator {
    key;
    // 遷移ルールなどを持つ
    rand;
    rules;
    constructor(key, tonality, rand) {
        this.key = key;
        this.rules = new progressionRule_1.ProgressionRule(tonality, "./rules/rules.json"); // とりあえず
        this.rand = rand;
    }
    applyMood(degree, rules, mood, section) {
        if (!section || !mood || mood === "neutral")
            return rules;
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
    randomStartDegree(mood) {
        const degreeWeights = this.rules.startDegrees[mood ?? "neutral"];
        return (0, random_1.chooseByWeight)(degreeWeights.map(dw => ({ to: dw.degree, weight: dw.weight })), this.rand);
    }
    randomEndDegree(mood) {
        const degreeWeights = this.rules.endDegrees[mood ?? "neutral"];
        return (0, random_1.chooseByWeight)(degreeWeights.map(dw => ({ to: dw.degree, weight: dw.weight })), this.rand);
    }
    // まずは「度数の並び」だけ生成する
    generateSectionDegrees(section) {
        const length = section.length;
        if (length <= 0)
            throw new Error("length must be > 0");
        const mood = section.mood;
        const start = section.startDegree ?? this.randomStartDegree(mood);
        const end = section.endDegree ?? this.randomEndDegree(mood);
        const result = [];
        let current = start;
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
            let next = (0, random_1.chooseByWeight)(rulesWithMood, this.rand);
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
    generateChords(options) {
        const degrees = options.section.flatMap(section => this.generateSectionDegrees(section));
        return degrees.map(degree => this.key.getDiatonicChord(degree));
    }
}
exports.ProgressionGenerator = ProgressionGenerator;
//# sourceMappingURL=progressionGenerator.js.map