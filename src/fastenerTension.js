export function fastenerTension(properties) {
  let K = properties[0].minorDia;
  let D = properties[0].nomDia;
  let N = properties[0].threadCount;
  let Fu = properties[0].fastFu;
  let Fy = properties[0].fastFy;
  let TSA = null;
  let T = [null, undefined];

  if (properties[0].threadType === "unc") {
    TSA = (Math.PI * (D - 0.9743 / N) ** 2) / 4;
  } else if (properties[0].threadType === "spaced") {
    TSA = (Math.PI * K ** 2) / 4;
  } else console.error("error");

  if (properties[0].nomDia <= 0.25) {
    let SF = 3;
    let Ft = Math.min(Fu / SF, 0.75 * Fy);
    T[0] = TSA * Ft;
  } else if (properties[0].nomDia > 0.25) {
    let SF = 2.5;
    let Ft = Math.min(Fu / SF, 0.75 * Fy);
    T[0] = TSA * Ft;
  } else console.error("error");

  T[1] = "`T_A = A(S)*F_t` ` ` ` ` ` ` ` ` ` [Eqn. 7.4]`";
  T[2] = TSA;

  return T;
}
