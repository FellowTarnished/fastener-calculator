import "./style/App.css";
import CalcCapacity from "./Calc";
import React, { useState, useContext, useEffect } from "react";
import { CapacityContext } from "./CapacityContext";

function App() {
  const [capacity, setCapacity] = useContext(CapacityContext);
  const [properties, setProperties] = useState([
    {
      fastDia: undefined,
      headType: undefined,
      fastMat: undefined,
      baseMat1: undefined,
      baseThick1: undefined,
      baseMat2: undefined,
      baseThick2: undefined,
      edgeDist: undefined,
      spacing: undefined,
      slottedHole: undefined,
    },
  ]);

  function updateProperties(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.value;
    setProperties(temp);
    console.log(properties);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> CURTAIN WALL FASTENER CALCULATOR!</h1>
      </header>
      <div className="body">
        <form>
          <label htmlFor="fastDia"> Fastener Nominal Diameter</label>
          <select
            name="fastDia"
            id="fastDia"
            required
            onChange={(e) => updateProperties(e)}
          >
            {" "}
            <option hidden disabled selected value>
              -- select an option --
            </option>
            <optgroup label="SPACED THREADS">
              <option value="#6-20">#6-20</option>
              <option value="#8-18">#8-18</option>
              <option value="#10-16">#10-16</option>
              <option value="#12-14">#12-14</option>
              <option value="1/4-14">1/4-14</option>
              <option value="5/16-12">5/16-12</option>
              <option value="3/8-12">3/8-12</option>
            </optgroup>
            <optgroup label="UNC THREADS">
              <option value="#6-32">#6-32</option>
              <option value="#8-32">#8-32</option>
              <option value="#10-24">#10-24</option>
              <option value="#12-24">#12-24</option>
              <option value="1/4-20">1/4-20</option>
              <option value="5/16-18">5/16-18</option>
              <option value="3/8-16">3/8-16</option>
            </optgroup>
          </select>
          <div className="type">
            <button type="button">HEX HEAD</button>
            <button type="button">COUNTERSUNK</button>
            <button type="button">UNDERCUT</button>
          </div>

          <label htmlFor="fastMat"> Fastener Nominal Diameter</label>
          <select
            name="fastMat"
            id="fastMat"
            onChange={(e) => updateProperties(e)}
          >
            {" "}
            <option hidden disabled selected value>
              -- select an option --
            </option>
            <optgroup label="STEEL">
              <option value="SAE Gr. 2">SAE Gr. 2</option>
              <option value="SAE Gr. 5">SAE Gr. 5</option>
            </optgroup>
            <optgroup label="STAINLESS STEEL">
              <option value="Alloy A1/A2/A3 Cond A">
                Alloy A1/A2/A3 Cond A
              </option>
              <option value="Alloy A1/A2/A3 Cond AF">
                Alloy A1/A2/A3 Cond AF
              </option>
              <option value="Alloy A1/A2/A3 Cond CW">
                Alloy A1/A2/A3 Cond CW
              </option>
              <option value="Alloy A1/A2/A3 Cond SH">
                Alloy A1/A2/A3 Cond SH
              </option>
              <option value="Alloy A4 Cond A">Alloy A4 Cond A</option>
              <option value="Alloy A5 Cond H">Alloy A5 Cond H</option>

              <option value="Alloy A5 Cond HT">Alloy A5 Cond HT</option>
            </optgroup>
          </select>
          <button
            type="button"
            onClick={(e) => {
              CalcCapacity(properties, setProperties, capacity, setCapacity);
            }}
          >
            SUBMIT
          </button>
        </form>
        <div className="results">{capacity[0].shear}</div>
      </div>
      <footer>Copyright Ken Metz 2022</footer>
    </div>
  );
}

export default App;
