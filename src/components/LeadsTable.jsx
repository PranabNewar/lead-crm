import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button, Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LeadsTable = ({ leads }) => {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/leads/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Full name</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Email
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Phone
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Lead Status
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Lead source
            </TableCell>
            {/* <TableCell align="right">Interested Products</TableCell> */}

            <TableCell align="center" sx={{ fontWeight: "bold" }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">
                <Chip
                  size="small"
                  label={row.leadStatus}
                  color={
                    row.leadStatus === "new"
                      ? "success"
                      : row.leadStatus === "contacted"
                      ? "info"
                      : row.leadStatus === "qualified"
                      ? "warning"
                      : row.leadStatus === "lost" && "error"
                  }
                ></Chip>
              </TableCell>
              <TableCell align="center">{row.leadSource}</TableCell>
              <TableCell align="center">
                <Button variant="outlined" onClick={() => handleView(row.id)}>
                  {" "}
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeadsTable;
