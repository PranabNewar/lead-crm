import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Searchbar = ({ serachQuery, setSearchQuery }) => {
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      margin="none"
      size="small"
      value={serachQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 1,
        fontSize: { xs: "12px", sm: "14px", md: "16px" },

        "& .MuiOutlinedInput-root": {
          color: "#1a083c",
          "& fieldset": { border: "1px solid #e2e8f0" },
          "&:hover fieldset": { border: "1px solid #e2e8f0" },

          paddingLeft: "10px",
        },
        "& .MuiInputBase-input": {
          color: "#1a083c",
          fontSize: { xs: "12px", sm: "14px", md: "16px" },
        },
        "& .MuiSvgIcon-root": {
          color: "#1a083c",
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default Searchbar;
