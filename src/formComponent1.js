import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  Grid,
  Box,
} from "@mui/material";

import { getDiameter } from "./props";

// import { pullover } from "./pullover";

export default function FormComponent1(
  updateProperties,
  updateTextInput,
  updateRadioProperty,
  register,
  errors,
  setValue,
  properties,
  setProperties,
  getValues
) {
  return (
    <div>
      <div className="subDesc">(MATERIAL IN CONTACT WITH FASTENER HEAD)</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <TextField
              label="Material"
              {...register("comp1Mat")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => updateProperties(e)}
              select
              name="comp1Mat"
              variant="outlined"
              style={{ width: 250 }}
              error={errors.comp1Mat ? true : false}
              helperText={errors.comp1Mat?.message}
            >
              <MenuItem disabled> ALUMINUM </MenuItem>
              <MenuItem value="6063-T6">6063-T6</MenuItem>
              <MenuItem value="6063-T5">6063-T5 </MenuItem>
              <MenuItem value="6061-T6">6061-T6</MenuItem>
              <MenuItem value="6005A-T61">6005A-T61</MenuItem>
              <MenuItem value="5005-H34">5005-H34</MenuItem>
              <MenuItem value="3003-H14">3003-H14</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Thickness"
              name="comp1Thick"
              id="comp1Thick"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              {...register("comp1Thick")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => {
                updateTextInput(e);
                getDiameter(properties, setProperties, setValue);
              }}
              error={errors.comp1Thick ? true : false}
              helperText={errors.comp1Thick?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Edge Distance"
              name="edgeDist1"
              id="edgeDist1"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              {...register("edgeDist1")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => updateTextInput(e)}
              error={errors.edgeDist1 ? true : false}
              helperText={errors.edgeDist1?.message}
            />
          </Grid>
        </Grid>
      </Box>
      <div className="break"></div>

      <Divider variant="middle" sx={{ bgcolor: "secondary.main" }}></Divider>
    </div>
  );
}
