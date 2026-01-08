"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressionRule = void 0;
const fs_1 = __importDefault(require("fs"));
const json5_1 = __importDefault(require("json5"));
const commonRules_1 = require("./commonRules");
class ProgressionRule {
    tonality;
    transitionTable;
    sectionBias;
    moodBias;
    startDegrees;
    endDegrees;
    constructor(tonality, filePath) {
        this.tonality = tonality;
        this.moodBias = commonRules_1.MOOD_BIAS;
        const data = json5_1.default.parse(fs_1.default.readFileSync(filePath, "utf-8"));
        this.transitionTable = data[tonality].transitionTable;
        this.sectionBias = data[tonality].sectionBias;
        this.startDegrees = data[tonality].startDegrees;
        this.endDegrees = data[tonality].endDegrees;
    }
}
exports.ProgressionRule = ProgressionRule;
//# sourceMappingURL=progressionRule.js.map