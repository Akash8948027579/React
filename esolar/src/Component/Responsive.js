import { Box, Typography } from '@mui/material'
import React from 'react'
import img from './Asset/solar-panel-close.png'
const Responsive = () => {
  return (
    <Box >
    <Box sx={{width:'100%', height:'100%', position:'fixed', mt:'-100px'}}>
    <img src={img} width={'100%'} height={'100%'} alt=''/>
    </Box>
        {/* <Box sx={{width:'30%', height:'70%', backgroundColor:'yellow', marginLeft:'10px', mt:'80px', paddingTop:'0px', position:'relative'}}>
        <Typography>A quotation is the repetition of a sentence, phrase, or passage from speech or text that someone has said or written. In oral speech, it is the representation of an utterance that is introduced by a quotative marker, such as a verb of saying. For example: John said: "I saw Mary today".</Typography>
        </Box> */}

<Box >
        <Box sx={{width:'400px', height:'500px', border:'1px solid red',position:'relative', mt:'100px'}}>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        <Box sx={{width:'80%',height:'10%', border:'1px solid green', margin:'30px'}}></Box>
        </Box>
        </Box>

        </Box>
        
    
  )
}

export default Responsive
