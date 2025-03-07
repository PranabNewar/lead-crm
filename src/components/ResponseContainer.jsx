import { Box, Stack,  Typography } from "@mui/material";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
const ResponseContainer =({responses})=>{
    return(
        <Box variant="div" sx={{mt:4}}>
        <Typography variant="h5" sx={{fontWeight:'500'}}>
            Responses
        </Typography>
        <Box
              sx={{
             border:"1px solid #e8e8e8",
                padding: 2,
                mt: 2,
                borderRadius:"8px",
                display:"flex",
                flexDirection:"column",
                overflowY:"auto",
                maxHeight:"60vh",
                gap:2
                
              }}
            >
                
              {responses?.map((res)=>(
  
                <Stack variant="div" sx={{display:"flex", flexDirection:"row",p:2 ,borderRadius:"8px",alignItems:"center",gap:1,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 6px 0px"
                }}>
                  <Box variant="div" minWidth="40px" sx={{ backgroundColor:"#e9e9e9",height:"40px",width:"40px" ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%"}}>
  
                  <SmartToyOutlinedIcon/>
                  </Box>
                  <Typography variant="subtitle1">
                  {res?.response}
                    </Typography>
                </Stack>
              ))}
              
            </Box>
        </Box>
            
          
    )
}
export default ResponseContainer; 