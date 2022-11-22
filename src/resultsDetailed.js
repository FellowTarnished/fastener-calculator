import ResultsTable from "./resultsTable";
import MathJax from "better-react-mathjax/MathJax";
import { Divider } from "@mui/material";

import resultsInput from "./resultsInput";

export default function resultsDetailed(
  capacity,
  resultsToggle,
  ref,
  allResults,
  properties,
  allInput
) {
  return (
    <div>
      {resultsToggle ? (
        <div className="results">
          <h4 ref={ref}>Results Summary:</h4>
          {ResultsTable(capacity)}
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
              <MathJax className="resultLabel">{allResults[2].notes}</MathJax>
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
          {resultsInput(properties, allInput)}
        </div>
      ) : (
        <div></div>
      )}
      <Divider
        variant="middle"
        sx={{ bgcolor: "silver" }}
        flexInput="false"
      ></Divider>{" "}
    </div>
  );
}
