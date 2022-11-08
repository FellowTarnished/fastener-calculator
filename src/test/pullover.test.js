import { pullover } from "../pullover";

//hex head tests
const a1 = [
  {
    nomDia: 0.138,
    comp1Thick: 0.197,
    edgeDist1: 3,
    comp1Fu: 20000,
    headType: "hexHead",
    interface: "flush",
  },
];
test("SF of 3 used - #6 screw hex head", () => {
  expect(Math.round(pullover(a1))).toBeCloseTo(65);
});

const a2 = [
  {
    nomDia: 0.375,
    comp1Thick: 0.197,
    edgeDist1: 3,
    comp1Fu: 20000,
    headType: "hexHead",
    interface: "flush",
  },
];
test("SF of 2.5 used - 3/8 screw hex head", () => {
  expect(Math.round(pullover(a2))).toBeCloseTo(197);
});

const a3 = [
  {
    nomDia: 0.375,
    comp1Thick: 0.197,
    edgeDist1: 3,
    comp1Fu: 20000,
    headType: "hexHead",
    interface: "crown",
  },
];
test("crown interface", () => {
  expect(Math.round(pullover(a3))).toBeCloseTo(138);
});

//hex head with washer tests
const b = [
  {
    nomDia: 0.138,
    comp1Thick: 0.197,
    edgeDist1: 3,
    comp1Fu: 20000,
    comp1Fy: 17000,
    headType: "hexWithWasher",
    interface: "flush",
  },
];
test("t1/Dws>0.5", () => {
  expect(Math.round(pullover(b))).toBeCloseTo(677);
});

const b1 = [
  {
    nomDia: 0.138,
    comp1Thick: 0.05,
    edgeDist1: 3,
    comp1Fu: 20000,
    comp1Fy: 17000,
    headType: "hexWithWasher",
    interface: "flush",
  },
];
test("t1/Dws<0.5", () => {
  expect(Math.round(pullover(b1))).toBeCloseTo(117);
});

const b2 = [
  {
    nomDia: 0.138,
    comp1Thick: 0.035,
    edgeDist1: 3,
    comp1Fu: 20000,
    headType: "hexWithWasher",
    interface: "flush",
  },
];
test("too thin base material", () => {
  expect(pullover(b2)).toMatch("ERROR TOO THIN BASE MATERIAL");
});

//countersunk tests
const c = [
  {
    nomDia: 0.138,
    comp1Thick: 0.18,
    edgeDist1: 3,
    comp1Fu: 20000,
    comp1Fy: 17000,
    headType: "countersunk",
    interface: "flush",
  },
];
test("t1/d>1.1", () => {
  expect(Math.round(pullover(c))).toBeCloseTo(263);
});

const c1 = [
  {
    nomDia: 0.138,
    comp1Thick: 0.06,
    edgeDist1: 3,
    comp1Fu: 20000,
    comp1Fy: 17000,
    headType: "countersunk",
    interface: "flush",
  },
];
test("t1/d<1.1", () => {
  expect(Math.round(pullover(c1))).toBeCloseTo(42);
});

const c2 = [
  {
    nomDia: 0.138,
    comp1Thick: 0.035,
    edgeDist1: 3,
    comp1Fu: 20000,
    headType: "countersunk",
    interface: "flush",
  },
];
test("too thin base material - countersunk", () => {
  expect(pullover(c2)).toMatch("ERROR TOO THIN BASE MATERIAL");
});
