import {
  TextField,
  MenuItem,
  InputAdornment,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Button,
  Divider,
  Grid,
  Box,
} from "@mui/material";

import React, { useState, useContext, useRef } from "react";

import hex from "./style/images/hexJSX.svg";
import csunk from "./style/images/countersunkJSX.svg";
import hwh from "./style/images/hex-flangedJSX.svg";
import crown from "./style/images/crownJSX.svg";
import valley from "./style/images/valleyJSX.svg";
import flush from "./style/images/flushJSX.svg";

export default function formFastenerInfo(
  updateProperties,
  updateTextInput,
  updateRadioProperty
) {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </Box>

      <div className="headType">Head Type</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <div className="headType">
            <Grid item>
              <div className="headCard" sx={{ width: 250 }}>
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
            </Grid>
            <Grid item>
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
            </Grid>
            <Grid item>
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
            </Grid>
          </div>
        </Grid>
      </Box>
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
      <Divider variant="middle" sx={{ bgcolor: "silver" }} flexItem="false" />
    </div>
  );
}
