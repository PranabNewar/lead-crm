import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Searchbar = ({ serachQuery, setSearchQuery }) => {
  return (
    <TextField
      placeholder="Search..."
      variant="outlined"
      margin="none"
      value={serachQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      sx={{
        backgroundColor: "#ffffff", // Blue background
        borderRadius: 1,

        "& .MuiOutlinedInput-root": {
          color: "#1a083c",
          "& fieldset": { border: "1px solid #e2e8f0" }, // Remove border
          "&:hover fieldset": { border: "1px solid #e2e8f0" },
          // "&.Mui-focused fieldset": { border: "none" },
          paddingLeft: "10px",
        },
        "& .MuiInputBase-input": {
          color: "#1a083c",
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
