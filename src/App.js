//*****IMPORTS*****
import React, { useState, useContext, useRef } from "react";
import MathJaxContext from "better-react-mathjax/MathJaxContext/";
import MathJax from "better-react-mathjax/MathJax";
import Container from "@mui/material/Container";
import { Button, Divider, Link } from "@mui/material";

import formFastenerInfo from "./formFastenerInfo";
import formComponent1 from "./formComponent1";
import formComponent2 from "./formComponent2";
import {
  CapacityContext,
  AllResultsContext,
  AllInputContext,
} from "./CapacityContext";
import CalcCapacity from "./Calc";

import "./style/App.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import robot from "./style/images/robot-cropped.png";
import resultsDetailed from "./resultsDetailed";
import { flushSync } from "react-dom";

function App() {
  //*****PROPS AND STATE*****
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

  //*****LOCAL FUNCTIONS*****

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

  //*****RENDER*****

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
            {formFastenerInfo(
              updateProperties,
              updateTextInput,
              updateRadioProperty
            )}
            <h4>COMPONENT #1 INFO </h4>
            {formComponent1(
              updateProperties,
              updateTextInput,
              updateRadioProperty
            )}
            <h4>COMPONENT #2 INFO </h4>
            {formComponent2(
              updateProperties,
              updateTextInput,
              updateRadioProperty
            )}

            <div className="break"></div>

            <Button
              type="button"
              variant="contained"
              size="large"
              sx={{
                minWidth: "320px",
                minHeight: "65px",
                marginTop: "20px",
                fontSize: "1.25em",
              }}
              onClick={(e) => {
                flushSync(() => {
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
                });
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

          {resultsDetailed(
            capacity,
            resultsToggle,
            ref,
            allResults,
            properties,
            allInput
          )}
        </div>

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
