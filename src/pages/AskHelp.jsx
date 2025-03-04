import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const AskHelp = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Box>
      <Container>
        <TextField
          sx={{
            width: "100%",
            transition: "border 0.4s ease",
            borderRadius: "8px",
            "& .MuiOutlinedInput-root": {
              transition: "border 0.4s ease",
              borderRadius: "8px",
              border: "2px solid transparent",
              backgroundClip: "padding-box",
              ...(isActive && {
                borderImage:
                  "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a88) 1",
                animation: "borderAnimation 1s infinite alternate",
              }),
            },
            "@keyframes borderAnimation": {
              "0%": {
                borderImageSource:
                  "linear-gradient(90deg, #ff7eb3, #ff758c, #ff6a88)",
              },
              "100%": {
                borderImageSource:
                  "linear-gradient(90deg, #ff6a88, #ff758c, #ff7eb3)",
              },
            },
          }}
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <Button
          onClick={() => setIsActive(!isActive)}
          sx={{
            marginTop: 2,
            background: "#ff758c",
            color: "white",
            "&:hover": {
              background: "#ff6a88",
            },
          }}
        >
          Ask
        </Button>
      </Container>
    </Box>
  );
};

export default AskHelp;
