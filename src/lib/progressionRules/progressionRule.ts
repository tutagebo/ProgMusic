import { TonalityType } from "../type";
import fs from "fs";
import JSON5 from "json5";
import { DegreeWeightTable, MOOD_BIAS, MoodBias, SectionBias, TransitionTable } from "./commonRules";

export class ProgressionRule {

    readonly tonality: TonalityType;
    readonly transitionTable: TransitionTable;
    readonly sectionBias: SectionBias;
    readonly moodBias: MoodBias;
    readonly startDegrees: DegreeWeightTable;
    readonly endDegrees: DegreeWeightTable;

    constructor(tonality: TonalityType, filePath: string) {
        this.tonality = tonality;
        this.moodBias = MOOD_BIAS;
        const data = JSON5.parse(fs.readFileSync(filePath, "utf-8"));

        this.transitionTable = data[tonality].transitionTable;
        this.sectionBias = data[tonality].sectionBias;
        this.startDegrees = data[tonality].startDegrees
        this.endDegrees = data[tonality].endDegrees;
    }
}