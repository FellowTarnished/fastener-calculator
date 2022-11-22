import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  Grid,
  Box,
} from "@mui/material";

export default function formComponent1(
  updateProperties,
  updateTextInput,
  updateRadioProperty
) {
  return (
    <div>
      <div className="subDesc">(MATERIAL IN CONTACT WITH FASTENER HEAD)</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item>
            <TextField
              label="Material"
              onChange={(e) => updateProperties(e)}
              select
              name="comp1Mat"
              variant="outlined"
              style={{ width: 250 }}
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
              name="comp1Thick"
              id="comp1Thick"
              variant="outlined"
              style={{ width: 250 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">in</InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Edge Distance"
              onChange={(e) => updateTextInput(e)}
              name="edgeDist1"
              id="edgeDist1"
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
      <div className="break"></div>
      {/* <FormLabel id="holeType">Hole Type</FormLabel>

      <RadioGroup
        row
        aria-labelledby="holeType-button-group-label"
        name="holeType"
        onChange={(e) => updateProperties(e)}
      >
        <FormControlLabel
          value="standard"
          control={<Radio />}
          label="Standard"
        />
        <FormControlLabel value="slotted" control={<Radio />} label="Slotted" />
      </RadioGroup> */}

      <Divider
        variant="middle"
        sx={{ bgcolor: "silver" }}
        flexItem="false"
      ></Divider>
    </div>
  );
}
