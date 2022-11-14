export function FastenerShear(properties) {
  let K = properties[0].minorDia;
  let D = properties[0].nomDia;
  let N = properties[0].threadCount;
  let Fu = properties[0].fastFu;
  let Fy = properties[0].fastFy;
  let Fv = undefined;
  let TRA = null;
  let V = [null, undefined];

  if (properties[0].threadType === "unc") {
    TRA = (Math.PI * (D - 1.2269 / N) ** 2) / 4;
  } else if (properties[0].threadType === "spaced") {
    TRA = (Math.PI * K ** 2) / 4;
  } else console.error("error");

  if (properties[0].nomDia <= 0.25) {
    let SF = 3;
    Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V[0] = TRA * Fv;
  } else if (properties[0].nomDia > 0.25) {
    let SF = 2.5;
    Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V[0] = TRA * Fv;
  } else console.error("error");

  V[1] = "V.allow = A(R)*Fv   (Eqn. 7.5)";
  return V;
}
