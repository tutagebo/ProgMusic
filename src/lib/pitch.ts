import { PitchClassValue } from "./type";


export class PitchClass {
    readonly value: PitchClassValue;

    constructor(value: PitchClassValue) {
        this.value = value;
    }

    toName(isSharp: boolean = true): string {
        const names = isSharp
            ? ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
            : ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
        return names[this.value] as string;
    }

    transpose(semitones: number): PitchClass {
        return PitchClass.from(this.value + semitones);
    }

    static from(value: number): PitchClass {
        const normalized = ((value % 12) + 12) % 12;
        return new PitchClass(normalized as PitchClassValue);
    }

    equals(other: PitchClass): boolean {
        return this.value === other.value;
    }
}

export class Pitch {
    pitchClass: PitchClass;
    octave: number;

    private constructor(pitchClass: PitchClass, octave: number) {
        this.pitchClass = pitchClass;
        this.octave = octave;
    }

    // MIDIから作る
    static fromMidi(midi: number): Pitch {
        if (!Number.isInteger(midi) || midi < 0 || midi > 127) throw new Error("Invalid MIDI number");
        const octave = Math.floor(midi / 12) - 1;
        const pc = PitchClass.from(midi);
        return new Pitch(pc, octave);
    }

    // PitchClassとoctaveから作る
    static fromPitchClass(pitchClass: PitchClass, octave: number): Pitch {
        return new Pitch(pitchClass, octave);
    }

    toMidi(): number {
        return this.pitchClass.value + (this.octave + 1) * 12;
    }

    transpose(semitones: number): Pitch {
        const newMidi = this.toMidi() + semitones;
        return Pitch.fromMidi(newMidi);
    }
}