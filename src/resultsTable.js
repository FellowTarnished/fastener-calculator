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
              maxWidth: 600,
            }}
            aria-label="Results Summary:"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ minWidth: 150, fontSize: 16, fontWeight: 700 }}
                >
                  Failure Mode
                </TableCell>
                <TableCell
                  sx={{ minWidth: 150, fontSize: 16, fontWeight: 700 }}
                  align="right"
                >
                  Capacity [lbs]
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontSize: 16 }}>
                  Shear
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 16 }}>
                  {capacity.shear}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontSize: 16 }}>
                  Tension
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 16 }}>
                  {capacity.tension}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row" sx={{ fontSize: 16 }}>
                  Warnings
                </TableCell>
                <TableCell align="right" sx={{ fontSize: 16 }}>
                  {capacity.notes?.map((item, index) => {
                    return <div key={index}>- {item}</div>;
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
