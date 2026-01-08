import { Chord } from "./chord";
import { PitchClass } from "./pitch";
import { Scale } from "./scale";
import { Degree, ScaleType } from "./type";
export declare class Key {
    readonly root: PitchClass;
    readonly scaleType: ScaleType;
    private readonly scale;
    constructor(root: PitchClass, type: ScaleType);
    getScale(): Scale;
    degreeToPitchClass(degree: Degree): PitchClass;
    getDiatonicChord(degree: Degree): Chord;
    transpose(semitones: number): Key;
}
//# sourceMappingURL=key.d.ts.map