import { Key } from "./key";
import { Chord } from "./chord";
import { Degree, ProgressionOptions, SectionStructure, TonalityType } from "./type";
export declare class ProgressionGenerator {
    private readonly key;
    private rand;
    private rules;
    constructor(key: Key, tonality: TonalityType, rand: () => number);
    private applyMood;
    private randomStartDegree;
    private randomEndDegree;
    generateSectionDegrees(section: SectionStructure): Degree[];
    generateChords(options: ProgressionOptions): Chord[];
}
//# sourceMappingURL=progressionGenerator.d.ts.map