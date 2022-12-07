import { FastenerShear } from "../fastenerShear";

//UNC TESTS
const a = [
  {
    nomDia: 0.138,
    threadCount: 32,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#6 unc screw capacities", () => {
  expect(Math.round(FastenerShear(a)[0])).toBeCloseTo(111);
});

const b = [
  {
    nomDia: 0.164,
    threadCount: 32,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#8 unc screw capacities", () => {
  expect(Math.round(FastenerShear(b)[0])).toBeCloseTo(177);
});

const c = [
  {
    nomDia: 0.19,
    threadCount: 24,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#10 unc screw capacities", () => {
  expect(Math.round(FastenerShear(c)[0])).toBeCloseTo(216);
});

const d = [
  {
    nomDia: 0.216,
    threadCount: 24,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#12 unc screw capacities", () => {
  expect(Math.round(FastenerShear(d)[0])).toBeCloseTo(304);
});

const e = [
  {
    nomDia: 0.25,
    threadCount: 20,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("1/4 unc screw capacities", () => {
  expect(Math.round(FastenerShear(e)[0])).toBeCloseTo(398);
});

const f = [
  {
    nomDia: 0.3125,
    threadCount: 18,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("5/16 unc screw capacities", () => {
  expect(Math.round(FastenerShear(f)[0])).toBeCloseTo(801);
});

const g = [
  {
    nomDia: 0.375,
    threadCount: 16,
    threadType: "unc",
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("3/8 unc screw capacities", () => {
  expect(Math.round(FastenerShear(g)[0])).toBeCloseTo(1194);
});

//SPACED TESTS
const s1 = [
  {
    nomDia: 0.138,
    threadCount: 20,
    threadType: "spaced",
    minorDia: 0.099,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#6 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s1)[0])).toBeCloseTo(110);
});

const s2 = [
  {
    nomDia: 0.164,
    threadCount: 18,
    threadType: "spaced",
    minorDia: 0.116,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#8 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s2)[0])).toBeCloseTo(151);
});

const s3 = [
  {
    nomDia: 0.19,
    threadCount: 16,
    threadType: "spaced",
    minorDia: 0.135,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#10 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s3)[0])).toBeCloseTo(204);
});

const s4 = [
  {
    nomDia: 0.216,
    threadCount: 14,
    threadType: "spaced",
    minorDia: 0.157,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("#12 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s4)[0])).toBeCloseTo(276);
});

const s5 = [
  {
    nomDia: 0.25,
    threadCount: 14,
    threadType: "spaced",
    minorDia: 0.185,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("1/4 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s5)[0])).toBeCloseTo(383);
});

const s6 = [
  {
    nomDia: 0.3125,
    threadCount: 12,
    threadType: "spaced",
    minorDia: 0.236,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("5/16 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s6)[0])).toBeCloseTo(748);
});

const s7 = [
  {
    nomDia: 0.375,
    threadCount: 12,
    threadType: "spaced",
    minorDia: 0.299,
    fastFu: 74000,
    fastFy: 57000,
  },
];
test("3/8 spaced screw capacities", () => {
  expect(Math.round(FastenerShear(s7)[0])).toBeCloseTo(1200);
});
