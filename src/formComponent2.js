import {
  TextField,
  MenuItem,
  InputAdornment,
  Divider,
  Grid,
  Box,
} from "@mui/material";

export default function formComponent2(
  updateProperties,
  updateTextInput,
  updateRadioProperty
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
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
