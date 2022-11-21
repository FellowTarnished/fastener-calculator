import React, { useState, createContext } from "react";

//*****Context #1: Governing Capacity

export const CapacityContext = createContext();

export const CapacityProvider = (props) => {
  const [capacity, setCapacity] = useState([
    {
      shear: undefined,
      tension: undefined,
      notes: ["", ""],
    },
  ]);

  return (
    <CapacityContext.Provider value={[capacity, setCapacity]}>
      {props.children}
    </CapacityContext.Provider>
  );
};

//*****Context #2: All Results

export const AllResultsContext = createContext();

export const AllResultsProvider = (props) => {
  const [allResults, setAllResults] = useState([
    {
      name: "fastener shear",
      shear: undefined,
      notes: undefined,
    },
    {
      name: "fastener tension",
      tension: undefined,
      notes: undefined,
    },
    {
      name: "bearing shear",
      shear: undefined,
      notes: undefined,
    },
    {
      name: "pullout tension",
      tension: undefined,
      notes: undefined,
    },
    {
      name: "pullover tension",
      tension: undefined,
      notes: undefined,
    },
  ]);

  return (
    <AllResultsContext.Provider value={[allResults, setAllResults]}>
      {props.children}
    </AllResultsContext.Provider>
  );
};

//*****Context #3: All Input

export const AllInputContext = createContext();

export const AllInputProvider = (props) => {
  const [allInput, setAllInput] = useState([
    {
      comp1Fu: undefined,
      comp1Fy: undefined,
      comp1Mat: undefined,
      comp1Thick: undefined,
      edgeDist1: undefined,
      comp2Fu: undefined,
      comp2Fy: undefined,
      comp2Mat: undefined,
      comp2Thick: undefined,
      edgeDist2: undefined,
      fastDia: undefined,
      fastFu: undefined,
      fastFy: undefined,
      fastMatInput: undefined,
      headType: undefined,
      interface: undefined,
      minorDia: undefined,
      nomDia: undefined,
      spacing: undefined,
      threadCount: undefined,
      threadType: undefined,
      SF: undefined,
    },
  ]);

  return (
    <AllInputContext.Provider value={[allInput, setAllInput]}>
      {props.children}
    </AllInputContext.Provider>
  );
};
