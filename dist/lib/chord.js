"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chord = void 0;
const pitch_1 = require("./pitch");
const type_1 = require("./type");
class Chord {
    root;
    quality;
    intervals;
    pitchClasses;
    constructor(root, quality) {
        this.root = root;
        this.quality = quality;
        this.intervals = [...type_1.CHORD_INTERVALS[quality]];
        this.pitchClasses = this.intervals.map(i => this.root.transpose(i));
    }
    getChordTones() {
        return this.pitchClasses;
    }
    convertPitches(octave) {
        return this.pitchClasses.map(pc => pitch_1.Pitch.fromPitchClass(pc, octave));
    }
    containsPitchClass(pc) {
        return this.pitchClasses.some(chordPc => chordPc.equals(pc));
    }
    equals(other) {
        return this.root.equals(other.root) && this.quality === other.quality;
    }
    toString() {
        return this.root.toName() + this.quality;
    }
}
exports.Chord = Chord;
//# sourceMappingURL=chord.js.map