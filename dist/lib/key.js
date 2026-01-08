"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Key = void 0;
const chord_1 = require("./chord");
const scale_1 = require("./scale");
const type_1 = require("./type");
class Key {
    root;
    scaleType;
    scale;
    constructor(root, type) {
        this.root = root;
        this.scaleType = type;
        this.scale = new scale_1.Scale(root, type);
    }
    getScale() {
        return this.scale;
    }
    // 7音前提
    degreeToPitchClass(degree) {
        if (!Number.isInteger(degree) || degree < 1 || degree > 7) {
            throw new Error("degree must be an integer between 1 and 7");
        }
        const intervals = type_1.SCALE_PATTERNS[this.scaleType];
        const interval = intervals[degree - 1];
        return this.root.transpose(interval);
    }
    getDiatonicChord(degree) {
        if (!Number.isInteger(degree) || degree < 1 || degree > 7) {
            throw new Error("degree must be an integer between 1 and 7");
        }
        const rootPitchClass = this.degreeToPitchClass(degree);
        const qualities = type_1.DIATONIC_QUALITIES[this.scaleType];
        const quality = qualities[degree - 1];
        return new chord_1.Chord(rootPitchClass, quality);
    }
    transpose(semitones) {
        const newRoot = this.root.transpose(semitones);
        return new Key(newRoot, this.scaleType);
    }
}
exports.Key = Key;
//# sourceMappingURL=key.js.map