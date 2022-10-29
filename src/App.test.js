import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const caesarCipher = require("./caesarCipher");

// test("wrapping from z to a", () => {
//   expect(caesarCipher.cC("z", 1)).toMatch("a");
// });

// test("keeping case", () => {
//   expect(caesarCipher.cC("HelLo", 1)).toMatch("IfmMp");
// });

// test("shift of 13 case", () => {
//   expect(caesarCipher.cC("AZaz", 13)).toMatch("NMnm");
// });

// test("punctuation", () => {
//   expect(caesarCipher.cC("!")).toMatch("!");
// });
