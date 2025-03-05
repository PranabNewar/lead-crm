import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import LeadsTable from "../components/LeadsTable";

import { useLeads } from "../context/useLeads";
import Searchbar from "../components/Searchbar";
import { filterStatusOption } from "../utils/utils";

const Leads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { leads } = useLeads();
  const [FilteredLeads, setFilteredLeads] = useState(leads);
  const [fileterByStatus, setFiletrByStatus] = useState("");

  useEffect(() => {
    const searchedLeads = getSearchedLeads();
    setFilteredLeads(searchedLeads);
  }, [searchQuery]);

  const getSearchedLeads = () => {
    return leads.filter(
      (lead) =>
        lead.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <Container component="div" sx={{ mt: 10 }}>
      <Stack spacing={2} direction="row" justifyContent={"space-between"}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }} component="h4">
          Leads
        </Typography>
        <Button
          variant="contained"
          sx={{ display: "flex", gap: 1, textTransform: "none" }}
          color="primary"
          onClick
        >
          Create new lead
          <ControlPointRoundedIcon sx={{ fontSize: "16px" }} />
        </Button>
      </Stack>
      <Box component="div">
        <Typography>Filters</Typography>
        <Stack component="div">
          <Searchbar
            serachQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FormControl fullWidth size="small">
            <Select
              defaultValue="all"
              value={fileterByStatus}
              onChange={(e) => setFiletrByStatus(e.target.value)} // Fixed "taget" to "target"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {filterStatusOption?.map((size) => (
                <MenuItem key={size.label} value={size.value}>
                  {size.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Box>
      <LeadsTable leads={FilteredLeads} />
    </Container>
  );
};

export default Leads;
