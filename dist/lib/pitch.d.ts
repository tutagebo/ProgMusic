import { PitchClassValue } from "./type";
export declare class PitchClass {
    readonly value: PitchClassValue;
    constructor(value: PitchClassValue);
    toName(isSharp?: boolean): string;
    transpose(semitones: number): PitchClass;
    static from(value: number): PitchClass;
    equals(other: PitchClass): boolean;
}
export declare class Pitch {
    pitchClass: PitchClass;
    octave: number;
    private constructor();
    static fromMidi(midi: number): Pitch;
    static fromPitchClass(pitchClass: PitchClass, octave: number): Pitch;
    toMidi(): number;
    transpose(semitones: number): Pitch;
}
//# sourceMappingURL=pitch.d.ts.map