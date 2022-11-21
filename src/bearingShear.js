//Bearing and tilting capacities per Section 8.3.2 of AAMA TIR-A9-14

export function bearingShear(properties) {
  //diameter
  let d = +properties[0].nomDia;
  //base material thicknesses
  let t1 = +properties[0].comp1Thick;
  let t2 = +properties[0].comp2Thick;
  let t = [t1, t2];
  //fastener spacing
  let s = +properties[0].spacing;
  //edge distances
  let e1 = +properties[0].edgeDist1;
  let e2 = +properties[0].edgeDist2;
  let e = [e1, e2];
  //base material types
  // let cm1 = properties[0].comp1Mat;
  // let cm2 = properties[0].comp2Mat;
  // let cm = [cm1, cm2];

  let equationTracker = undefined;
  let equationTrackerTilt = undefined;

  let SF = null;

  //find safety factor
  if (d <= 0.25) SF = 3;
  else SF = 2.5;

  let V = [null, null];

  let invalidInput = undefined;

  //Find component ultimate strengths
  let Fu = [properties[0].comp1Fu, properties[0].comp2Fu];

  //Find bearing capacities
  for (let i = 0; i < 2; i++) {
    if ((+s < 2.5 * d && e[0] < 1.5 * d) || (+s < 2.5 * d && e[1] < 1.5 * d)) {
      invalidInput = [
        "INVALID SCREW SPACING: must be > 2.5 d.",
        "INVALID EDGE DISTANCE: must be >= 1.5d",
      ];
    } else if (+s < 2.5 * d) {
      invalidInput = ["INVALID SCREW SPACING: must be > 2.5 d"];
    } else if (e[i] >= 2 * d) {
      V[i] = (2 * d * t[i] * Fu[i]) / SF;
      equationTracker =
        "`V_b = 2*d*t*F_(TU) / Omega ` ` ` ` ` ` ` ` ` ` [Eqn. 8.14]";
    } else if (e[i] < 2.0 * d && e[i] >= 1.5 * d) {
      V[i] = (t[i] * e[i] * Fu[i]) / SF;
      equationTracker =
        "`V_b = t*e_a*F_(TU) / Omega ` ` ` ` ` ` ` ` ` ` [Eqn. 8.15]";
    } else {
      invalidInput = ["INVALID EDGE DISTANCE: must be >= 1.5d"];
    }
  }

  //Find tilting value
  if (t[0] <= t[1]) {
    V[2] = (4.2 * (t[1] ** 3 * d) ** 0.5 * Fu[1]) / SF;
    equationTrackerTilt =
      "`V_b = (4.2*sqrt(t_2^3*d)*F_(TU))/Omega` ` ` ` ` ` ` ` ` ` [Eqn. 8.16]`";
  }

  if (V[2]) {
    if (V[2] > V[1] && V[2] > V[1]) {
      equationTracker = equationTrackerTilt;
    }
  }

  if (invalidInput) return invalidInput;
  else if (V[2]) return [Math.min(V[0], V[1], V[2]), equationTracker];
  else return [Math.min(V[0], V[1]), equationTracker];
}
