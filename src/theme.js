import { red, blue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const color1 = blue[800];
const color2 = blue[100];

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: color1,
    },
    secondary: {
      main: color2,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
