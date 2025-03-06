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
import { filterLeadSourceOption, filterStatusOption } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const Leads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { leads } = useLeads();
  const [FilteredLeads, setFilteredLeads] = useState(leads);

  const navigate = useNavigate();

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
  const handleFilterByStatus = (status) => {
    if (status === "all") {
      setFilteredLeads(leads);
    } else {
      const filteredLeads = leads.filter((lead) => lead.leadStatus === status);
      setFilteredLeads(filteredLeads);
    }
  };
  const handleFilterBySource = (source) => {
    if (source === "all") {
      setFilteredLeads(leads);
    } else {
      const filteredLeads = leads.filter((lead) => lead.leadSource === source);
      setFilteredLeads(filteredLeads);
    }
  };

  return (
    <Container
      component="div"
      sx={{ mt: 10, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Stack spacing={2} direction="row" justifyContent={"space-between"}>
        <Typography variant="h4" sx={{ fontWeight: "600" }} component="h4">
          Leads
        </Typography>
        <Button
          size="small"
          variant="contained"
          sx={{ display: "flex", gap: 1, textTransform: "none" }}
          color="primary"
          onClick={() => navigate("/create-lead")}
        >
          Create new lead
          <ControlPointRoundedIcon sx={{ fontSize: "16px" }} />
        </Button>
      </Stack>
      <Box component="div">
        <Stack
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 2,
          }}
        >
          <Searchbar
            serachQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <FormControl
            size="small"
            sx={{ minWidth: { xs: "66px", sm: "120px" } }}
          >
            <Select
              defaultValue="all"
              onChange={(e) => handleFilterByStatus(e.target.value)}
              displayEmpty
              sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Select Status
              </MenuItem>{" "}
              {/* Placeholder */}
              {filterStatusOption?.map((size) => (
                <MenuItem key={size.label} value={size.value}>
                  {size.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            size="small"
            sx={{ minWidth: { xs: "66px", sm: "120px" } }}
          >
            <Select
              defaultValue="all"
              onChange={(e) => handleFilterBySource(e.target.value)}
              displayEmpty
              sx={{ fontSize: { xs: "12px", sm: "14px", md: "16px" } }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Select Source
              </MenuItem>{" "}
              {/* Placeholder */}
              {filterLeadSourceOption?.map((size) => (
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
