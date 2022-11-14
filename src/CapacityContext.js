import React, { useState, createContext } from "react";

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
