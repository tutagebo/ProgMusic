"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseByWeight = chooseByWeight;
function chooseByWeight(rules) {
    const total = rules.reduce((sum, r) => sum + r.weight, 0);
    const r = Math.random() * total;
    let acc = 0;
    for (const rule of rules) {
        acc += rule.weight;
        if (r <= acc)
            return rule.to;
    }
    // 浮動小数誤差対策
    return rules[rules.length - 1]?.to;
}
//# sourceMappingURL=utils.js.map