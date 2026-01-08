import { PitchClass } from "./pitch";
import { ScaleType, SCALE_PATTERNS } from "./type";

export class Scale {
    private root: PitchClass;
    private intervals: readonly number[];
    constructor(root: PitchClass, type: ScaleType) {
        this.root = root;
        this.intervals = SCALE_PATTERNS[type];
    }
}