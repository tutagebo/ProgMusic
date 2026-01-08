import { Degree, Mood, SectionType } from "../type";

export type TransitionRule = {
    to: Degree;
    weight: number;
};

export type TransitionTable = Record<Degree, TransitionRule[]>;

export type Bias = Partial<Record<Degree, number>>;

export type SectionBias = Record<SectionType, Bias>;

export type MoodBias = Record<Mood, Bias>;

export const MOOD_BIAS: MoodBias = {
    neutral: {},

    bright: {
        1: 1.5,
        4: 1.5,
        5: 1.5,
        6: 1.5,
        2: 0.8,
        3: 0.8,
        7: 0.8,
    },

    dark: {
        2: 1.5,
        3: 1.5,
        6: 1.5,
        1: 0.8,
        4: 0.8,
        5: 0.8,
    },

    tense: {
        5: 1.7,
        7: 1.7,
        1: 0.7,
    },
};

export type DegreeWeightTable = Record<Mood, DegreeWeight[]>

export type DegreeWeight = {
    degree: Degree;
    weight: number;
};
