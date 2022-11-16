import "./style/App.css";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import {
  InputLabel,
  Select,
  FormControl,
  TextField,
  MenuItem,
  InputAdornment,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Button,
  Grid,
  Divider,
} from "@mui/material";

import CalcCapacity from "./Calc";
import React, { useState, useContext, useEffect } from "react";
import { CapacityContext } from "./CapacityContext";
import { AllResultsContext } from "./CapacityContext";
import hex from "./style/images/hexJSX.svg";
import csunk from "./style/images/countersunkJSX.svg";
// import ucut from "./style/ucut.js";
import hwh from "./style/images/hex-flangedJSX.svg";
import crown from "./style/images/crownJSX.svg";
import valley from "./style/images/valleyJSX.svg";
import flush from "./style/images/flushJSX.svg";
import gitLogo from "./style/images/GitHub-Mark-64px.png";
import robot from "./style/images/robot-cropped.png";

function App() {
  const [capacity, setCapacity] = useContext(CapacityContext);
  const [allResults, setAllResults] = useContext(AllResultsContext);
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
  let [resultsToggle, setResultsToggle] = useState(false);

  function updateProperties(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.value;
    setProperties(temp);
    console.log(properties);
    setResultsToggle(false);
  }

  function updateRadioProperty(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.id;
    setProperties(temp);
    console.log(properties);
    setResultsToggle(false);
  }

  function updateTextInput(e) {
    let temp = properties.slice();
    temp[0][e.target.id] = e.target.value;
    setProperties(temp);
    console.log(properties);
    setResultsToggle(false);
  }

  return (
    <Container
      className="App"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header className="App-header">
        <div className="flexBox">
          <img alt="" src={robot} className="robot"></img>
          <h1>AAMA-TRON!</h1>
        </div>
        <p> An engineer's guide to using AAMA TIR-A9-14</p>
      </header>
      <div className="body">
        <form>
          <Grid
            container
            rowSpacing={2}
            columnSpacing={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {" "}
            <Divider
              variant="middle"
              sx={{ bgcolor: "primary.main" }}
            ></Divider>
            <h4>FASTENER INFO</h4>
            <Grid item xs>
              <TextField
                label="Fastener Size"
                onChange={(e) => updateProperties(e)}
                select
                name="fastDia"
                variant="outlined"
                style={{ width: 250 }}
              >
                <MenuItem disabled> UNC THREADS </MenuItem>
                <MenuItem value="#6-20">#6-20</MenuItem>
                <MenuItem value="#8-18">#8-18</MenuItem>
                <MenuItem value="#10-16">#10-16</MenuItem>
                <MenuItem value="#12-14">#12-14</MenuItem>
                <MenuItem value="1/4-14">1/4-14</MenuItem>
                <MenuItem value="5/16-12">5/16-12</MenuItem>
                <MenuItem value="3/8-12">3/8-12</MenuItem>
                <MenuItem disabled> SPACED THREADS </MenuItem>
                <MenuItem value="#6-32">#6-32</MenuItem>
                <MenuItem value="#8-32">#8-32</MenuItem>
                <MenuItem value="#10-24">#10-24</MenuItem>
                <MenuItem value="#12-24">#12-24</MenuItem>
                <MenuItem value="1/4-20">1/4-20</MenuItem>
                <MenuItem value="5/16-18">5/16-18</MenuItem>
                <MenuItem value="3/8-16">3/8-16</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs>
              <TextField
                label="Fastener Material"
                onChange={(e) => updateProperties(e)}
                select
                name="fastMatInput"
                variant="outlined"
                style={{ width: 250 }}
              >
                <MenuItem disabled> STEEL </MenuItem>
                <MenuItem value="SAE Gr. 2">SAE Gr. 2</MenuItem>
                <MenuItem value="SAE Gr. 5">SAE Gr. 5</MenuItem>
                <MenuItem disabled> STAINLESS STEEL </MenuItem>
                <MenuItem value="Alloy A1/A2/A3 Cond A">
                  Alloy A1/A2/A3 Cond A
                </MenuItem>
                <MenuItem value="Alloy A1/A2/A3 Cond AF">
                  Alloy A1/A2/A3 Cond AF
                </MenuItem>
                <MenuItem value="Alloy A1/A2/A3 Cond CW">
                  Alloy A1/A2/A3 Cond CW
                </MenuItem>
                <MenuItem value="Alloy A1/A2/A3 Cond SH">
                  {" "}
                  Alloy A1/A2/A3 Cond SH
                </MenuItem>
                <MenuItem value="Alloy A4 Cond A">Alloy A4 Cond A</MenuItem>
                <MenuItem value="Alloy A5 Cond H">Alloy A5 Cond H</MenuItem>
                <MenuItem value="Alloy A5 Cond HT">Alloy A5 Cond HT</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs>
              <TextField
                label="Fastener Spacing"
                onChange={(e) => {
                  console.log(e);
                  updateTextInput(e);
                }}
                name="spacing"
                id="spacing"
                variant="outlined"
                style={{ width: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <div>Head Type</div>
            <div className="headType">
              <div className="headCard">
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
            </div>
            <Divider
              variant="middle"
              sx={{ bgcolor: "silver" }}
              flexItem="false"
            ></Divider>
            <h4>INTERFACE CONFIGURATION</h4>
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
            <Divider
              variant="middle"
              sx={{ bgcolor: "silver" }}
              flexItem="false"
            />
            <h4>COMPONENT #1 INFO </h4>
            <div className="subDesc">
              (MATERIAL IN CONTACT WITH FASTENER HEAD)
            </div>
            <Grid item xs>
              <TextField
                label="Material"
                onChange={(e) => updateProperties(e)}
                select
                name="comp1Mat"
                variant="outlined"
                style={{ width: 250 }}
              >
                <MenuItem disabled> ALUMINUM </MenuItem>
                <MenuItem value="6063-T6">6063-T6</MenuItem>
                <MenuItem value="6063-T5">6063-T5 </MenuItem>
                <MenuItem value="6061-T6">6061-T6</MenuItem>
                <MenuItem value="6005A-T61">6005A-T61</MenuItem>
                <MenuItem value="5005-H34">5005-H34</MenuItem>
                <MenuItem value="3003-H14">3003-H14</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs>
              <TextField
                label="Thickness"
                onChange={(e) => updateTextInput(e)}
                name="comp1Thick"
                id="comp1Thick"
                variant="outlined"
                style={{ width: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Edge Distance"
                onChange={(e) => updateTextInput(e)}
                name="edgeDist1"
                id="edgeDist1"
                variant="outlined"
                style={{ width: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <div></div>
            <FormLabel id="holeType">Hole Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="holeType-button-group-label"
              name="holeType"
              onChange={(e) => updateProperties(e)}
            >
              <FormControlLabel
                value="standard"
                control={<Radio />}
                label="Standard"
              />
              <FormControlLabel
                value="slotted"
                control={<Radio />}
                label="Slotted"
              />
            </RadioGroup>
            <Divider
              variant="middle"
              sx={{ bgcolor: "silver" }}
              flexItem="false"
            ></Divider>
            <h4>COMPONENT #2 INFO </h4>
            <div className="subDesc">
              (MATERIAL NOT IN CONTACT WITH FASTENER HEAD)
            </div>
            <Grid item xs>
              <TextField
                label="Material"
                onChange={(e) => updateProperties(e)}
                select
                name="comp2Mat"
                variant="outlined"
                style={{ width: 250 }}
              >
                <MenuItem disabled> ALUMINUM </MenuItem>
                <MenuItem value="6063-T6">6063-T6</MenuItem>
                <MenuItem value="6063-T5">6063-T5 </MenuItem>
                <MenuItem value="6061-T6">6061-T6</MenuItem>
                <MenuItem value="6005A-T61">6005A-T61</MenuItem>
                <MenuItem value="5005-H34">5005-H34</MenuItem>
                <MenuItem value="3003-H14">3003-H14</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs>
              <TextField
                label="Thickness"
                onChange={(e) => updateTextInput(e)}
                name="comp2Thick"
                id="comp2Thick"
                variant="outlined"
                style={{ width: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs>
              <TextField
                label="Edge Distance"
                onChange={(e) => updateTextInput(e)}
                name="edgeDist2"
                id="edgeDist2"
                variant="outlined"
                style={{ width: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">in</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <div></div>
            <Grid item m>
              <Button
                type="button"
                variant="contained"
                size="large"
                onClick={(e) => {
                  CalcCapacity(
                    properties,
                    setProperties,
                    capacity,
                    setCapacity,
                    allResults,
                    setAllResults
                  );
                  setResultsToggle(true);
                }}
              >
                SUBMIT
              </Button>
            </Grid>
          </Grid>
        </form>
        {resultsToggle ? (
          <div className="results">
            <Divider
              variant="middle"
              sx={{ bgcolor: "silver" }}
              flexItem="false"
            ></Divider>
            <h4>Results Summary:</h4>
            <div className="resultItem">Shear: {capacity.shear} lbs</div>
            <div className="resultItem">Tension: {capacity.tension} lbs</div>
            <div className="resultItem">Warnings:</div>
            {capacity.notes?.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
            <h4 className="detailedResults"> Detailed Results:</h4>
            <div>
              {" "}
              Fastener Shear Capacity:
              {Math.round(allResults[0].shear * 10) / 10} lbs
            </div>
            <div> {allResults[0].notes} </div>
            <br></br>
            <div>
              {" "}
              Fastener Tension Capacity:
              {Math.round(allResults[1].tension * 10) / 10} lbs
            </div>
            <div> {allResults[1].notes} </div>
            <br></br>
            {/* ONLY RENDER DETAILED RESULTS IF THERE ARE NO ERRORS */}
            {typeof allResults[2].shear !== "number" ? (
              <div>Bearing Shear Capacity: --- (see warnings)</div>
            ) : (
              <div>
                <div>
                  {" "}
                  Bearing Shear Capacity:
                  {Math.round(allResults[2].shear * 10) / 10} lbs
                </div>
                <div> {allResults[2].notes} </div>{" "}
              </div>
            )}
            <br></br>
            {typeof allResults[3].tension !== "number" ? (
              <div>Pullout Tension Capacity: --- (see warnings)</div>
            ) : (
              <div>
                <div>
                  {" "}
                  Pullout Tension Capacity:
                  {Math.round(allResults[3].tension * 10) / 10} lbs
                </div>
                <div> {allResults[3].notes} </div>{" "}
              </div>
            )}
            <br></br>
            {typeof allResults[4].tension !== "number" ? (
              <div>Pullover Tension Capacity: --- (see warnings)</div>
            ) : (
              <div>
                <div>
                  {" "}
                  Pullover Tension Capacity:
                  {Math.round(allResults[4].tension * 10) / 10} lbs
                </div>
                <div> {allResults[4].notes} </div>{" "}
              </div>
            )}
            {/* <h4 className="detailedResults"> Input:</h4> */}
            <Divider
              variant="middle"
              sx={{ bgcolor: "silver" }}
              flexInput="false"
            ></Divider>{" "}
            <ol className="resultNotes">
              Notes:
              <li className="resultItem">
                All symbols shown above follow the convention used in AAMA
                TIR-A9-14. Reference Section 2.0 of AAMA TIR-A9-14 for all
                symbol definitions.
              </li>
              <li className="resultItem">
                Screw Tilting for screws larger than 1/4" in diameter is
                excluded from the spec.
              </li>
              <li className="resultItem">
                Washer diameter and countersunk head thicknesses have been
                assumed based on standard industry values. User shall verify
                applicability to fasteners used on their project.
              </li>
              <li className="resultItem">
                Screw engagement length assumed to be full thickness of
                component #2.
              </li>
            </ol>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Divider
        variant="middle"
        sx={{ bgcolor: "silver" }}
        flexInput="false"
      ></Divider>{" "}
      <footer>
        <div className="footerContainer">
          <div>Copyright Ken Metz 2022</div>
          <a href="https://github.com/KennethMetz" alt="">
            <img className="logo" src={gitLogo} alt=""></img>
          </a>
        </div>
      </footer>
    </Container>
  );
}

export default App;
