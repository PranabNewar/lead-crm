import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLeads } from "../context/useLeads";
import LeadShowDetailsCard from "../components/LeadShowDetailsCard";
import LeadDetailsSkeleton from "../components/LeadDetailsSkeleton";

const Lead = () => {
  const params = useParams();
  const { leads } = useLeads();

  const { id } = params;
  const [lead, setLead] = useState(null);

  useEffect(() => {
    const leadData = leads?.find((lead) => lead.id === id);
    setLead(leadData);
  }, [id, leads]);

  if (lead === null) {
    return <LeadDetailsSkeleton />;
  }
  return (
    <Box component="div" sx={{ mt: 10, px: { xs: 1.5, sm: 4 } }}>
      <Stack component={"div"}>
        <Typography sx={{ fontWeight: "600" }} variant="h5">
          Lead details
        </Typography>
        <Typography sx={{ fontWeight: "" }} variant="subtitle2">
          Explore key information and insights about the lead
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Paper
          component="div"
          sx={{
            p: 2,
            maxWidth: { xs: "90vw", sm: "75vw" },
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Box
            component="div"
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <Stack component={"div"}>
              <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                {lead?.fullName}
              </Typography>
              <Typography sx={{ fontWeight: "" }} variant="body2">
                {lead?.companyName}
              </Typography>
            </Stack>
            <Chip
              label={lead?.leadStatus}
              size="small"
              sx={{ minWidth: "10%" }}
              color={
                lead?.leadStatus === "new"
                  ? "warning"
                  : lead?.leadStatus === "contacted"
                  ? "info"
                  : lead?.leadStatus === "qualified"
                  ? "success"
                  : lead?.leadStatus === "lost"
                  ? "error"
                  : "default"
              }
            />
          </Box>
          {lead && <LeadShowDetailsCard lead={lead} />}
          <Divider />
          <Box component="div" sx={{ mt: 1 }}>
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
              Additional Notes
            </Typography>

            <Typography
              sx={{ fontWeight: "400", color: "#828b92" }}
              variant="body2"
            >
              {lead?.additionalNotes === ""
                ? "Not avialable"
                : lead?.additionalNotes}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Lead;
