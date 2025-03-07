import { GoogleGenerativeAI } from "@google/generative-ai";
import { Box, Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import React, { useState } from "react";
import ResponseContainer from "../components/ResponseContainer";
const AskHelp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responses, setResponses] = useState([]);
  console.log(responses,"responses")
  const [query, setQuery] = useState("");
  const [isTextareaActive,setIsTextareaActive]=useState(false)
  const [isTyping,setIsTyping] = useState(false)
  const [isShowGradient,setIsShowGradient] = useState(false)

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMENI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const getResponse = async () => {
    setIsSubmitting(true)
    setIsTyping(false)

    try {
      const result = await model.generateContent([query]);
      setIsTextareaActive(false)
      setIsShowGradient(false)
      setQuery("");
      setIsSubmitting(false);
      setResponses((prev)=>([...prev,{  id: Math.random().toString(36).substring(2, 11),
        response:result.response.text(),
        created_at: Date.now(),
        
      }]));
      setIsTextareaActive(false)
    } catch (err) {
      setIsShowGradient(false)
      setIsTextareaActive(false)
      setQuery("");
      setIsSubmitting(false);
      setIsTextareaActive(false)
      console.log(err);
    }
  };
  const handleSubmit = () => {
    if (query !== "") {
      getResponse();
    }
  };
  return (
    <Box sx={{ mt: 10 , }}>
      <Container maxWidth="md">
        <Typography
          component="h5"
          variant="h5"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Ask for help
        </Typography>
        <Box component={"div"}
              className={`${isShowGradient ? "animated-textarea a" : ""}`}
        sx={{border:"1px solid #e8e8e8",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          borderRadius:"8px",
          minHeight: isTextareaActive ? "180px" : "60px", 
          transition: "min-height 0.3s ease-in-out", 
          padding: "8px", 
  
        }}
      
        onFocus={()=>setIsTextareaActive(true)}
    
        >

     
        <TextField
    
          variant="outlined"
        
          value={query}
          sx={{
            width:"100%",
            "& .MuiOutlinedInput-root": {
              border: "transparent", // Normal border
              "&:hover fieldset": {
                borderColor: "transparent", // Hover border
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent", // Focus border
              },
              "& fieldset": {
                borderColor: "transparent", // Default border
              },
              // "& textarea": {
              //   minHeight: isTextareaActive ? "150px" : "60px", // Example height
              //   transition: "min-height 0.3s ease-in-out", // Smooth transition for height
              // },
            },
          }}
          placeholder="Ask me anything..."
          multiline
          fullWidth 
        
          minRows={4}
      
          onChange={(e) => {setQuery(e.target.value)
            setIsTyping(true)
            if(!isShowGradient){setIsShowGradient(true)}
          }

          }
        />

        <Stack component={"div"} sx={{textAlign:"left",width:"100%"}}> <Typography sx={{fontSize:"14px"}} variant="subtitle1">{isTyping?<Stack variant="span" sx={{display:"flex",alignItems:"center", flexDirection:"row",gap:1}}><CircularProgress size="14px" color="success" /> Gemini is thinking...</Stack>: isSubmitting?<Stack variant="span" sx={{display:"flex",alignItems:"center", flexDirection:"row",gap:1}}><CircularProgress size="14px" color="secondary" /> Gemini is Typing...</Stack>:""}</Typography></Stack>
           </Box>
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

        
      {responses?.length>0 && <ResponseContainer responses={responses}/>}

        
      </Container>
    </Box>
  );
};

export default AskHelp;
