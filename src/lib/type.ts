
export enum TonalityType {
    Major = "major",
    NaturalMinor = "natural_minor",
    HarmonicMinor = "harmonic_minor",
}

export enum ScaleType {
    Major = "major",
    NaturalMinor = "natural_minor",
}

export const SCALE_PATTERNS: Record<ScaleType, number[]> = {
    [ScaleType.Major]:        [0, 2, 4, 5, 7, 9, 11],
    [ScaleType.NaturalMinor]: [0, 2, 3, 5, 7, 8, 10],
};

export enum ChordQuality {
    Major = "maj",
    Minor = "min",
    Diminished = "dim",
    Augmented = "aug",
    Dominant7 = "7",
    Major7 = "maj7",
    Minor7 = "min7",
}

export const CHORD_INTERVALS: Record<ChordQuality, number[]> = {
    [ChordQuality.Major]:        [0, 4, 7],
    [ChordQuality.Minor]:        [0, 3, 7],
    [ChordQuality.Diminished]:   [0, 3, 6],
    [ChordQuality.Augmented]:    [0, 4, 8],
    [ChordQuality.Dominant7]:    [0, 4, 7, 10],
    [ChordQuality.Major7]:       [0, 4, 7, 11],
    [ChordQuality.Minor7]:       [0, 3, 7, 10],
};

export const DIATONIC_QUALITIES = {
    [ScaleType.Major]: [
      ChordQuality.Major,       // I
      ChordQuality.Minor,       // II
      ChordQuality.Minor,       // III
      ChordQuality.Major,       // IV
      ChordQuality.Major,       // V
      ChordQuality.Minor,       // VI
      ChordQuality.Diminished,  // VII
    ],
    [ScaleType.NaturalMinor]: [
      ChordQuality.Minor,       // i
      ChordQuality.Diminished,  // ii°
      ChordQuality.Major,       // III
      ChordQuality.Minor,       // iv
      ChordQuality.Minor,       // v
      ChordQuality.Major,       // VI
      ChordQuality.Major,       // VII
    ],
}
    
export enum Mood {
    Neutral = "neutral",
    Bright = "bright",
    Dark = "dark",
    Tense = "tense",
}

export enum SectionType {
    /** イントロ */
    Intro = "intro",
    /** Aメロ */
    Verse = "verse", 
    /** Bメロ */
    Bridge = "bridge", 
    /** サビ */
    Chorus = "chorus",
}

export interface ProgressionOptions {
    section: SectionStructure[]; // セクション構造
}

export interface SectionStructure {
    type: SectionType;
    /** コード進行の長さ */
    length: number;
    /** 繰り返し回数 */
    repeat?: number;
    startDegree?: Degree;    // 最初のコード（デフォルト I）
    endDegree?: Degree;      // 最後のコード（デフォルト I）
    mood?: Mood;             // 雰囲気
}

export type Degree = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type PitchClassValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
