import { Key } from "./lib/key";
import { PitchClass } from "./lib/pitch";
import { ProgressionGenerator } from "./lib/progressionGenerator";
import { createSeededRandom } from "./lib/random";
import { Mood, ScaleType, SectionType, TonalityType } from "./lib/type";


const rand = createSeededRandom(Math.floor(Math.random() * 0xffffffff));

const key = new Key(new PitchClass(0), ScaleType.Major); // Cメジャー
const gen = new ProgressionGenerator(key, TonalityType.Major, rand);

const chords = gen.generateChords({
    section: [
        { type: SectionType.Intro, length: 4, repeat: 2, mood: Mood.Neutral },
        { type: SectionType.Verse, length: 4, repeat: 4, mood: Mood.Bright },
        { type: SectionType.Bridge, length: 4, repeat: 2, mood: Mood.Tense },
        { type: SectionType.Chorus, length: 8, repeat: 2, mood: Mood.Bright },
    ]
});
console.log(chords.map(chord => chord.toString()));
