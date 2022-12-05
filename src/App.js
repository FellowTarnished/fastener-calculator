//*****IMPORTS*****
import React, { useState, useContext, useRef, Fragment } from "react";
import MathJaxContext from "better-react-mathjax/MathJaxContext/";
import MathJax from "better-react-mathjax/MathJax";
import Container from "@mui/material/Container";
import { Button, Divider, Link, TextField, Typography } from "@mui/material";

import { useForm, Controller } from "react-hook-form";

import FormFastenerInfo from "./formFastenerInfo";
import FormComponent1 from "./formComponent1";
import FormComponent2 from "./formComponent2";
import {
  CapacityContext,
  AllResultsContext,
  AllInputContext,
} from "./CapacityContext";
import CalcCapacity, { OverwriteProperties } from "./Calc";

import "./style/App.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import robot from "./style/images/robot-lightblue2.png";
import resultsDetailed from "./resultsDetailed";
import { flushSync } from "react-dom";
import { Palette } from "@mui/icons-material";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { palette } from "@mui/system";

function App() {
  Yup.addMethod(Yup.string, "spacing", function (errorMessage) {
    return this.test(`at-card-length`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        (value && value.length === 16) ||
        createError({ path, message: errorMessage })
      );
    });
  });

  const validationSchema = Yup.object().shape({
    fastDia: Yup.string().required("*Fastener size is required"),
    fastMatInput: Yup.string().required("*Fastener material is required"),
    spacing: Yup.string().required("*Fastener spacing is required"),
    headType: Yup.string().required("*Head type is required"),
    interface: Yup.string().required("*Interface configuration is required"),
    comp1Mat: Yup.string().required("*Material type is required"),
    comp1Thick: Yup.string().required("*Thickness is required"),
    edgeDist1: Yup.string().required("*Edge distance is required"),
    comp2Mat: Yup.string().required("*Material type is required"),
    comp2Thick: Yup.string().required("*Thickness is required"),
    edgeDist2: Yup.string().required("*Edge distance is required"),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };

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
      // comp1Fu: 38000,
      // comp1Fy: 35000,
      // comp1Mat: "6061-T6",
      // comp1Thick: "0.2",
      // comp2Fu: 22000,
      // comp2Fy: 16000,
      // comp2Mat: "6063-T5",
      // comp2Thick: "0.2",
      // edgeDist1: "4.3",
      // edgeDist2: "3.9",
      // fastDia: "#8-18",
      // fastFu: 120000,
      // fastFy: 92000,
      // fastMat: "cs",
      // fastMatInput: "SAE Gr. 5",
      // headType: "hexWithWasher",
      // interface: "crown",
      // minorDia: 0.116,
      // nomDia: 0.164,
      // spacing: "3.6",
      // threadCount: 18,
      // threadType: "spaced",
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

  function updateRadioProperty(e, value) {
    // console.log(e.target.parentNode.id);
    // console.log(value);
    let temp = properties.slice();
    // temp[0][e.target.parentNode.id] = value;
    temp[0][e.target.name] = e.target.id;
    setProperties(temp);
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
    <Fragment>
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
            <div className="flexBoxHeader">
              <img alt="" src={robot} className="robot"></img>
              <h1>AAMA-TRON!</h1>
            </div>
            <p> An engineer's guide to using AAMA TIR-A9-14</p>
          </header>
          <div className="body">
            <Divider
              variant="middle"
              sx={{ bgcolor: "secondary.main" }}
            ></Divider>
            <h4>FASTENER INFO</h4>
            {FormFastenerInfo(
              updateProperties,
              updateTextInput,
              updateRadioProperty,
              register,
              errors,
              setValue
            )}
            <h4>COMPONENT #1 INFO </h4>
            {FormComponent1(
              updateProperties,
              updateTextInput,
              updateRadioProperty,
              register,
              errors
            )}
            <h4>COMPONENT #2 INFO </h4>
            {FormComponent2(
              updateProperties,
              updateTextInput,
              updateRadioProperty,
              register,
              errors
            )}

            <div className="break"></div>

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                minWidth: "320px",
                minHeight: "65px",
                marginTop: "20px",
                fontSize: "1.25em",
              }}
              onClick={handleSubmit(() => {
                try {
                  // OverwriteProperties(properties, setProperties, getValues);
                  console.log(properties);
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
                } catch (e) {
                  console.log(e);
                  console.log(getValues());
                }
              })}
            >
              SUBMIT
            </Button>
            <Typography sx={{ color: "error.main" }}>
              {errors.fastDia ||
              errors.fastMatInput ||
              errors.spacing ||
              errors.headType ||
              errors.interface ||
              errors.comp1Mat ||
              errors.comp1Thick ||
              errors.edgeDist1 ||
              errors.comp2Mat ||
              errors.comp2Thick ||
              errors.edgeDist2
                ? "*Please resolve errors shown above (either missing or incorrect fields)"
                : ""}
            </Typography>

            <div className="break"></div>

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
    </Fragment>
  );
}

export default App;
