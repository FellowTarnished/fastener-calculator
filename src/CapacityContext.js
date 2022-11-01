import React, { useState, createContext } from "react";

export const CapacityContext = createContext();

export const CapacityProvider = (props) => {
  const [capacity, setCapacity] = useState([
    {
      shear: undefined,
      tension: undefined,
      notes: undefined,
    },
  ]);

  return (
    <CapacityContext.Provider value={[capacity, setCapacity]}>
      {props.children}
    </CapacityContext.Provider>
  );
};
