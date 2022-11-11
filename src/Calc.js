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
import pullover from "./pullover";
import pullout from "./pullout";

export default function CalcCapacity(
  properties,
  setProperties,
  capacity,
  setCapacity
) {
  let temp = capacity.slice();
  temp[0]["shear"] = 500;
  setCapacity(temp);

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

  let Tgovern = Math.min(Tfast, Tpout, Tpover);
  let Vgovern = Math.min(Vfast, Vbear);
}
