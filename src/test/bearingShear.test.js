import { bearingShear } from "../bearingShear";

const a1 = [
  {
    nomDia: 0.25,
    comp1Thick: 0.6,
    comp2Thick: 0.197,
    edgeDist1: 3,
    edgeDist2: 0.5,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("SF of 3 used when e>=2*d", () => {
  expect(Math.round(bearingShear(a1))).toBeCloseTo(657);
});

const a2 = [
  {
    nomDia: 0.25,
    comp1Thick: 0.197,
    comp2Thick: 0.197,
    edgeDist1: 3,
    edgeDist2: 0.375,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("SF of 3 used when e<2*d", () => {
  expect(Math.round(bearingShear(a2))).toBeCloseTo(493);
});

const a3 = [
  {
    nomDia: 0.375,
    comp1Thick: 0.6,
    comp2Thick: 0.197,
    edgeDist1: 3,
    edgeDist2: 0.75,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("SF of 2.5 used when e>=2*d", () => {
  expect(Math.round(bearingShear(a3))).toBeCloseTo(1182);
});

const a4 = [
  {
    nomDia: 0.375,
    comp1Thick: 0.197,
    comp2Thick: 0.197,
    edgeDist1: 3,
    edgeDist2: 0.5625,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("SF of 2.5 used when e<2*d", () => {
  expect(Math.round(bearingShear(a4))).toBeCloseTo(887);
});

const c = [
  {
    nomDia: 0.25,
    comp1Thick: 0.197,
    comp2Thick: 0.197,
    edgeDist1: 0.374,
    edgeDist2: 2,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("error when e1 = 1.49d", () => {
  expect(bearingShear(c)).toMatch(/INVALID EDGE DIST/);
});

const d = [
  {
    nomDia: 0.25,
    comp1Thick: 0.197,
    comp2Thick: 0.197,
    edgeDist1: 2,
    edgeDist2: 0.374,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
  },
];
test("error when e2 = 1.49d", () => {
  expect(bearingShear(d)).toMatch(/INVALID EDGE DIST/);
});

const e = [
  {
    nomDia: 0.375,
    comp1Thick: 0.05,
    comp2Thick: 0.0625,
    edgeDist1: 2,
    edgeDist2: 2,
    comp1Mat: "6061-T6",
    comp2Mat: "5005-H34",
    comp1Fu: 63000,
    comp2Fu: 20000,
  },
];
test("screw tilting", () => {
  expect(Math.round(bearingShear(e))).toBeCloseTo(321);
});

const f = [
  {
    nomDia: 0.25,
    comp1Thick: 0.05,
    comp2Thick: 0.0625,
    edgeDist1: 2,
    edgeDist2: 2,
    comp1Mat: "3003-H14",
    comp2Mat: "5005-H34",
    comp1Fu: 20000,
    comp2Fu: 20000,
    spacing: 0.624,
  },
];
test("error due to spacing", () => {
  expect(bearingShear(f)).toMatch(/INVALID SPACING/);
});
