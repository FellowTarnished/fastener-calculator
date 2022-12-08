//*****IMPORTS*****
import React, { useState, useContext, useRef, Fragment } from "react";
import MathJaxContext from "better-react-mathjax/MathJaxContext/";
import Container from "@mui/material/Container";
import { Button, Divider, Link, Typography } from "@mui/material";

import { useForm } from "react-hook-form";

import FormFastenerInfo from "./formFastenerInfo";
import FormComponent1 from "./formComponent1";
import FormComponent2 from "./formComponent2";
import {
  CapacityContext,
  AllResultsContext,
  AllInputContext,
} from "./CapacityContext";
import CalcCapacity from "./Calc";

import "./style/App.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import robot from "./style/images/robot-lightblue2.png";
import resultsDetailed from "./resultsDetailed";
import { flushSync } from "react-dom";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
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

  const [allInput, setAllInput] = useContext(AllInputContext);

  Yup.addMethod(Yup.string, "spacing", function (errorMessage) {
    return this.test(`at-card-length`, errorMessage, function (value) {
      const { path, createError } = this;

      return (
        (value && value.length === 16) ||
        createError({ path, message: errorMessage })
      );
    });
  });

  // DEFINE YUP SCHEMA
  const validationSchema = Yup.object().shape({
    // Values passed for custom validation purposes
    nomDia: Yup.number(),
    threadType: Yup.string(),
    // thead: Yup.string(),
    // Input terms that are required/being validated.
    fastDia: Yup.string().required("*Fastener size is required"),
    fastMatInput: Yup.string().required("*Fastener material is required"),
    spacing: Yup.number()
      .typeError("*Fastener spacing is required")
      .required("*Fastener spacing is required")
      .positive("*Fastener spacing must be a positive number")
      .test({
        name: "minSpacing",
        params: { properties },
        message:
          "*Fastener spacing must be greater than (2.5 * nominal screw diameter)",
        test: (value) => value > 2.5 * properties[0].nomDia,
      }),
    headType: Yup.string().required("*Head type is required"),
    interface: Yup.string().required("*Interface configuration is required"),
    comp1Mat: Yup.string().required("*Material type is required"),
    comp1Thick: Yup.number()
      .typeError("*Thickness is required")
      .required("*Thickness is required")
      .positive("*Thickness must be a positive number")
      .min(0.0399, "*Thickness must be greater than or equal to 0.04 inches."),
    // .when("headType", {
    //   is: (headType) => headType === "countersunk",
    //   then: Yup.number().test({
    //     // params: { properties },
    //     name: "minComp1Thickness",
    //     message: `*Thickness must be greater than or equal to the screw head thickness for countersunk fasteners.`,
    //     test: (value, thead) => value >= thead,
    //   }),
    // }),
    edgeDist1: Yup.number()
      .typeError("*Edge distance is required")
      .required("*Edge distance is required")
      .positive("*Edge distance must be a positive number")
      .test({
        name: "edgeDist1",
        params: { properties },
        message:
          "*Edge distance must be greater than (1.5 * nominal screw diameter). (Ref. AAMA TIR-A9-14 Section 8.3.2)",
        test: (value) => value > 1.5 * properties[0].nomDia,
      }),
    comp2Mat: Yup.string().required("*Material type is required"),
    comp2Thick: Yup.number()
      .typeError("*Thickness is required")
      .required("*Thickness is required")
      .positive("*Thickness must be a positive number")
      .max(
        0.375,
        "*Thickness must be less than 0.375 inches. AAMA does not provide pullout values for thicker base material. (Ref. AAMA TIR-A9-14 Section 22.0)"
      )
      .when("threadType", {
        is: (threadType) => threadType === "spaced",
        then: Yup.number()
          .typeError("*Thickness is required")
          .test({
            name: "minComp2Thickness",
            message:
              "*Thickness must be greater than or equal to 0.038 inches for fasteners with SPACED thread. (Ref. AAMA TIR-A9-14 Section 10.0)",
            test: (value) => value > 0.038,
          }),
      })
      .when("threadType", {
        is: (threadType) => threadType === "unc",
        then: Yup.number()
          .typeError("*Thickness is required")
          .test({
            name: "minComp2Thickness2",
            message:
              "*Thickness must be greater than or equal to 0.06 inches for fasteners with UNC thread. (Ref. AAMA TIR-A9-14 Section 10.0)",
            test: (value) => value > 0.06,
          }),
      }),
    edgeDist2: Yup.number()
      .typeError("*Edge distance is required")
      .required("*Edge distance is required")
      .positive("*Edge distance must be a positive number")
      .test({
        name: "minSpacing",
        params: { properties },
        message:
          "*Edge distance must be greater than (1.5 * nominal screw diameter). (Ref. AAMA TIR-A9-14 Section 8.3.2)",
        test: (value) => value > 1.5 * properties[0].nomDia,
      }),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm({
    mode: "all",
    resolver: yupResolver(validationSchema),
    // context: { nomDia: properties[0].nomDia },
  });

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

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

  let [resultsToggle, setResultsToggle] = useState(false);

  //*****LOCAL FUNCTIONS*****

  function updateProperties(e) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.value;
    setProperties(temp);
    setResultsToggle(false);
  }

  function updateRadioProperty(e, value) {
    let temp = properties.slice();
    temp[0][e.target.name] = e.target.id;
    setProperties(temp);
    setResultsToggle(false);
  }

  function updateTextInput(e) {
    let temp = properties.slice();
    temp[0][e.target.id] = +e.target.value;
    setProperties(temp);
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
              <Link
                underline="none"
                sx={{ color: "black" }}
                href="https://kennethmetz.github.io/fastener-calculator/"
                alt=""
              >
                <img alt="" src={robot} className="robot"></img>
                <h1>AAMA-TRON!</h1>
              </Link>
            </div>
            <p className="description">
              {" "}
              An engineer's guide to using AAMA TIR-A9-14
            </p>
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
              setValue,
              properties,
              setProperties,
              trigger,
              getValues
            )}
            <h4>COMPONENT #1 INFO </h4>
            {FormComponent1(
              updateProperties,
              updateTextInput,
              updateRadioProperty,
              register,
              errors,
              setValue,
              properties,
              setProperties,
              getValues
            )}
            <h4>COMPONENT #2 INFO </h4>
            {FormComponent2(
              updateProperties,
              updateTextInput,
              updateRadioProperty,
              register,
              errors,
              properties,
              setProperties,
              setValue,
              getValues
            )}

            <div className="break"></div>

            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                minWidth: "288px",
                minHeight: "65px",
                marginTop: "20px",
                fontSize: "1.25em",
              }}
              onClick={handleSubmit(() => {
                try {
                  flushSync(() => {
                    CalcCapacity(
                      properties,
                      setProperties,
                      capacity,
                      setCapacity,
                      allResults,
                      setAllResults,
                      allInput,
                      setAllInput,
                      setValue,
                      getValues
                    );
                    setResultsToggle(true);
                  });
                  scrollToResults();
                } catch (error) {
                  console.log("Error within 'handleSubmit' function");
                  console.log(error);
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
                ? "*Please resolve errors shown above (either missing or invalid fields)"
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
