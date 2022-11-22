import ResultsTable from "./resultsTable";

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
  Link,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CalcCapacity from "./Calc";
import React, { useState, useContext, useRef } from "react";

import {
  CapacityContext,
  AllResultsContext,
  AllInputContext,
} from "./CapacityContext";

import hex from "./style/images/hexJSX.svg";
import csunk from "./style/images/countersunkJSX.svg";
// import ucut from "./style/ucut.js";
import hwh from "./style/images/hex-flangedJSX.svg";
import crown from "./style/images/crownJSX.svg";
import valley from "./style/images/valleyJSX.svg";
import flush from "./style/images/flushJSX.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import robot from "./style/images/robot-cropped.png";

import MathJaxContext from "better-react-mathjax/MathJaxContext/";
import MathJax from "better-react-mathjax/MathJax";

function App() {
  const config = {
    loader: { load: ["input/asciimath"] },
  };
  const ref = useRef(null);
  const scrollToResults = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [capacity, setCapacity] = useContext(CapacityContext);
  const [allResults, setAllResults] = useContext(AllResultsContext);
  const [allInput, setAllInput] = useContext(AllInputContext);

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
    <MathJaxContext config={config}>
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
            <Divider variant="middle" sx={{ bgcolor: "silver" }}></Divider>

            <h4>FASTENER INFO</h4>
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
            <div className="break"></div>
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

            <div className="break"></div>
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

            <div className="headType">Head Type</div>
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
            <div className="break"></div>

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
            <div className="break"></div>

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

            <div className="break"></div>
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
            <div className="break"></div>

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
            <div className="break"></div>

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

            <div className="break"></div>

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
                  setAllResults,
                  allInput,
                  setAllInput
                );
                setResultsToggle(true);
                scrollToResults();
              }}
            >
              SUBMIT
            </Button>
          </form>
          <div className="break"></div>
          <Divider
            variant="middle"
            sx={{ bgcolor: "silver" }}
            flexItem="false"
          ></Divider>

          {resultsToggle ? (
            <div className="results">
              <h4 ref={ref}>Results Summary:</h4>
              {ResultsTable(capacity)}
              <TableContainer>
                <h4 className="detailedResults"> Detailed Results:</h4>
                <div className="resultLabel">
                  Fastener Shear Capacity:
                  {Math.round(allResults[0].shear * 10) / 10} lbs
                </div>
                <MathJax>{allResults[0].notes}</MathJax>
                <br></br>
                <div className="resultLabel">
                  Fastener Tension Capacity:
                  {Math.round(allResults[1].tension * 10) / 10} lbs
                </div>
                <MathJax>{allResults[1].notes}</MathJax>
                <br></br>
                {/* ONLY RENDER DETAILED RESULTS IF THERE ARE NO ERRORS */}
                {typeof allResults[2].shear !== "number" ? (
                  <div>Bearing Shear Capacity: --- (see warnings)</div>
                ) : (
                  <div>
                    <div className="resultLabel">
                      Bearing Shear Capacity:
                      {Math.round(allResults[2].shear * 10) / 10} lbs
                    </div>
                    <MathJax className="resultLabel">
                      {allResults[2].notes}
                    </MathJax>
                  </div>
                )}
                <br></br>
                {typeof allResults[3].tension !== "number" ? (
                  <div>Pullout Tension Capacity: --- (see warnings)</div>
                ) : (
                  <div>
                    <div className="resultLabel">
                      Pullout Tension Capacity:
                      {Math.round(allResults[3].tension * 10) / 10} lbs
                    </div>
                    <MathJax> {allResults[3].notes} </MathJax>
                  </div>
                )}
                <br></br>
                {typeof allResults[4].tension !== "number" ? (
                  <div>Pullover Tension Capacity: --- (see warnings)</div>
                ) : (
                  <div>
                    <div className="resultLabel">
                      Pullover Tension Capacity:
                      {Math.round(allResults[4].tension * 10) / 10} lbs
                    </div>
                    <MathJax> {allResults[4].notes} </MathJax>{" "}
                  </div>
                )}
                <h4 className="detailedResults"> Input:</h4>
                <div>Component #1 Properties:</div>
                <MathJax>`t_1` = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>`F_(U1)` = {properties[0].comp1Fu} psi</MathJax>
                <MathJax>`F_(Y1)` = {properties[0].comp1Fy} psi</MathJax>
                <MathJax>Alloy : {properties[0].comp1Mat}</MathJax>
                <MathJax>Edge Distance : {properties[0].edgeDist1}</MathJax>
                <div>Component #2 Properties:</div>
                <MathJax>`t_2` = {properties[0].comp2Thick} inches</MathJax>
                <MathJax>`F_(U2)` = {properties[0].comp2Fu} psi</MathJax>
                <MathJax>`F_(Y2)` = {properties[0].comp2Fy} psi</MathJax>
                <MathJax>Alloy : {properties[0].comp2Mat}</MathJax>
                <MathJax>Edge Distance : {properties[0].edgeDist1}</MathJax>
                <div>Fastener Properties:</div>

                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>
                <MathJax>t1 = {properties[0].comp1Thick} inches</MathJax>

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
              </TableContainer>
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
            <Link
              underline="none"
              sx={{ color: "black" }}
              href="https://github.com/KennethMetz"
              alt=""
            >
              <div>Copyright Ken Metz 2022</div>
              <GitHubIcon />
            </Link>
          </div>
        </footer>
      </Container>
    </MathJaxContext>
  );
}

export default App;
