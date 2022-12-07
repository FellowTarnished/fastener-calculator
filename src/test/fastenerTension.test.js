import { fastenerTension } from "../fastenerTension";

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
  expect(Math.round(fastenerTension(a)[0])).toBeCloseTo(224);
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
  expect(Math.round(fastenerTension(b)[0])).toBeCloseTo(346);
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
  expect(Math.round(fastenerTension(c)[0])).toBeCloseTo(432);
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
  expect(Math.round(fastenerTension(d)[0])).toBeCloseTo(596);
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
  expect(Math.round(fastenerTension(e)[0])).toBeCloseTo(785);
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
  expect(Math.round(fastenerTension(f)[0])).toBeCloseTo(1552);
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
  expect(Math.round(fastenerTension(g)[0])).toBeCloseTo(2294);
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
  expect(Math.round(fastenerTension(s1)[0])).toBeCloseTo(190);
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
  expect(Math.round(fastenerTension(s2)[0])).toBeCloseTo(261);
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
  expect(Math.round(fastenerTension(s3)[0])).toBeCloseTo(353);
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
  expect(Math.round(fastenerTension(s4)[0])).toBeCloseTo(478);
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
  expect(Math.round(fastenerTension(s5)[0])).toBeCloseTo(663);
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
  expect(Math.round(fastenerTension(s6)[0])).toBeCloseTo(1295);
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
  expect(Math.round(fastenerTension(s7)[0])).toBeCloseTo(2078);
});
