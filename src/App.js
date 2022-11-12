import "./style/App.css";
import CalcCapacity from "./Calc";
import React, { useState, useContext, useEffect } from "react";
import { CapacityContext } from "./CapacityContext";
import hex from "./style/images/hexJSX.svg";
import csunk from "./style/images/countersunkJSX.svg";
// import ucut from "./style/ucut.js";
import hwh from "./style/images/hex-flangedJSX.svg";
import crown from "./style/images/crownJSX.svg";
import valley from "./style/images/valleyJSX.svg";
import flush from "./style/images/flushJSX.svg";
import gitLogo from "./style/images/GitHub-Mark-64px.png";

function App() {
  const [capacity, setCapacity] = useContext(CapacityContext);
  const [properties, setProperties] = useState([
    {
      comp1Fu: 38000,
      comp1Fy: 35000,
      comp1Mat: "6061-T6",
      comp1Thick: "0.2",
      comp2Fu: 22000,
      comp2Fy: 16000,
      comp2Mat: "6063-T5",
      comp2Thick: "0.2",
      edgeDist1: "4.3",
      edgeDist2: "3.9",
      fastDia: "#8-18",
      fastFu: 120000,
      fastFy: 92000,
      fastMat: "cs",
      fastMatInput: "SAE Gr. 5",
      headType: "hexWithWasher",
      interface: "crown",
      minorDia: 0.116,
      nomDia: 0.164,
      spacing: "3.6",
      threadCount: 18,
      threadType: "spaced",
    },
  ]);

  function updateProperties(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.value;
    setProperties(temp);
    console.log(properties);
  }

  function updateRadioProperty(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.id;
    setProperties(temp);
    console.log(properties);
  }

  function updateTextInput(e) {
    let temp = properties.slice();
    temp[0][e.target.id] = e.target.value;
    setProperties(temp);
    console.log(properties);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> CURTAIN WALL FASTENER CALCULATOR!</h1>
        <p> The engineer's guide to understanding AAMA TIR-A9-14</p>
      </header>
      <div className="body">
        <form>
          <div>FASTENER INFO</div>
          <label htmlFor="fastDia"> Nominal Diameter</label>
          <select
            name="fastDia"
            id="fastDia"
            value="#6-20"
            required
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled value="void">
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
            <div class="headCard">
              <label htmlFor="hexHead">
                <input
                  type="radio"
                  id="hexHead"
                  required
                  name="headType"
                  onChange={(e) => {
                    updateRadioProperty(e);
                  }}
                ></input>{" "}
                <img alt="hex head" src={hex}></img>
              </label>
              HEX HEAD
            </div>
            <div className="headCard">
              <label htmlFor="hexWithWasher">
                <input
                  type="radio"
                  id="hexWithWasher"
                  name="headType"
                  onChange={(e) => updateRadioProperty(e)}
                ></input>{" "}
                <img alt="hex with washer" src={hwh}></img>
              </label>
              HEX HEAD W/ WASHER (OR FLANGED)
            </div>
            <div className="headCard">
              <label htmlFor="countersunk">
                <input
                  type="radio"
                  id="countersunk"
                  name="headType"
                  onChange={(e) => updateRadioProperty(e)}
                ></input>{" "}
                <img alt="countersunk" src={csunk}></img>
              </label>
              COUNTERSUNK
            </div>
            {/* <label htmlFor="undercut">
              <input
                type="radio"
                id="undercut"
                name="headType"
                onChange={(e) => updateRadioProperty(e)}
              ></input>{" "}
              <img alt="undercut" src={ucut}></img>
            </label> */}
          </div>
          <label htmlFor="fastMatInput"> Material</label>
          <select
            name="fastMatInput"
            id="fastMatInput"
            value="Alloy A1/A2/A3 Cond A"
            required
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled value="void">
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
              name="spacing"
              step=".1"
              defaultValue={0.1}
              required
              onChange={(e) => updateTextInput(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div>----------------</div>
          <div>INTERFACE CONFIGURATION</div>
          <div className="headType">
            <label htmlFor="flush">
              <input
                type="radio"
                id="flush"
                name="interface"
                onChange={(e) => updateRadioProperty(e)}
              ></input>{" "}
              <img alt="flush" src={flush}></img>
            </label>
            <label htmlFor="valley">
              <input
                type="radio"
                id="valley"
                checked
                required
                name="interface"
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="valley" src={valley}></img>
            </label>
            <label htmlFor="crown">
              <input
                type="radio"
                id="crown"
                name="interface"
                onChange={(e) => updateRadioProperty(e)}
              ></input>{" "}
              <img alt="crown" src={crown}></img>
            </label>
          </div>
          <div>----------------</div>
          <div>COMPONENT 1 INFO (IN CONTACT WITH FASTENER HEAD)</div>
          <label htmlFor="comp1Mat">Material</label>
          <select
            name="comp1Mat"
            id="comp1Mat"
            value="6063-T6"
            required
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled value="void">
              -- select an option --
            </option>

            <optgroup label="ALUMINUM">
              <option value="6063-T6">6063-T6</option>
              <option value="6063-T5">6063-T5 </option>
              <option value="6061-T6">6061-T6</option>
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
              name="comp1Thick"
              step=".1"
              defaultValue={0.1}
              required
              onChange={(e) => updateTextInput(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div className="flexBox">
            <label htmlFor="edgeDist1">Edge Distance</label>
            <input
              type="number"
              id="edgeDist1"
              step=".1"
              defaultValue={0.1}
              required
              onChange={(e) => updateTextInput(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div>Hole Type</div>
          <input
            type="radio"
            id="standard"
            name="holeType"
            checked
            required
            onChange={(e) => updateRadioProperty(e)}
          ></input>{" "}
          <label htmlFor="standard">Standard</label>
          <input
            type="radio"
            id="slotted"
            name="holeType"
            onChange={(e) => updateRadioProperty(e)}
          ></input>{" "}
          <label htmlFor="slotted">Slotted</label>
          <div>----------------</div>
          <div>COMPONENT 2 INFO (NOT IN CONTACT WITH FASTENER HEAD)</div>
          <label htmlFor="comp2Mat">Material</label>
          <select
            name="comp2Mat"
            id="comp2Mat"
            value="6063-T5"
            required
            onChange={(e) => updateProperties(e)}
          >
            <option hidden disabled value="void">
              -- select an option --
            </option>
            <optgroup label="ALUMINUM">
              <option value="6063-T6">6063-T6</option>
              <option value="6063-T5">6063-T5 </option>
              <option value="6061-T6 ">6061-T6 </option>
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
              name="comp2Thick"
              step=".1"
              defaultValue={0.1}
              required
              onChange={(e) => updateTextInput(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div className="flexBox">
            <label htmlFor="edgeDist2">Edge Distance</label>
            <input
              type="number"
              id="edgeDist2"
              step=".1"
              defaultValue={0.1}
              required
              onChange={(e) => updateTextInput(e)}
            ></input>{" "}
            <div>inches</div>
          </div>
          <div>----------------</div>
          <button
            type="button"
            onClick={(e) => {
              CalcCapacity(properties, setProperties, capacity, setCapacity);
            }}
          >
            SUBMIT
          </button>
        </form>
        <div className="results">
          <div className="resultItem">Shear: {capacity.shear} lbs</div>
          <div className="resultItem">Tension: {capacity.tension} lbs</div>
          <div className="resultItem">Warnings:</div>
          {capacity.notes?.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
          <ul className="resultItem">
            Notes:
            <li className="resultItem">
              Screw Tilting for screws larger than 1/4" in diameter are excluded
              from the spec.
            </li>
            <li className="resultItem">
              Washer diameters and undercut head thicknesses have been assumed
              using standard industry values. User shall verify applicability to
              their project.
            </li>
            <li className="resultItem">
              Screw engagement length assumed to be full thickness of component
              #2.
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="footerContainer">
          <div>Copyright Ken Metz 2022</div>
          <a href="https://github.com/KennethMetz" alt="">
            <img className="logo" src={gitLogo} alt=""></img>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
