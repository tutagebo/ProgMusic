import { Chord } from "./chord";
import { Pitch, PitchClass } from "./pitch";
import { Scale } from "./scale";
import { ChordQuality, Degree, DIATONIC_QUALITIES, SCALE_PATTERNS, ScaleType } from "./type";

export class Key {
    readonly root: PitchClass;
    readonly scaleType: ScaleType;
    private readonly scale: Scale;
    constructor(root: PitchClass, type: ScaleType) {
        this.root = root;
        this.scaleType = type;
        this.scale = new Scale(root, type);
    }

    getScale(): Scale {
        return this.scale;
    }

    // 7音前提
    degreeToPitchClass(degree: Degree): PitchClass {
        if (!Number.isInteger(degree) || degree < 1 || degree > 7) {
            throw new Error("degree must be an integer between 1 and 7");
        }
        const intervals = SCALE_PATTERNS[this.scaleType];
        const interval = intervals[degree-1] as number;
        return this.root.transpose(interval);
    }

    getDiatonicChord(degree: Degree): Chord {
        
        if (!Number.isInteger(degree) || degree < 1 || degree > 7) {
            throw new Error("degree must be an integer between 1 and 7");
        }
        const rootPitchClass = this.degreeToPitchClass(degree);

        const qualities: ChordQuality[] = DIATONIC_QUALITIES[this.scaleType];
        const quality: ChordQuality = qualities[degree - 1] as ChordQuality;

        return new Chord(rootPitchClass, quality);
    }

    transpose(semitones: number): Key {
        const newRoot = this.root.transpose(semitones);
        return new Key(newRoot, this.scaleType);
    }
}