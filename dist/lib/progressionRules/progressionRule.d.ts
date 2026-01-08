import { TonalityType } from "../type";
import { DegreeWeightTable, MoodBias, SectionBias, TransitionTable } from "./commonRules";
export declare class ProgressionRule {
    readonly tonality: TonalityType;
    readonly transitionTable: TransitionTable;
    readonly sectionBias: SectionBias;
    readonly moodBias: MoodBias;
    readonly startDegrees: DegreeWeightTable;
    readonly endDegrees: DegreeWeightTable;
    constructor(tonality: TonalityType, filePath: string);
}
//# sourceMappingURL=progressionRule.d.ts.map