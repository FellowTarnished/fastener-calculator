import MathJax from "better-react-mathjax/MathJax";

export default function resultsInput(properties, allInput) {
  return (
    <div>
      <div>Component #1 Properties:</div>
      <MathJax>`t_1` = {properties[0].comp1Thick} inches</MathJax>
      <MathJax>Alloy : {properties[0].comp1Mat}</MathJax>
      <MathJax>`F_(U1)` = {properties[0].comp1Fu} psi</MathJax>
      <MathJax>`F_(Y1)` = {properties[0].comp1Fy} psi</MathJax>
      <MathJax>Edge Distance : {properties[0].edgeDist1} inches</MathJax>
      <div>Component #2 Properties:</div>
      <MathJax>`t_2` = {properties[0].comp2Thick} inches</MathJax>
      <MathJax>Alloy : {properties[0].comp2Mat}</MathJax>
      <MathJax>`F_(U2)` = {properties[0].comp2Fu} psi</MathJax>
      <MathJax>`F_(Y2)` = {properties[0].comp2Fy} psi</MathJax>
      <MathJax>Edge Distance : {properties[0].edgeDist1} inches</MathJax>
      <div>Fastener Properties:</div>
      <MathJax>Size : {properties[0].fastDia} </MathJax>
      <MathJax>Spacing : {properties[0].spacing} inches</MathJax>
      <MathJax>Material : {properties[0].fastMatInput} inches</MathJax>
      <MathJax>`F_u` = {properties[0].fastFu} psi</MathJax>
      <MathJax>`F_y` = {properties[0].fastFy} psi</MathJax>
      {allInput[0].Dws ? (
        <MathJax>`D_(WS)` = {allInput[0].Dws} inches</MathJax>
      ) : (
        <MathJax>`D_(WS)` = not-applicable </MathJax>
      )}
      <MathJax>`D_H` = {allInput[0].Dh} inches</MathJax>
      <MathJax>`t_(head)` = {allInput[0].thead} inches</MathJax>
      <MathJax>`S_F` = {allInput[0].SF}</MathJax>
      <ol className="resultNotes">
        Notes:
        <MathJax>
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
            User shall verify applicability to fasteners used on their project.
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
