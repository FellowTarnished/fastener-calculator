// import { CapacityContext } from "./CapacityContext";
// import React, { useState, useContext, useEffect } from "react";
import {
  getThreadType,
  getFastType,
  getDiameter,
  getThreadCount,
} from "./props";
import { screwCap } from "./fastener";

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

  console.log(properties);
}
