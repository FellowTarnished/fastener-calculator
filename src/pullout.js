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
  let equationTracker = undefined;
  let equationTrackerExt = undefined;
  let equationTrackerInt = undefined;

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
  if (Text1 > Text2)
    equationTrackerExt = "t2*n*Atse*Ftu/(Sf*3^0.5)   (Eqn. 10.8)";
  else equationTrackerExt = "t2*n*Atse*0.75*Fty/d^0.5   (Eqn. 10.9)";

  //internal UNC thread stripping (base metal)
  if (threadType === "unc") {
    if (t2 < 0.06) {
      Tint =
        "INVALID COMPONENT #2 THICKNESS: t2 must be > 0.06 inches for UNC screws";
    }
    if (t2 >= 0.06 && t2 <= 0.08) {
      Tint = (0.56 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
      equationTrackerInt = "Km*pi*d*t*Fty/e^0.5   (Eqn. 22.1)";
    }
    if (t2 > 0.08 && t2 <= 0.125) {
      Tint = (0.665 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
      equationTrackerInt = "Km*pi*d*t*Fty/e^0.5   (Eqn. 22.1)";
    }
    if (t2 > 0.125 && t2 < 0.25) {
      Tint =
        ((0.665 * Math.PI) / 3 ** 0.5) * d * Fy2 * (0.25 - t2) +
        (2 / 3 ** 0.5) * N * Atsi * Fu2 * (t2 - 0.125);
      equationTrackerInt =
        "(0.665*pi/3^0.5)*d*Fty*(0.25-t)+(2/3^0.5)*n*Atsi*Ftu*(t-0.125)   (Eqn. 22.3)";
    }
    if (t2 >= 0.25 && t2 <= 0.375) {
      Tint = (t2 * N * Atsi * Fu2) / 3 ** 0.5;
      equationTrackerInt = "t*n*Atsi*Ftu/3^0.5   (Eqn. 22.2)";
    }
    if (t2 > 0.375)
      Tint =
        "INVALID COMPONENT #2 THICKNESS: t2 must be < 0.375 inches for specification to provide pullout values";
  }
  //internal SPACED thread stripping (base metal)
  else if (threadType === "spaced") {
    if (t2 < 0.038) {
      Tint =
        "INVALID COMPONENT #2 THICKNESS: t2 must be > 0.06 inches for SPACED screws";
    }
    if (t2 >= 0.038 && t2 < 0.08) {
      Tint = (0.56 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
      equationTrackerInt = "Km*pi*d*t*Fty/e^0.5   (Eqn. 22.4)";
    }
    if (t2 >= 0.08 && t2 <= 2 / N) {
      Tint = (0.665 * Math.PI * d * t2 * Fy2) / 3 ** 0.5;
      equationTrackerInt = "Km*pi*d*t*Fty/e^0.5   (Eqn. 22.4)";
    }
    if (t2 > 2 / N && t2 < 4 / N) {
      Tint =
        ((0.665 * Math.PI) / 3 ** 0.5) * d * Fy2 * (4 / N - t2) +
        ((1.8 * Math.PI) / 3 ** 0.5) * d * Fu2 * (t2 - 2 / N);
      equationTrackerInt =
        "(0.665*pi/3^0.5)*d*Fty*((4/n)-t)+(1.8*pi/3^0.5)*d*Ftu*(t-(2/n))   (Eqn. 22.6)";
    }
    if (t2 >= 4 / N && t2 <= 0.375) {
      Tint = (0.9 * Math.PI * d * t2 * Fu2) / 3 ** 0.5;
      equationTrackerInt = "0.9*n*d*t*Ftu/3^0.5   (Eqn. 22.5)";
    }
    if (t2 > 0.375)
      Tint =
        "INVALID COMPONENT #2 THICKNESS: t2 must be < 0.375 inches for specification to provide pullout values";
  }
  console.log(Tint);
  if (Tint > Text) equationTracker = equationTrackerInt;
  else if (Text >= Tint) equationTracker = equationTrackerExt;
  if (typeof Tint === "string") return [Tint, undefined];
  else return [Math.min(Text, Tint), equationTracker];
}
