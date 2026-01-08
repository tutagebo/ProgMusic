"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pitch = exports.PitchClass = void 0;
class PitchClass {
    value;
    constructor(value) {
        this.value = value;
    }
    toName(isSharp = true) {
        const names = isSharp
            ? ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
            : ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
        return names[this.value];
    }
    transpose(semitones) {
        return PitchClass.from(this.value + semitones);
    }
    static from(value) {
        const normalized = ((value % 12) + 12) % 12;
        return new PitchClass(normalized);
    }
    equals(other) {
        return this.value === other.value;
    }
}
exports.PitchClass = PitchClass;
class Pitch {
    pitchClass;
    octave;
    constructor(pitchClass, octave) {
        this.pitchClass = pitchClass;
        this.octave = octave;
    }
    // MIDIから作る
    static fromMidi(midi) {
        if (!Number.isInteger(midi) || midi < 0 || midi > 127)
            throw new Error("Invalid MIDI number");
        const octave = Math.floor(midi / 12) - 1;
        const pc = PitchClass.from(midi);
        return new Pitch(pc, octave);
    }
    // PitchClassとoctaveから作る
    static fromPitchClass(pitchClass, octave) {
        return new Pitch(pitchClass, octave);
    }
    toMidi() {
        return this.pitchClass.value + (this.octave + 1) * 12;
    }
    transpose(semitones) {
        const newMidi = this.toMidi() + semitones;
        return Pitch.fromMidi(newMidi);
    }
}
exports.Pitch = Pitch;
//# sourceMappingURL=pitch.js.map