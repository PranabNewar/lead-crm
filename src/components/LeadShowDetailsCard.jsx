import React from "react";
import Grid from "@mui/material/Grid2";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import {
  Business,
  EmailOutlined,
  Phone,
  ShoppingCart,
} from "@mui/icons-material";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import BusinessIcon from "@mui/icons-material/Business";
import { Stack, Typography } from "@mui/material";
const LeadShowDetailsCard = ({ lead }) => {
  console.log("🚀 ~ LeadShowDetailsCard ~ lead:", lead);
  return (
    <Grid
      container
      spacing={2}
      component="div"
      sx={{
        px: { sm: 4, xs: 2 },
        py: { sm: 4, xs: 2 },
        mx: "auto",
        mt: 1,
      }}
    >
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <EmailOutlined sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Email
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.email === "" ? "Unknown" : lead?.email}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Phone sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Phone
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.phone === "" ? "Unknown" : lead?.phone}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <ShoppingCart sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Interested Products
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.interestedProducts.length > 0
              ? lead?.interestedProducts.map((interest, index) => (
                  <span key={index}>
                    {interest}
                    {index !== lead?.interestedProducts - 1 ? ", " : ""}{" "}
                  </span>
                ))
              : "Unknown"}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <BusinessIcon sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Company size
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.companySize === "" ? "Unknown" : lead?.companySize}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <LocalOfferOutlinedIcon sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Lead source
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.leadSource === "" ? "Unknown" : lead?.leadSource}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <ChatBubbleOutlineOutlinedIcon
          sx={{ fontSize: "20px", color: "#828b92" }}
        />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Preffered Contact Method
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.prefferedContactMethod === ""
              ? "Unknown"
              : lead?.prefferedContactMethod}
          </Typography>
        </Stack>
      </Grid>
      <Grid
        size={{ xs: 12, sm: 6 }}
        sx={{
          direction: "row",
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <FeedOutlinedIcon sx={{ fontSize: "20px", color: "#828b92" }} />
        <Stack component={"div"}>
          <Typography
            sx={{ fontWeight: "600", fontSize: "16px" }}
            variant="body1"
          >
            Newsletter
          </Typography>
          <Typography
            sx={{ fontWeight: "400", color: "#828b92" }}
            variant="body2"
          >
            {lead?.newsletter ? "Subscribed" : "Not subscribed"}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LeadShowDetailsCard;
