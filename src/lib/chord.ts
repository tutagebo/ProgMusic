import { Pitch, PitchClass } from "./pitch";
import { CHORD_INTERVALS, ChordQuality } from "./type";

export class Chord {
    readonly root: PitchClass;
    readonly quality: ChordQuality;
    readonly intervals: readonly number[];
    readonly pitchClasses: readonly PitchClass[];

    constructor(root: PitchClass, quality: ChordQuality) {
        this.root = root;
        this.quality = quality;
        this.intervals = [...CHORD_INTERVALS[quality]];
        this.pitchClasses = this.intervals.map(i => this.root.transpose(i));
    }

    getChordTones(): readonly PitchClass[] {
        return this.pitchClasses;
    }

    convertPitches(octave: number): Pitch[] {
        return this.pitchClasses.map(pc => Pitch.fromPitchClass(pc, octave));
    }

    containsPitchClass(pc: PitchClass): boolean {
        return this.pitchClasses.some(chordPc => chordPc.equals(pc));
    }

    equals(other: Chord): boolean {
        return this.root.equals(other.root) && this.quality === other.quality;
    }

    toString(): string {
        return this.root.toName() + this.quality;
    }
}