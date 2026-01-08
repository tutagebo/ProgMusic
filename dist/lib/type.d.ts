export declare enum TonalityType {
    Major = "major",
    NaturalMinor = "natural_minor",
    HarmonicMinor = "harmonic_minor"
}
export declare enum ScaleType {
    Major = "major",
    NaturalMinor = "natural_minor"
}
export declare const SCALE_PATTERNS: Record<ScaleType, number[]>;
export declare enum ChordQuality {
    Major = "maj",
    Minor = "min",
    Diminished = "dim",
    Augmented = "aug",
    Dominant7 = "7",
    Major7 = "maj7",
    Minor7 = "min7"
}
export declare const CHORD_INTERVALS: Record<ChordQuality, number[]>;
export declare const DIATONIC_QUALITIES: {
    major: ChordQuality[];
    natural_minor: ChordQuality[];
};
export declare enum Mood {
    Neutral = "neutral",
    Bright = "bright",
    Dark = "dark",
    Tense = "tense"
}
export declare enum SectionType {
    /** イントロ */
    Intro = "intro",
    /** Aメロ */
    Verse = "verse",
    /** Bメロ */
    Bridge = "bridge",
    /** サビ */
    Chorus = "chorus"
}
export interface ProgressionOptions {
    section: SectionStructure[];
}
export interface SectionStructure {
    type: SectionType;
    /** コード進行の長さ */
    length: number;
    /** 繰り返し回数 */
    repeat?: number;
    startDegree?: Degree;
    endDegree?: Degree;
    mood?: Mood;
}
export type Degree = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type PitchClassValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
//# sourceMappingURL=type.d.ts.map