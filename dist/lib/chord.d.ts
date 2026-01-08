import { Pitch, PitchClass } from "./pitch";
import { ChordQuality } from "./type";
export declare class Chord {
    readonly root: PitchClass;
    readonly quality: ChordQuality;
    readonly intervals: readonly number[];
    readonly pitchClasses: readonly PitchClass[];
    constructor(root: PitchClass, quality: ChordQuality);
    getChordTones(): readonly PitchClass[];
    convertPitches(octave: number): Pitch[];
    containsPitchClass(pc: PitchClass): boolean;
    equals(other: Chord): boolean;
    toString(): string;
}
//# sourceMappingURL=chord.d.ts.map