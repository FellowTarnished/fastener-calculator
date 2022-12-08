import { TextField, MenuItem, InputAdornment, Grid, Box } from "@mui/material";

import { getThreadType } from "./props";

export default function FormComponent2(
  updateProperties,
  updateTextInput,
  updateRadioProperty,
  register,
  errors,
  properties,
  setProperties,
  setValue
) {
  return (
    <div>
      <div className="subDesc">
        (MATERIAL NOT IN CONTACT WITH FASTENER HEAD)
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <TextField
              label="Material"
              {...register("comp2Mat")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => updateProperties(e)}
              select
              name="comp2Mat"
              variant="outlined"
              style={{ width: 250 }}
              error={errors.comp2Mat ? true : false}
              helperText={errors.comp2Mat?.message}
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
              {...register("comp2Thick")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => {
                updateTextInput(e);
                getThreadType(properties, setProperties, setValue);
              }}
              name="comp2Thick"
              id="comp2Thick"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              error={errors.comp2Thick ? true : false}
              helperText={errors.comp2Thick?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Edge Distance"
              {...register("edgeDist2")} //NOTE THIS MUST BE ABOVE ONCHANGE CALL
              onChange={(e) => updateTextInput(e)}
              name="edgeDist2"
              id="edgeDist2"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              error={errors.edgeDist2 ? true : false}
              helperText={errors.edgeDist2?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
