import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function ResultsTable(capacity) {
  return (
    <div className="tableContainer">
      <Paper elevation={12}>
        <TableContainer
          sx={{
            minWidth: 300,
            maxWidth: 450,
          }}
          align="center"
        >
          <Table
            sx={{
              minWidth: 300,
              maxWidth: 500,
            }}
            size="small"
            aria-label="Results Summary:"
          >
            <TableHead sx={{ fontWeights: "bold", fontFamily: "robotoBold" }}>
              <TableRow>
                <TableCell>Failure Mode</TableCell>
                <TableCell align="right">Capacity [lbs]</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Shear
                </TableCell>
                <TableCell align="right">{capacity.shear}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Tension
                </TableCell>
                <TableCell align="right">{capacity.tension}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Warnings
                </TableCell>
                <TableCell align="right">
                  {capacity.notes?.map((item, index) => {
                    return <div key={index}>- {item}</div>;
                  })}
                </TableCell>
              </TableRow>
            </TableBody>

            {/* <h4 className="resultItem">Warnings:</h4>
        {capacity.notes?.map((item, index) => {
          return <div key={index}>{item}</div>;
        })} */}
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
