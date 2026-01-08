"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scale = void 0;
const type_1 = require("./type");
class Scale {
    root;
    intervals;
    constructor(root, type) {
        this.root = root;
        this.intervals = type_1.SCALE_PATTERNS[type];
    }
}
exports.Scale = Scale;
//# sourceMappingURL=scale.js.map