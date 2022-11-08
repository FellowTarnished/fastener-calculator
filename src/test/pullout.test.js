import { pullout } from "../pullover";

const a = [
  {
    nomDia: 0.138,
    comp1Thick: 0.197,
    edgeDist1: 3,
    comp1Mat: "3003-H14",
    headType: "hexHead",
    interface: "flush",
  },
];
test.skip("SF of 3 used - #6 screw hex head", () => {
  expect(Math.round(pullout(a))).toBeCloseTo(65);
});
