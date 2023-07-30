import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMediaQuery,useTheme } from "@mui/material";
import dorimage from '../assets/images/mydor.jpg';
import { useSnapCarousel } from 'react-snap-carousel';
import AdvancedCarousel from "./Carousle";
import image1 from '../assets/images/personalimages/1.jpg';
import image2 from '../assets/images/personalimages/2.jpg';
import image3 from '../assets/images/personalimages/3.jpg';
import image4 from '../assets/images/personalimages/4.jpg';

const About = () => {

    const ismobile = useMediaQuery('(max-width:920px)');
    const max960 = useMediaQuery('(max-width:960px)');
    const smallmobile = useMediaQuery('(max-width:555px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const theme = useTheme();
    const issmallscreen= useMediaQuery(theme.breakpoints.down('md'));

    const myobj={
      images:[image1,image2,image3,image4],
      type:"personal"
    }


    return (
  
      <>

    
        <Box style={{height:"100%",marginTop:"30px", width:"90%",flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:"5px", height:"100%",
        marginBottom:ismobile? "30px": "0px", padding:"20px"}}   >




    <Grid container className="Homesecondtext" style={{marginTop:"20px",lineHeight:1.5,color:"#d45959",marginTop:"40px"}} >


    <Grid 
  item 
  sx={{display: {
      xs: 'none', 
      md: 'flex' }, 
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:"90px",
    flexDirection:'column',
     }}   xs={4}>
           <img src= {image4} alt="dorimage" style={{width: "auto", height: ismobile? "300px" : "500px", borderRadius:"10%",
    
    
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

    <Grid item xs={12} md={8} style={{ textAlign:"center",

backgroundColor:issmallscreen? "rgba(0, 0, 0, 0.35)" : "transparent", borderRadius:"30px",padding:"40px",
paddingLeft:issmallscreen? "20px" :"200px",
    

fontSize:ismobile? "15px" : "20px",lineHeight:2
}}>
    <Grid item xs={12} style={{textAlign: 'center',paddingBottom:"20px"}} >

<span className="Hometext" style={{fontSize: issmallscreen? "30px" : "40px", color:'#f02e1d'}} >

  So, 
   </span>    
   <span className="Hometext" style={{fontSize: issmallscreen? "30px" : "40px" , marginLeft: "1%" }} >

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
    



        <Grid container style={{flexDirection:'row',marginTop: "40px", 
        paddingTop:"40px",
        }}>

<Grid item xs={4}>
    {/* Photo Gallery */}
    <span className="Homesecondtext" style={{fontSize: ismobile? "25px" : "50px", color:'#f02e1d'}} >
      Photo 
    </span>
    <span className="Homesecondtext" style={{fontSize: ismobile? "25px" : "50px", color:'#ffffff',
      marginLeft: issmallscreen? "8px" : "10px"}} >
      Gallery.
    </span>
  </Grid>


        </Grid>

        <Grid item xs={12} md={4} style={{textAlign:'center', flexDirection:'row',marginTop:'10px',paddingLeft:issmallscreen? "0px" :"30px",
    paddingTop:issmallscreen? "0px":"10px", marginBottom:"0px"}} >
            <AdvancedCarousel obj={myobj}/>
            </Grid>

            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:issmallscreen? "200px": '130px'}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
        
            </Box>

          
   


         
            </>

        
    
    );
    }

    export default About;