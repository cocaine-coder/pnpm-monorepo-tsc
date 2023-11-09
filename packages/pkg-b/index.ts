import { sum } from "@cocaine_coder/pkg-a";

export function avg(arr: number[]) {
    if (arr.length < 1) return undefined;
    return arr.reduce((p, c) => sum(p, c), 0) / arr.length;
}