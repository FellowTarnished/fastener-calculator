// import { CapacityContext } from "./CapacityContext";
// import React, { useState, useContext, useEffect } from "react";

import {
  getThreadType,
  getFastType,
  getDiameter,
  getThreadCount,
  getMatType,
} from "./props";
import { FastenerShear } from "./fastenerShear";
import { fastenerTension } from "./fastenerTension";
import { bearingShear } from "./bearingShear";
import { pullover } from "./pullover";
import { pullout } from "./pullout";

export default function CalcCapacity(
  properties,
  setProperties,
  capacity,
  setCapacity,
  allResults,
  setAllResults,
  allInput,
  setAllInput
) {
  //Pull properties from input and add to state
  console.log(properties);

  getDiameter(properties, setProperties, allInput, setAllInput);
  getThreadCount(properties, setProperties, allInput, setAllInput);
  getThreadType(properties, setProperties, allInput, setAllInput);
  getFastType(properties, setProperties, allInput, setAllInput);
  getMatType(properties, setProperties, allInput, setAllInput);

  console.log(properties);

  //Find screw shear and tension
  let V = FastenerShear(properties, setAllResults);
  let T = fastenerTension(properties);
  let temp = allResults.slice();
  let tempInput = allInput.slice();

  temp[0].shear = V[0];
  temp[0].notes = V[1];
  tempInput[0].SF = V[2];
  tempInput[0].threadRootArea = V[3];
  temp[1].tension = T[0];
  temp[1].notes = T[1];
  tempInput[0].tensileStressArea = T[2];

  //Find bearing
  let Vbear = bearingShear(properties);
  temp[2].shear = Vbear[0];
  temp[2].notes = Vbear[1];

  //Find pullout and pullover
  let Tpout = pullout(properties);
  let Tpover = pullover(properties);
  console.log(Tpover);
  temp[3].tension = Tpout[0];
  temp[3].notes = Tpout[1];
  temp[4].tension = Tpover[0];
  temp[4].notes = Tpover[1];
  if (Tpover[2]) tempInput[0].thead = Tpover[2];
  tempInput[0].Dws = Tpover[3];
  tempInput[0].Dh = Tpover[4];
  tempInput[0].Cpov = Tpover[5];

  setAllResults(temp);
  setAllInput(tempInput);

  if (
    typeof T[0] !== "number" ||
    typeof V[0] !== "number" ||
    typeof Vbear[0] !== "number" ||
    typeof Tpout[0] !== "number" ||
    typeof Tpover[0] !== "number"
  ) {
    let errors = [];
    if (typeof T[0] !== "number") errors.push(T[0]);
    if (typeof V[0] !== "number") errors.push(V[0]);
    if (typeof Vbear[0] !== "number") {
      console.log(Vbear);
      Vbear.map((item) => {
        return errors.push(item);
      });
    }
    if (typeof Tpout[0] !== "number") errors.push(Tpout[0]);
    if (typeof Tpover[0] !== "number") errors.push(Tpover[0]);
    console.log(errors);
    setCapacity({ shear: " --- ", tension: " --- ", notes: errors });
    console.log(errors);
  } else {
    let Tgovern = Math.min(T[0], Tpout[0], Tpover[0]);
    let Vgovern = Math.min(V[0], Vbear[0]);
    Tgovern = Math.round(Tgovern * 10) / 10;
    Vgovern = Math.round(Vgovern * 10) / 10;
    setCapacity({ shear: Vgovern, tension: Tgovern, notes: [""] });
  }
  console.log(allResults);
  console.log(allInput);
}

export function OverwriteProperties(properties, setProperties, getValues) {
  // console.log(properties);
  // console.log(getValues());
  // let temp = properties.slice();
  // temp[0].fastDia = getValues("fastDia");
  // temp[0].fastMatInput = getValues("fastMatInput");
  // temp[0].spacing = getValues("spacing");
  // temp[0].headType = getValues("headType");
  // temp[0].interface = getValues("interface");
  // temp[0].comp1Mat = getValues("comp1Mat");
  // temp[0].comp1Thick = getValues("comp1Thick");
  // temp[0].edgeDist1 = getValues("edgeDist1");
  // temp[0].comp2Mat = getValues("comp2Mat");
  // temp[0].comp2Thick = getValues("comp2Thick");
  // temp[0].edgeDist2 = getValues("edgeDist2");
  // console.log(temp);
  // setProperties(temp);
  // console.log(properties);
}
