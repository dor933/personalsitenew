import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMediaQuery,useTheme } from "@mui/material";
import dorimage from '../assets/images/mydor.jpg';
import { useSnapCarousel } from 'react-snap-carousel';
import AdvancedCarousel from "./Carousle";

const About = () => {

    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:555px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const theme = useTheme();
    const issmallscreen= useMediaQuery(theme.breakpoints.down('md'));
    const isbigscreen= useMediaQuery(theme.breakpoints.up('lg'));


    return (
        <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:"20px", height:"100%",
        marginBottom:smallmobile? "30px": "0px", padding:"20px"
  //make overflow y

    }}>

    
        <Box style={{height:"95%",marginTop:"15px", width:"100%"}}   >




    <Grid container className="Homesecondtext" style={{marginTop:"20px",lineHeight:1.5,color:"#d45959"}} >


    <Grid 
  item 
  sx={{display: {
      xs: 'none', 
      md: 'flex' }, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:"50px",
    flexDirection:'column',
     }}   xs={4}>
           <img src= {dorimage} alt="dorimage" style={{width: "auto", height: issmallscreen? "300px" : "500px", borderRadius:"10%",
    
    
    imageRendering:"auto",
    //make the image look like a painting
    filter:"grayscale(100%)",
    filter:"contrast(150%)",
    filter:"brightness(80%)",
    filter:"saturate(150%)",
    filter:"hue-rotate(10deg)",
    filter:"blur(0.8px)",
    filter:"invert(10%)",
    filter:"drop-shadow(16px 16px 30px #a1b2ff)",
    
    }} />


    </Grid>

    <Grid item xs={12} md={8} style={{ textAlign:"center",paddingLeft: issmallscreen? "20px": "120px", 

backgroundColor:issmallscreen? "rgba(0, 0, 0, 0.35)" : "transparent", borderRadius:"30px",padding:"40px",
fontSize:issmallscreen? "15px" : "20px",lineHeight:2
}}>
    <Grid item xs={12} style={{textAlign: 'center',paddingBottom:"20px"}} >

<span className="Hometext" style={{fontSize: issmallscreen? "30px" : "60px", color:'#f02e1d'}} >

  So, 
   </span>    
   <span className="Hometext" style={{fontSize: issmallscreen? "30px" : "60px" , marginLeft: "1%" }} >

  Who I am?
   </span> 
     <br/>
     </Grid>
     
<Grid item xs={12} style={{flexDirection:'row'}} >
                Aged 29, originating from the town of Tel Mond, Israel.
                </Grid>
                <Grid item xs={12} style={{ flexDirection:'row',marginTop:"20px"}} >

                Bachelor's degree in Information Systems from Ruppin Academic Center.
                </Grid>
                <Grid item xs={12} style={{ flexDirection:'row',marginTop:"20px"}} >

             Node.js, C#, C++, Javascript, and Typescript, Microsoft Excel.
                </Grid>
                <Grid item xs={12} style={{ flexDirection:'row',marginTop:"20px"}} >

                 React, React Native

                Networking and Cyber Security.
                </Grid>



    </Grid>
    </Grid>
    



        <Grid container style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-start',marginTop: "80px", 
        paddingTop:"30px",display:'flex'
        }}>

<Grid item xs={4}>
    {/* Photo Gallery */}
    <span className="Homesecondtext" style={{fontSize: ismobile? "25px" : "50px", color:'#f02e1d'}} >
      Photo 
    </span>
    <span className="Homesecondtext" style={{fontSize: ismobile? "25px" : "50px", color:'#ffffff',
      marginLeft: issmallscreen? "5px" : "1.6%"}} >
      Gallery.
    </span>
  </Grid>


        </Grid>

        <Grid item xs={12} md={4} style={{textAlign:'center', flexDirection:'row',marginTop:'10px',paddingLeft:issmallscreen? "0px" :"30px",
    paddingTop:issmallscreen? "0px":"10px"}} >
            <AdvancedCarousel/>
            </Grid>
            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:'100px'}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
   
            </Box>


         


        </Grid>
        
    
    );
    }

    export default About;