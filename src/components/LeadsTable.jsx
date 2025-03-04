import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button, Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLeads } from "../context/useLeads";

const LeadsTable = () => {
  const { leads } = useLeads();
  const navigate = useNavigate();
  const [FilteredLeads, setFilteredLeads] = useState(leads);
  console.log("🚀 ~ BasicTable ~ leads:", leads);
  const handleView = (id) => {
    navigate(`/leads/${id}`);
  };

  //   const handleFilteredLeads=()=>{

  //   }
  return (
    <TableContainer component={Paper}>
      <Stack></Stack>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Lead Status</TableCell>
            <TableCell align="right">Lead source</TableCell>
            <TableCell align="right">Interested Products</TableCell>

            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {FilteredLeads?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.leadStatus}</TableCell>
              <TableCell align="right">{row.leadSource}</TableCell>
              <TableCell align="right" sx={{ display: "flex", gap: "4px" }}>
                {row.interestedProducts?.map((prod, index) => (
                  <Chip
                    label={prod}
                    color={index % 2 == 0 ? "success" : "info"}
                  />
                ))}
              </TableCell>

              <TableCell align="right">
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
