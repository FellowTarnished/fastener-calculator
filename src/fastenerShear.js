export function fastenerShear(properties) {
  let K = properties[0].minorDia;
  let D = properties[0].nomDia;
  let N = properties[0].threadCount;
  let Fu = properties[0].fastFu;
  let Fy = properties[0].fastFy;
  let TRA = null;
  let V = null;

  if (properties[0].threadType === "unc") {
    TRA = (Math.PI * (D - 1.2269 / N) ** 2) / 4;
  } else if (properties[0].threadType === "spaced") {
    TRA = (Math.PI * K ** 2) / 4;
  } else console.error("error");

  if (properties[0].nomDia <= 0.25) {
    let SF = 3;
    let Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V = TRA * Fv;
  } else if (properties[0].nomDia > 0.25) {
    let SF = 2.5;
    let Fv = Math.min(Fu / (SF * 3 ** 0.5), 0.75 * Fy);
    V = TRA * Fv;
  } else console.error("error");

  return V;
}
