export function FastenerShear(properties) {
  let K = properties[0].minorDia;
  let D = properties[0].nomDia;
  let N = properties[0].threadCount;
  let Fu = properties[0].fastFu;
  let Fy = properties[0].fastFy;
  let Fv = undefined;
  let TRA = null;
  let V = [null, undefined];
  let SF = null;

  if (properties[0].threadType === "unc") {
    TRA = (Math.PI * (D - 1.2269 / N) ** 2) / 4;
  } else if (properties[0].threadType === "spaced") {
    TRA = (Math.PI * K ** 2) / 4;
  } else console.error("error");

  if (properties[0].nomDia <= 0.25) {
    SF = 3;
    Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V[0] = TRA * Fv;
  } else if (properties[0].nomDia > 0.25) {
    SF = 2.5;
    Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V[0] = TRA * Fv;
  } else console.error("error");

  V[1] = "`V_A = A(R)*F_V` ` ` ` ` ` ` ` ` ` [Eqn. 7.5]`";

  V[2] = SF;

  return V;
}
