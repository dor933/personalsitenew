import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const Projcard = ({image,description,Zindex,rotate}) => {

    const theme = useTheme();
    const ismd = useMediaQuery(theme.breakpoints.up('md'));


     const [transition]=useState('transform 2s');
       const [transform,setTransform]=useState(`0`);
     
       const handleScroll= ()=> {

        if(window.scrollY>290){
            setTransform(`rotate(${rotate}deg)`);

        }
        else{
            setTransform(`rotate(0deg)`);
        }

       }
     

    useEffect(() => {

        
        if(ismd){

        window.addEventListener('scroll',handleScroll)
        }
        else{
            setTransform(`rotate(${rotate}deg)`);

        }


    }, [])

  

 

 
   

    

    return (
        <>
         <Grid container item xs={2} style={{

display: 'flex',
flexDirection: 'column',
justifyContent: 'flex-start',
alignItems:'center',
position:'relative',
marginRight:'-10px',
zIndex:Zindex,
//rotate the image
paddingTop:-rotate,
transition: transition,
transform: transform,





   }}>
<Box item xs={12} style={{
display:'flex',
flexDirection:'column',
justifyContent:'flex-start',
alignItems:'flex-start',


 }}>
<img src={image} alt={description} style={{width:'100%',height:'100%',objectFit:'cover',
borderRadius:'10px',
boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',




}}/>

</Box>


</Grid>
        
      
        </>
    )
}

export default Projcard