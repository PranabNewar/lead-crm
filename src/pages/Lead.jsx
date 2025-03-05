import { Box, Chip, Divider, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLeads } from "../context/useLeads";
import Grid from "@mui/material/Grid2";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {
  Business,
  EmailOutlined,
  Phone,
  ShoppingCart,
} from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";

const Lead = () => {
  const params = useParams();
  const { leads } = useLeads();
  console.log("🚀 ~ Lead ~ leads:", leads);
  const { id } = params;
  const [lead, setLead] = useState(null);
  // console.log("🚀 ~ Lead ~ lead state:", lead);
  console.log("🚀 ~ Lead ~ id:", id);
  useEffect(() => {
    const leadData = leads?.find((lead) => lead.id === Number(id));
    console.log(leadData, "leads 1");
    setLead(leadData);
  }, [id, leads]);

  const keyMappings = {
    email: {
      title: "Email",
      icon: <EmailOutlined sx={{ fontSize: "20px", color: "#828b92" }} />,
    },
    phone: {
      title: "Phone",
      icon: <Phone sx={{ fontSize: "20px", color: "#828b92" }} />,
    },
    interestedProducts: {
      title: "Interested Products",
      icon: <ShoppingCart sx={{ fontSize: "20px", color: "#828b92" }} />,
    },
    companySize: {
      title: "Company Size",
      icon: <BusinessIcon sx={{ fontSize: "20px", color: "#828b92" }} />,
    },
    leadSource: {
      title: "Lead Source",
      icon: (
        <LocalOfferOutlinedIcon sx={{ fontSize: "20px", color: "#828b92" }} />
      ),
    },
    prefferedContactMethod: {
      title: "Preferred Contact Method",
      icon: (
        <ChatBubbleOutlineOutlinedIcon
          sx={{ fontSize: "20px", color: "#828b92" }}
        />
      ),
    },
  };

  const extractedArray = Object.keys(keyMappings).map((key) => ({
    title: keyMappings[key].title,
    value: lead !== null && lead[key],
    icon: keyMappings[key].icon,
  }));

  return (
    <Box component="div" sx={{ mt: 10, px: { xs: 1.5, sm: 4 } }}>
      <Stack component={"div"}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Lead details
        </Typography>
        <Typography sx={{ fontWeight: "" }} variant="body">
          View lead details
        </Typography>
      </Stack>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Paper component="div" sx={{ p: 2, maxWidth: "60%" }}>
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

          <Grid
            container
            spacing={2}
            component="div"
            sx={{
              px: { sm: 4, xs: 2 },
              py: { sm: 4, xs: 2 },
              mx: "auto",
              mt: 4,
            }}
          >
            {extractedArray?.map((item, index) => (
              <Grid
                size={6}
                key={index}
                sx={{
                  direction: "row",
                  display: "flex",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                {item?.icon}
                <Stack component={"div"}>
                  <Typography
                    sx={{ fontWeight: "600", fontSize: "16px" }}
                    variant="body1"
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "400", color: "#828b92" }}
                    variant="body2"
                  >
                    {Array.isArray(item?.value)
                      ? item.value.map((interest, index) => (
                          <span key={index}>
                            {interest}
                            {index !== item.value.length - 1 ? ", " : ""}{" "}
                          </span>
                        ))
                      : item?.value === ""
                      ? "Unknown"
                      : item.value}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider variant="middle" />
          <Box component="div">
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

        <Stack sx={{ Width: "40%" }}>
          <Paper sx={{ width: "100%" }}>
            <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
              Lead Summery
            </Typography>

            <Box>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  direction: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                  Created
                </Typography>
                <Typography
                  sx={{ fontWeight: "400", color: "#828b92" }}
                  variant="body2"
                >
                  {lead?.created_at}
                </Typography>
              </Stack>
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  direction: "row",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }} variant="subtitle1">
                  Newsletter
                </Typography>
                <Typography
                  sx={{ fontWeight: "400", color: "#828b92" }}
                  variant="body2"
                >
                  {lead?.newsletter ? "Subscribed" : "Not Subscribed"}
                </Typography>
              </Stack>
            </Box>
          </Paper>
          <Paper></Paper>
        </Stack>
      </Box>
    </Box>
  );
};

export default Lead;
