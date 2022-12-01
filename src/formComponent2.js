import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  Grid,
  Box,
} from "@mui/material";

export default function FormComponent2(
  updateProperties,
  updateTextInput,
  updateRadioProperty,
  register,
  errors
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
              onChange={(e) => updateProperties(e)}
              select
              name="comp2Mat"
              variant="outlined"
              style={{ width: 250 }}
              {...register("comp2Mat")}
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
              onChange={(e) => updateTextInput(e)}
              name="comp2Thick"
              id="comp2Thick"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
              {...register("comp2Thick")}
              error={errors.comp2Thick ? true : false}
              helperText={errors.comp2Thick?.message}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Edge Distance"
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
              {...register("edgeDist2")}
              error={errors.edgeDist2 ? true : false}
              helperText={errors.edgeDist2?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
