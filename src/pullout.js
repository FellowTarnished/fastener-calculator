export function pullout(properties) {
  let d = properties[0].nomDia;
  let t2 = +properties[0].comp2Thick;
  let Fu2 = properties[0].comp2Fu;
  let Fy2 = properties[0].comp2Fy;
  let fastFu = properties[0].fastFu;
  let fastFy = properties[0].fastFy;
  let N = properties[0].threadCount;
  let threadType = properties[0].threadType;

  let Tint = null;
  let Text = null;
  let SF = null;
  let Atse = null;
  let Atsi = null;

  //find safety factor
  if (d <= 0.25) SF = 3;
  else SF = 2.5;

  //Below properties taken from Table 20.1 of AAMA TIR-A9-14
  if (d === 0.138) {
    Atse = 0.006;
    Atsi = 0.009;
  } else if (d === 0.164) {
    Atse = 0.007;
    Atsi = 0.01;
  } else if (d === 0.19) {
    Atse = 0.011;
    Atsi = 0.017;
  } else if (d === 0.216) {
    Atse = 0.013;
    Atsi = 0.019;
  } else if (d === 0.25) {
    Atse = 0.018;
    Atsi = 0.027;
  } else if (d === 0.3125) {
    Atse = 0.026;
    Atsi = 0.038;
  } else if (d === 0.375) {
    Atse = 0.036;
    Atsi = 0.052;
  }

  //external thread stripping (fastener)
  let Text1 = (t2 * N * Atse * fastFu) / (SF * 3 ** 0.5);
  let Text2 = (t2 * N * Atse * 0.75 * fastFy) / 3 ** 0.5;

  Text = Math.min(Text1, Text2);

  //internal UNC thread stripping (base metal)
  if (threadType === "unc") {
    if (t2 < 0.06) {
      Tint = "ERROR TOO THIN BASE MATERIAL FOR UNC";
    }
    if (t2 >= 0.06 && t2 <= 0.08)
      Tint = (0.56 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
    if (t2 > 0.08 && t2 <= 0.125)
      Tint = (0.665 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
    if (t2 > 0.125 && t2 < 0.25)
      Tint =
        ((0.665 * Math.PI) / 3 ** 0.5) * d * Fy2 * (0.25 - t2) +
        (2 / 3 ** 0.5) * N * Atsi * Fu2 * (t2 - 0.125);
    if (t2 >= 0.25 && t2 <= 0.375) Tint = (t2 * N * Atsi * Fu2) / 3 ** 0.5;
    if (t2 > 0.375) Tint = "ERROR PULLOUT INFO NOT AVAILABLE FOR BASE MATERIAL";
  }
  //internal SPACED thread stripping (base metal)
  else if (threadType === "spaced") {
    if (t2 < 0.038) {
      Tint = "ERROR TOO THIN BASE MATERIAL";
    }
    if (t2 >= 0.038 && t2 < 0.08)
      Tint = (0.56 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
    if (t2 >= 0.08 && t2 <= 2 / N)
      Tint = (0.665 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
    if (t2 > 2 / N && t2 < 4 / N)
      Tint =
        ((0.665 * Math.PI) / 3 ** 0.5) * d * Fy2 * (4 / N - t2) +
        ((1.8 * Math.PI) / 3 ** 0.5) * d * Fu2 * (t2 - 2 / N);
    if (t2 >= 4 / N && t2 <= 0.375)
      Tint = (0.9 * Math.PI * d * t2 * Fu2) / 3 ** 0.5;
    if (t2 > 0.375) Tint = "ERROR PULLOUT INFO NOT AVAILABLE FOR BASE MATERIAL";
  }
  if (typeof Tint === "string") return Tint;
  else return Math.min(Text, Tint);
}
