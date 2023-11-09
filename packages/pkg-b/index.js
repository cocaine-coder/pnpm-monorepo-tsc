"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avg = void 0;
var pkg_a_1 = require("@pnpm-monorepo-tsc-demo/pkg-a");
function avg(arr) {
    if (arr.length < 1)
        return undefined;
    return arr.reduce(function (p, c) { return (0, pkg_a_1.sum)(p, c); }, 0) / arr.length;
}
exports.avg = avg;
