"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const key_1 = require("./lib/key");
const pitch_1 = require("./lib/pitch");
const progressionGenerator_1 = require("./lib/progressionGenerator");
const random_1 = require("./lib/random");
const type_1 = require("./lib/type");
const rand = (0, random_1.createSeededRandom)(Math.floor(Math.random() * 0xffffffff));
const key = new key_1.Key(new pitch_1.PitchClass(0), type_1.ScaleType.Major); // Cメジャー
const gen = new progressionGenerator_1.ProgressionGenerator(key, type_1.TonalityType.Major, rand);
const chords = gen.generateChords({
    section: [
        { type: type_1.SectionType.Intro, length: 4, repeat: 2, mood: type_1.Mood.Neutral },
        { type: type_1.SectionType.Verse, length: 4, repeat: 4, mood: type_1.Mood.Bright },
        { type: type_1.SectionType.Bridge, length: 4, repeat: 2, mood: type_1.Mood.Tense },
        { type: type_1.SectionType.Chorus, length: 8, repeat: 2, mood: type_1.Mood.Bright },
    ]
});
console.log(chords.map(chord => chord.toString()));
//# sourceMappingURL=main.js.map