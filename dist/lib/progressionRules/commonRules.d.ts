import { Degree, Mood, SectionType } from "../type";
export type TransitionRule = {
    to: Degree;
    weight: number;
};
export type TransitionTable = Record<Degree, TransitionRule[]>;
export type Bias = Partial<Record<Degree, number>>;
export type SectionBias = Record<SectionType, Bias>;
export type MoodBias = Record<Mood, Bias>;
export declare const MOOD_BIAS: MoodBias;
export type DegreeWeightTable = Record<Mood, DegreeWeight[]>;
export type DegreeWeight = {
    degree: Degree;
    weight: number;
};
//# sourceMappingURL=commonRules.d.ts.map