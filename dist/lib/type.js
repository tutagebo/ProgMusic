"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionType = exports.Mood = exports.DIATONIC_QUALITIES = exports.CHORD_INTERVALS = exports.ChordQuality = exports.SCALE_PATTERNS = exports.ScaleType = exports.TonalityType = void 0;
var TonalityType;
(function (TonalityType) {
    TonalityType["Major"] = "major";
    TonalityType["NaturalMinor"] = "natural_minor";
    TonalityType["HarmonicMinor"] = "harmonic_minor";
})(TonalityType || (exports.TonalityType = TonalityType = {}));
var ScaleType;
(function (ScaleType) {
    ScaleType["Major"] = "major";
    ScaleType["NaturalMinor"] = "natural_minor";
})(ScaleType || (exports.ScaleType = ScaleType = {}));
exports.SCALE_PATTERNS = {
    [ScaleType.Major]: [0, 2, 4, 5, 7, 9, 11],
    [ScaleType.NaturalMinor]: [0, 2, 3, 5, 7, 8, 10],
};
var ChordQuality;
(function (ChordQuality) {
    ChordQuality["Major"] = "maj";
    ChordQuality["Minor"] = "min";
    ChordQuality["Diminished"] = "dim";
    ChordQuality["Augmented"] = "aug";
    ChordQuality["Dominant7"] = "7";
    ChordQuality["Major7"] = "maj7";
    ChordQuality["Minor7"] = "min7";
})(ChordQuality || (exports.ChordQuality = ChordQuality = {}));
exports.CHORD_INTERVALS = {
    [ChordQuality.Major]: [0, 4, 7],
    [ChordQuality.Minor]: [0, 3, 7],
    [ChordQuality.Diminished]: [0, 3, 6],
    [ChordQuality.Augmented]: [0, 4, 8],
    [ChordQuality.Dominant7]: [0, 4, 7, 10],
    [ChordQuality.Major7]: [0, 4, 7, 11],
    [ChordQuality.Minor7]: [0, 3, 7, 10],
};
exports.DIATONIC_QUALITIES = {
    [ScaleType.Major]: [
        ChordQuality.Major, // I
        ChordQuality.Minor, // II
        ChordQuality.Minor, // III
        ChordQuality.Major, // IV
        ChordQuality.Major, // V
        ChordQuality.Minor, // VI
        ChordQuality.Diminished, // VII
    ],
    [ScaleType.NaturalMinor]: [
        ChordQuality.Minor, // i
        ChordQuality.Diminished, // ii°
        ChordQuality.Major, // III
        ChordQuality.Minor, // iv
        ChordQuality.Minor, // v
        ChordQuality.Major, // VI
        ChordQuality.Major, // VII
    ],
};
var Mood;
(function (Mood) {
    Mood["Neutral"] = "neutral";
    Mood["Bright"] = "bright";
    Mood["Dark"] = "dark";
    Mood["Tense"] = "tense";
})(Mood || (exports.Mood = Mood = {}));
var SectionType;
(function (SectionType) {
    /** イントロ */
    SectionType["Intro"] = "intro";
    /** Aメロ */
    SectionType["Verse"] = "verse";
    /** Bメロ */
    SectionType["Bridge"] = "bridge";
    /** サビ */
    SectionType["Chorus"] = "chorus";
})(SectionType || (exports.SectionType = SectionType = {}));
//# sourceMappingURL=type.js.map