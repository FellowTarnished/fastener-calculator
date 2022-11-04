import { fastenerShear } from "../fastenerShear";

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
  expect(Math.round(fastenerShear(a))).toBeCloseTo(111);
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
  expect(Math.round(fastenerShear(b))).toBeCloseTo(177);
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
  expect(Math.round(fastenerShear(c))).toBeCloseTo(216);
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
  expect(Math.round(fastenerShear(d))).toBeCloseTo(304);
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
  expect(Math.round(fastenerShear(e))).toBeCloseTo(398);
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
  expect(Math.round(fastenerShear(f))).toBeCloseTo(801);
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
  expect(Math.round(fastenerShear(g))).toBeCloseTo(1194);
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
  expect(Math.round(fastenerShear(s1))).toBeCloseTo(110);
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
  expect(Math.round(fastenerShear(s2))).toBeCloseTo(151);
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
  expect(Math.round(fastenerShear(s3))).toBeCloseTo(204);
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
  expect(Math.round(fastenerShear(s4))).toBeCloseTo(276);
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
  expect(Math.round(fastenerShear(s5))).toBeCloseTo(383);
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
  expect(Math.round(fastenerShear(s6))).toBeCloseTo(748);
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
  expect(Math.round(fastenerShear(s7))).toBeCloseTo(1200);
});
