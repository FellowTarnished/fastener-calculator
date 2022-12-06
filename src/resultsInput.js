import MathJax from "better-react-mathjax/MathJax";
import { Grid, Box } from "@mui/material";

export default function resultsInput(properties, allInput) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <div>Component #1 Properties:</div>
            <MathJax>`t_1` = {properties[0].comp1Thick} inches</MathJax>
            <MathJax>Alloy : {properties[0].comp1Mat}</MathJax>
            <MathJax>`F_(U1)` = {properties[0].comp1Fu} psi</MathJax>
            <MathJax>`F_(Y1)` = {properties[0].comp1Fy} psi</MathJax>
            <MathJax>`e_A` = {properties[0].edgeDist1} inches</MathJax>
          </Grid>
          <Grid item>
            <div>Component #2 Properties:</div>
            <MathJax>`t_2` = {properties[0].comp2Thick} inches</MathJax>
            <MathJax>Alloy : {properties[0].comp2Mat}</MathJax>
            <MathJax>`F_(U2)` = {properties[0].comp2Fu} psi</MathJax>
            <MathJax>`F_(Y2)` = {properties[0].comp2Fy} psi</MathJax>
            <MathJax>`e_A` = {properties[0].edgeDist2} inches</MathJax>
          </Grid>
          <Grid item>
            <div>Fastener Properties:</div>
            <MathJax>Size : {properties[0].fastDia} </MathJax>
            <MathJax>`D` = `d` = {properties[0].nomDia} inches</MathJax>
            <MathJax>Spacing : {properties[0].spacing} inches</MathJax>
            <MathJax>Material : {properties[0].fastMatInput} </MathJax>
            <MathJax>`F_U` = `F_(TU)` = {properties[0].fastFu} psi</MathJax>
            <MathJax>`F_Y` = {properties[0].fastFy} psi</MathJax>
            <MathJax>`F_V` = min(`0.75*F_Y, S_F * sqrt 3`)</MathJax>
            <MathJax>`F_T` = min(`0.75*F_Y, F_U / S_F`)</MathJax>
            {allInput[0].Dws ? (
              <MathJax>`D_(WS)` = {allInput[0].Dws} inches</MathJax>
            ) : (
              <MathJax>`D_(WS)` = not-applicable </MathJax>
            )}
            <MathJax>
              `D_H` = {Math.round(allInput[0].Dh * 1000) / 1000} inches
            </MathJax>
            <MathJax>`t_(head)` = {allInput[0].thead} inches</MathJax>
            <MathJax>`K` = {properties[0].minorDia} inches</MathJax>
            <MathJax>
              `A(S)` ={" "}
              {Math.round(allInput[0].tensileStressArea * 10000) / 10000} sq in
            </MathJax>
            <MathJax>
              `A(R)` = {Math.round(allInput[0].threadRootArea * 10000) / 10000}{" "}
              sq in
            </MathJax>
            <MathJax>`C_(POV)` = {allInput[0].Cpov}</MathJax>

            <MathJax>`S_F` = {allInput[0].SF}</MathJax>
            <MathJax>`Omega` = 3</MathJax>
          </Grid>
        </Grid>
      </Box>
      <ol className="resultNotes">
        Notes:
        <MathJax>
          {+properties[0].comp2Thick < 2 * (1 / properties[0].threadCount) ? (
            <li className="resultItem">
              It is INADVISABLE to use fasteners subject to pullout when the
              fastener cannot develop AT LEAST (2) full threads.
            </li>
          ) : (
            ""
          )}
          <li className="resultItem">
            All symbols shown above follow the convention used in AAMA
            TIR-A9-14. Reference Section 2.0 of AAMA TIR-A9-14 for all symbol
            definitions.
          </li>
          {properties[0].nomDia > 0.25 ? (
            <li className="resultItem">
              Screw Tilting for screws larger than 1/4" in diameter is excluded
              from the spec.
            </li>
          ) : (
            ""
          )}
          <li className="resultItem">
            Washer diameter (`D_(WS)`) and countersunk head thicknesses
            (`t_(head)`) have been assumed based on standard industry values.
            User shall verify applicability of assumed values to fasteners being
            used on project.
          </li>
          <li className="resultItem">
            Screw engagement length assumed to be full thickness of component #2
            (`t_2`).
          </li>
        </MathJax>
      </ol>
    </div>
  );
}
