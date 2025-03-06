import { GoogleGenerativeAI } from "@google/generative-ai";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const AskHelp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null);
  const [query, setQuery] = useState("");
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMENI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const getResponse = async () => {
    setIsSubmitting(true);

    try {
      const result = await model.generateContent([query]);
      setQuery("");
      setIsSubmitting(false);
      setResponse(result.response.text());
    } catch (err) {
      setQuery("");
      setIsSubmitting(false);
      console.log(err);
    }
  };
  const handleSubmit = () => {
    if (query !== "") {
      getResponse();
    }
  };
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Typography
          component="h5"
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Ask for help
        </Typography>
        <TextField
          className={`${isSubmitting ? "animated-textarea a" : ""}`}
          variant="outlined"
          value={query}
          sx={{
            "& .MuiOutlinedInput-root": {
              border: isSubmitting && "transparent", // Normal border
              "&:hover fieldset": {
                borderColor: isSubmitting && "transparent", // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: isSubmitting && "transparent", // Focus border
              },
              "& fieldset": {
                borderColor: isSubmitting && "transparent", // Default border
              },
            },
          }}
          placeholder="Ask me anything..."
          multiline
          fullWidth
          minRows={4}
          onChange={(e) => setQuery(e.target.value)}
        />

        {response && (
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              padding: 2,
              mt: 4,
              borderRadius: "8px",
            }}
          >
            {response}
          </Box>
        )}

        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          sx={{
            minWidth: "100px",
            marginTop: 2,
            textTransform: "none",
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
