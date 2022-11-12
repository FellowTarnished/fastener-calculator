// import { CapacityContext } from "./CapacityContext";
// import React, { useState, useContext, useEffect } from "react";
import {
  getThreadType,
  getFastType,
  getDiameter,
  getThreadCount,
  getMatType,
} from "./props";
import { fastenerShear } from "./fastenerShear";
import { fastenerTension } from "./fastenerTension";
import { bearingShear } from "./bearingShear";
import { pullover } from "./pullover";
import { pullout } from "./pullout";

export default function CalcCapacity(
  properties,
  setProperties,
  capacity,
  setCapacity
) {
  //Pull properties from input and add to state
  getDiameter(properties, setProperties);
  getThreadCount(properties, setProperties);
  getThreadType(properties, setProperties);
  getFastType(properties, setProperties);
  getMatType(properties, setProperties);

  console.log(properties);

  //Find screw shear and tension
  let Vfast = fastenerShear(properties);
  let Tfast = fastenerTension(properties);

  //Find bearing
  let Vbear = bearingShear(properties);
  let Tpout = pullout(properties);
  let Tpover = pullover(properties);

  if (
    typeof Tfast !== "number" ||
    typeof Vfast !== "number" ||
    typeof Vbear !== "number" ||
    typeof Tpout !== "number" ||
    typeof Tpover !== "number"
  ) {
    let temp = [];
    if (typeof Tfast !== "number") temp.push(Tfast);
    if (typeof Vfast !== "number") temp.push(Vfast);
    if (typeof Vbear !== "number")
      Vbear.map((item) => {
        return temp.push(item);
      });
    if (typeof Tpout !== "number") temp.push(Tpout);
    if (typeof Tpover !== "number") temp.push(Tpover);
    console.log(temp);
    setCapacity({ shear: " - ", tension: " - ", notes: temp });
  } else {
    let Tgovern = Math.min(Tfast, Tpout, Tpover);
    let Vgovern = Math.min(Vfast, Vbear);
    Tgovern = Math.round(Tgovern * 10) / 10;
    Vgovern = Math.round(Vgovern * 10) / 10;
    setCapacity({ shear: Vgovern, tension: Tgovern, notes: [""] });
  }
}
