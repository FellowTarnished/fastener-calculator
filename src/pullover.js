export function pullover(properties) {
  let d = properties[0].nomDia;
  let headType = properties[0].headType;
  let inter = properties[0].interface;
  let t1 = +properties[0].comp1Thick;
  let Fu1 = properties[0].comp1Fu;
  let Fy1 = properties[0].comp1Fy;
  let T = null;
  let SF = null;
  let Cpov = null;
  let equationTracker = undefined;

  if (inter === "flush" || inter === "valley") Cpov = 1.0;
  if (inter === "crown") Cpov = 0.7;

  //find safety factor
  if (d <= 0.25) SF = 3;
  else SF = 2.5;

  let Dws = null;

  let Dh = null;
  if (headType === "hexHead" || headType === "hexWithWasher") {
    if (d === 0.138) Dh = 0.138 + 0.0625;
    else if (d === 0.164) Dh = 0.164 + 0.0625;
    else if (d === 0.19) Dh = 0.19 + 0.0625;
    else if (d === 0.216) Dh = 0.216 + 0.0625;
    else if (d === 0.25) Dh = 0.25 + 0.0625;
    else if (d === 0.3125) Dh = 0.3125 + 0.0625;
    else if (d === 0.375) Dh = 0.375 + 0.0625;
  } else {
    if (d === 0.138) Dh = 0.138 + 0.013;
    else if (d === 0.164) Dh = 0.177; //per Table 11.1
    else if (d === 0.19) Dh = 0.201; //per Table 11.1
    else if (d === 0.216) Dh = 0.228; //per Table 11.1
    else if (d === 0.25) Dh = 0.266; //per Table 11.1
    else if (d === 0.3125) Dh = 0.3125 + 0.016;
    else if (d === 0.375) Dh = 0.375 + 0.016;
  }

  //hex head only
  if (headType === "hexHead") {
    if (d === 0.138) Dws = 0.25;
    else if (d === 0.164) Dws = 0.25;
    else if (d === 0.19) Dws = 5 / 16;
    else if (d === 0.216) Dws = 5 / 16;
    else if (d === 0.25) Dws = 3 / 8;
    else if (d === 0.3125) Dws = 1 / 2;
    else if (d === 0.375) Dws = 9 / 16;

    T = (Cpov * t1 * Fu1 * (Dws - Dh)) / SF;
    equationTracker =
      "`(C_(pov)*t_1*F_(tu1)*(D_(WS)-D_H))/S_F ` ` ` ` ` ` ` ` ` ` [Eqn. 11.1]`";
  }

  //hex head with washer or flange
  else if (headType === "hexWithWasher") {
    if (d === 0.138) Dws = 0.328;
    else if (d === 0.164) Dws = 0.348;
    else if (d === 0.19) Dws = 0.414;
    else if (d === 0.216) Dws = 0.432;
    else if (d === 0.25) Dws = 0.52;
    else if (d === 0.3125) Dws = 0.676;
    else if (d === 0.375) Dws = 0.78;

    let ratio = t1 / Dws;

    //equation 11.2
    if (t1 < 0.04)
      T = "INVALID COMPONENT #1 THICKNESS: t1 must be >= 0.04 inches";
    else if (t1 / Dws > 0.5) {
      ratio = 0.5;
      T = ((1.0 + 1.7 * ratio) * Dws * t1 * Fy1) / SF;
      equationTracker =
        "`((1.0+1.7*0.5)*D_(WS)*t_1*F_(TY1))/S_F ` ` ` ` ` ` ` ` ` ` [Eqn. 11.2]`";
    } else {
      T = ((1.0 + 1.7 * ratio) * Dws * t1 * Fy1) / SF;
      equationTracker =
        "`(1.0+1.7*t_1/D_(WS))*D_(WS)*t_1*F_(TY1)/S_F ` ` ` ` ` ` ` ` ` ` [Eqn. 11.2]`";
    }
  }

  //equation 11.3
  else if (headType === "countersunk") {
    let thead = null;
    if (d === 0.138) thead = 0.059;
    else if (d === 0.164) thead = 0.094;
    else if (d === 0.19) thead = 0.11;
    else if (d === 0.216) thead = 0.092;
    else if (d === 0.25) thead = 0.107;
    else if (d === 0.3125) thead = 0.134;
    else if (d === 0.375) thead = 0.161;

    if (thead > t1)
      T = "INVALID COMPONENT #1 THICKNESS: t1 must be > the fastener head";
    else if (t1 >= 0.06 && t1 < 0.19 && t1 / d > 1.1) {
      T = ((0.27 + 1.45 * 1.1) * d * t1 * Fy1) / SF;
      equationTracker =
        "`(0.27+1.45*1.1)*d*t_1*F_(TY1)/S_F ` ` ` ` ` ` ` ` ` ` [Eqn. 11.3]`";
    } else {
      T = ((0.27 + (1.45 * t1) / d) * d * t1 * Fy1) / SF;
      equationTracker =
        "`(0.27+1.45*t_1/d)*d*t_1*F_(TY1)/S_F ` ` ` ` ` ` ` ` ` ` [Eqn. 11.3]`";
    }
  }
  return [T, equationTracker];
}
