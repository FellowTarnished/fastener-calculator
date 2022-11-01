import "./style/App.css";
import CalcCapacity from "./Calc";
import React, { useState, useContext, useEffect } from "react";
import { CapacityContext } from "./CapacityContext";
import hex from "./style/hex.png";
import csunk from "./style/csunk.png";
import ucut from "./style/ucut.png";

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
          <div>FASTENER INFO</div>
          <label htmlFor="fastDia"> Nominal Diameter</label>
          <select
            name="fastDia"
            id="fastDia"
            required
            onChange={(e) => updateProperties(e)}
          >
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
          <div>Head Type</div>
          <div className="headType">
            <label htmlFor="hexHead">
              <input
                type="radio"
                id="hexHead"
                name="headType"
                onChange={(e) => updateProperties(e)}
              ></input>{" "}
              <img alt="hex head" src={hex}></img>
            </label>
            <label htmlFor="countersunk">
              <input
                type="radio"
                id="countersunk"
                name="headType"
                onChange={(e) => updateProperties(e)}
              ></input>{" "}
              <img alt="countersunk" src={csunk}></img>
            </label>
            <label htmlFor="undercut">
              <input
                type="radio"
                id="undercut"
                name="headType"
                onChange={(e) => updateProperties(e)}
              ></input>{" "}
              <img alt="undercut" src={ucut}></img>
            </label>
          </div>
          <label htmlFor="fastMat"> Material</label>
          <select
            name="fastMat"
            id="fastMat"
            onChange={(e) => updateProperties(e)}
          >
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
          <div></div>
          <div className="flexBox">
            <label htmlFor="spacing">Spacing</label>
            <input
              type="number"
              id="spacing"
              step=".1"
              onChange={(e) => updateProperties(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div className="flexBox">
            <label htmlFor="edgeDist">Edge Distance</label>
            <input
              type="number"
              id="edgeDist"
              step=".1"
              onChange={(e) => updateProperties(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div>Are holes slotted?</div>
          <input
            type="radio"
            id="yes"
            name="slotted"
            onChange={(e) => updateProperties(e)}
          ></input>{" "}
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="slotted"
            onChange={(e) => updateProperties(e)}
          ></input>{" "}
          <label htmlFor="no">No</label>
          <div>----------------</div>
          <div>COMPONENT 1 INFO (IN CONTACT WITH FASTENER HEAD)</div>
          <label htmlFor="fastMat">Material</label>
          <select
            name="comp1Mat"
            id="comp1Mat"
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled selected value>
              -- select an option --
            </option>

            <optgroup label="ALUMINUM">
              <option value="6063-T6">6063-T6</option>
              <option value="6063-T5">6063-T5 </option>
              <option value="6061-T6 EXT">6061-T6 EXTRUSION</option>
              <option value="6061-T6 PL">6061-T6 PLATE</option>
              <option value="6005A-T61">6005A-T61</option>
              <option value="5005-H34">5005-H34</option>
              <option value="3003-H14">3003-H14</option>
            </optgroup>
          </select>
          <div className="flexBox">
            <label htmlFor="comp1Thick">Thickness</label>
            <input
              type="number"
              id="comp1Thick"
              step=".1"
              onChange={(e) => updateProperties(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div>----------------</div>
          <div>COMPONENT 2 INFO (NOT IN CONTACT WITH FASTENER HEAD)</div>
          <label htmlFor="fastMat">Material</label>
          <select
            name="comp2Mat"
            id="comp2Mat"
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled selected value>
              -- select an option --
            </option>
            <optgroup label="ALUMINUM">
              <option value="6063-T6">6063-T6</option>
              <option value="6063-T5">6063-T5 </option>
              <option value="6061-T6 EXT">6061-T6 EXTRUSION</option>
              <option value="6061-T6 PL">6061-T6 PLATE</option>
              <option value="6005A-T61">6005A-T61</option>
              <option value="5005-H34">5005-H34</option>
              <option value="3003-H14">3003-H14</option>
            </optgroup>
          </select>
          <div className="flexBox">
            <label htmlFor="comp1Thick">Thickness</label>
            <input
              type="number"
              id="comp2Thick"
              step=".1"
              onChange={(e) => updateProperties(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
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
