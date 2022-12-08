import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  Grid,
  Box,
  Typography,
} from "@mui/material";

import * as React from "react";

import hex from "./style/images/hexJSX.svg";
import csunk from "./style/images/countersunkJSX.svg";
import hwh from "./style/images/hex-flangedJSX.svg";
import crown from "./style/images/crownJSX.svg";
import valley from "./style/images/valleyJSX.svg";
import flush from "./style/images/flushJSX.svg";

import { getDiameter, getThreadType } from "./props";

export default function FormFastenerInfo(
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
) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <TextField
              label="Fastener Size"
              select
              name="fastDia"
              id="fastDia"
              variant="outlined"
              style={{ width: 250 }}
              {...register("fastDia")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
              onChange={(e) => {
                updateProperties(e);
                getDiameter(properties, setProperties, setValue);
                getThreadType(properties, setProperties, setValue);
                trigger(["spacing", "edgeDist1", "edgeDist2"]);
              }}
              error={errors.fastDia ? true : false}
              helperText={errors.fastDia?.message}
            >
              <MenuItem disabled> SPACED THREADS </MenuItem>
              <MenuItem value="#6-20"> #6-20 </MenuItem>
              <MenuItem value="#8-18">#8-18</MenuItem>
              <MenuItem value="#10-16">#10-16</MenuItem>
              <MenuItem value="#12-14">#12-14</MenuItem>
              <MenuItem value="1/4-14">1/4-14</MenuItem>
              <MenuItem value="5/16-12">5/16-12</MenuItem>
              <MenuItem value="3/8-12">3/8-12</MenuItem>
              <MenuItem disabled> UNC THREADS </MenuItem>
              <MenuItem value="#6-32">#6-32</MenuItem>
              <MenuItem value="#8-32">#8-32</MenuItem>
              <MenuItem value="#10-24">#10-24</MenuItem>
              <MenuItem value="#12-24">#12-24</MenuItem>
              <MenuItem value="1/4-20">1/4-20</MenuItem>
              <MenuItem value="5/16-18">5/16-18</MenuItem>
              <MenuItem value="3/8-16">3/8-16</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Fastener Material"
              select
              name="fastMatInput"
              variant="outlined"
              style={{ width: 250 }}
              {...register("fastMatInput")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
              onChange={(e) => updateProperties(e)}
              error={errors.fastMatInput ? true : false}
              helperText={errors.fastMatInput?.message}
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
          <Grid item>
            <TextField
              label="Fastener Spacing"
              type="number"
              inputProps={{ step: "0.1" }}
              name="spacing"
              id="spacing"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              {...register("spacing")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
              onChange={(e) => {
                updateTextInput(e);
              }}
              error={errors.spacing ? true : false}
              helperText={errors.spacing?.message}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="break"></div>
      <h4 className="headType">HEAD TYPE</h4>
      <div className="break"></div>
      <Typography sx={{ color: "error.main" }}>
        {errors.headType ? "*Head type is required" : ""}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="headType"
        >
          <Grid item sx={{ flexDirection: "column", minWidth: 250 }}>
            <label htmlFor="hexHead">
              <input
                type="radio"
                id="hexHead"
                value="hexHead"
                name="headType"
                {...register("headType")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="hex head" src={hex}></img>
              <div className="headCard">HEX HEAD (NO WASHER)</div>
            </label>
          </Grid>
          <Grid item sx={{ flexDirection: "column", width: 250 }}>
            <label htmlFor="hexWithWasher">
              <input
                type="radio"
                id="hexWithWasher"
                value="hexWithWasher"
                name="headType"
                {...register("headType")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="hex with washer" src={hwh}></img>
            </label>{" "}
            <div className="headCard">HEX HEAD (WITH WASHER OR FLANGED)</div>
          </Grid>
          <Grid item sx={{ flexDirection: "column", width: 250 }}>
            <label htmlFor="countersunk">
              <input
                type="radio"
                id="countersunk"
                value="countersunk"
                name="headType"
                {...register("headType")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="countersunk" src={csunk}></img>
            </label>{" "}
            <div className="headCard">COUNTERSUNK</div>
          </Grid>
        </Grid>
      </Box>
      <h4 className="headType">INTERFACE CONFIGURATION</h4>
      <Typography sx={{ color: "error.main" }}>
        {errors.interface ? "*Interface configuration is required" : ""}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="headType"
        >
          <Grid item sx={{ flexDirection: "column", minWidth: 250 }}>
            <label htmlFor="flush">
              <input
                type="radio"
                id="flush"
                value="flush"
                name="interface"
                {...register("interface")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="flush" className="interfaceIMG" src={flush}></img>
            </label>
            <div className="interfaceCard">FLUSH</div>
          </Grid>
          <Grid item sx={{ flexDirection: "column", minWidth: 250 }}>
            <label htmlFor="valley">
              <input
                type="radio"
                id="valley"
                value="valley"
                required
                name="interface"
                {...register("interface")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => {
                  updateRadioProperty(e);
                }}
              ></input>{" "}
              <img alt="valley" className="interfaceIMG" src={valley}></img>
            </label>{" "}
            <div className="interfaceCard">VALLEY</div>
          </Grid>
          <Grid item sx={{ flexDirection: "column", minWidth: 250 }}>
            <label htmlFor="crown">
              <input
                type="radio"
                id="crown"
                value="crown"
                name="interface"
                {...register("interface")} //NOTE THIS MUST BE ABOVE ONCHANGE FUNCTIONS
                onChange={(e) => updateRadioProperty(e)}
              ></input>{" "}
              <img alt="crown" className="interfaceIMG" src={crown}></img>
            </label>
            <div className="interfaceCard">CROWN</div>
          </Grid>
        </Grid>
      </Box>
      <Divider variant="middle" sx={{ bgcolor: "secondary.main" }} />
    </div>
  );
}
