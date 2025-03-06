import {
  Box,
  Skeleton,
  Typography,
  Grid,
  Paper,
  Chip,
  Stack,
} from "@mui/material";

const LeadDetailsSkeleton = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Title & Subtitle */}
      <Typography variant="h5">
        <Skeleton width="40%" />
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        <Skeleton width="60%" />
      </Typography>

      {/* Main Card */}
      <Paper elevation={3} sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
        <Grid container spacing={2} alignItems="center">
          {/* Left Side - Name & Company */}
          <Grid item xs={12} sm={8}>
            <Typography variant="h6">
              <Skeleton width="60%" />
            </Typography>
            <Typography variant="subtitle1">
              <Skeleton width="40%" />
            </Typography>
          </Grid>

          {/* Right Side - Status Badge */}
          <Grid item xs={12} sm={4} textAlign={{ xs: "left", sm: "right" }}>
            <Skeleton variant="rounded" width={80} height={30} />
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Skeleton width="80%" height={30} />
              <Skeleton width="60%" height={30} />
              <Skeleton width="50%" height={30} />
            </Stack>
          </Grid>

          {/* Company & Preferences */}
          <Grid item xs={12} sm={6}>
            <Stack spacing={1}>
              <Skeleton width="80%" height={30} />
              <Skeleton width="60%" height={30} />
              <Skeleton width="50%" height={30} />
            </Stack>
          </Grid>

          {/* Additional Notes */}
          <Grid item xs={12}>
            <Typography variant="body1">
              <Skeleton width="30%" height={20} />
            </Typography>
            <Skeleton width="100%" height={50} />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default LeadDetailsSkeleton;
