"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.END_DEGREE_TABLE = exports.START_DEGREE_TABLE = exports.MOOD_BIAS = exports.MAJOR_BASE_TRANSITIONS = void 0;
// メジャーキー用のベース遷移
exports.MAJOR_BASE_TRANSITIONS = {
    1: [
        { to: 4, weight: 3 }, // I → IV
        { to: 5, weight: 4 }, // I → V
        { to: 6, weight: 2 }, // I → vi
        { to: 2, weight: 1 }, // I → ii
    ],
    2: [
        { to: 5, weight: 5 }, // ii → V
        { to: 7, weight: 1 }, // ii → vii°
    ],
    3: [
        { to: 6, weight: 3 }, // iii → vi
        { to: 4, weight: 2 }, // iii → IV
    ],
    4: [
        { to: 5, weight: 4 }, // IV → V
        { to: 2, weight: 2 }, // IV → ii
        { to: 1, weight: 1 }, // IV → I
    ],
    5: [
        { to: 1, weight: 6 }, // V → I（超帰りたがる）
        { to: 6, weight: 3 }, // V → vi
    ],
    6: [
        { to: 2, weight: 3 }, // vi → ii
        { to: 4, weight: 3 }, // vi → IV
        { to: 5, weight: 1 }, // vi → V
    ],
    7: [
        { to: 1, weight: 6 }, // vii° → I（超つよ解決）
        { to: 3, weight: 1 }, // vii° → iii
    ],
};
exports.MOOD_BIAS = {
    neutral: {},
    bright: {
        1: 1.5,
        4: 1.5,
        5: 1.5,
        6: 1.5,
        2: 0.8,
        3: 0.8,
        7: 0.8,
    },
    dark: {
        2: 1.5,
        3: 1.5,
        6: 1.5,
        1: 0.8,
        4: 0.8,
        5: 0.8,
    },
    tense: {
        5: 1.7,
        7: 1.7,
        1: 0.7,
    },
};
exports.START_DEGREE_TABLE = {
    neutral: [
        { degree: 1, weight: 1 },
        { degree: 2, weight: 1 },
        { degree: 3, weight: 1 },
        { degree: 4, weight: 1 },
        { degree: 5, weight: 1 },
        { degree: 6, weight: 1 },
        { degree: 7, weight: 1 },
    ],
    bright: [
        { degree: 1, weight: 5 },
        { degree: 4, weight: 3 },
        { degree: 5, weight: 3 },
    ],
    dark: [
        { degree: 6, weight: 5 },
        { degree: 2, weight: 3 },
        { degree: 3, weight: 2 },
    ],
    tense: [
        { degree: 5, weight: 5 },
        { degree: 7, weight: 4 },
        { degree: 2, weight: 3 },
    ]
};
exports.END_DEGREE_TABLE = {
    neutral: [
        { degree: 1, weight: 1 },
        { degree: 2, weight: 1 },
        { degree: 3, weight: 1 },
        { degree: 4, weight: 1 },
        { degree: 5, weight: 1 },
        { degree: 6, weight: 1 },
        { degree: 7, weight: 1 },
    ],
    bright: [
        { degree: 1, weight: 6 },
        { degree: 5, weight: 2 },
        { degree: 6, weight: 1 },
    ],
    dark: [
        { degree: 6, weight: 5 },
        { degree: 1, weight: 2 },
        { degree: 3, weight: 2 },
    ],
    tense: [
        { degree: 1, weight: 5 },
        { degree: 5, weight: 3 },
        { degree: 7, weight: 2 },
    ],
};
//# sourceMappingURL=progressionRules.js.map