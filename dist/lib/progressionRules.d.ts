import { Degree, Mood } from "./type";
export type TransitionRule = {
    to: Degree;
    weight: number;
};
export type TransitionTable = Record<Degree, TransitionRule[]>;
export declare const MAJOR_BASE_TRANSITIONS: TransitionTable;
export type MoodBias = Partial<Record<Degree, number>>;
export declare const MOOD_BIAS: Record<Mood, MoodBias>;
type DegreeWeight = {
    degree: Degree;
    weight: number;
};
export declare const START_DEGREE_TABLE: Record<Mood, DegreeWeight[]>;
export declare const END_DEGREE_TABLE: Record<Mood, DegreeWeight[]>;
export {};
//# sourceMappingURL=progressionRules.d.ts.map