import React, { useEffect,useState } from "react";
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
import Slide from '@mui/material/Slide';


import DR from '../assets/images/DR.png';
import Container from "@mui/material";

const About = () => {

    const ismobile = useMediaQuery('(max-width:900px)');
    const max960 = useMediaQuery('(max-width:960px)');
    const smallmobile = useMediaQuery('(max-width:555px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const theme = useTheme();
    const issmallscreen= useMediaQuery(theme.breakpoints.down('md'));
    const [element1, setelement1] = useState(false);
    const [element2, setelement2] = useState(false);


    const myobj={
      images:[image1,image2,image3,image4],
      type:"personal"
    }

    useEffect(() => {
        setelement1(true);
        setelement2(true);

        return () => {
            setelement1(false);
            setelement2(false);
        }

    }, [])


    return (
  
      <>

<Box  style={{width:"95%",height:"100%",flexDirection:'row',marginTop:"50px",

marginLeft:"auto",marginRight:"auto"
}}>





    <Grid container className="Homesecondtext" style={{marginTop:"20px",lineHeight:1.5,color:"#d45959",marginTop:"40px",
    justifyContent:'space-around',
    
  

  }} >

<Slide direction="right" in={element1} mountOnEnter unmountOnExit>
    <Grid 
  item 
  sx={{display: {
      xs: 'flex', 
      md: 'flex' }, 
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:"20px",
    paddingLeft: ismobile? "40px": "90px",
    flexDirection:'column',
     }}   xs={4}>
           <img src= {image4} alt="dorimage" style={{width: "auto", height: ismobile? "200px" : "500px", borderRadius:"10%",
    
    
    imageRendering:"auto",
    //make the image look like a painting
    filter:"grayscale(100%)",
    filter:"saturate(150%)",
    filter:"hue-rotate(10deg)",
    filter:"blur(0.8px)",
    filter:"invert(10%)",
    filter:"drop-shadow(16px 16px 30px #a1b2ff)",
    zIndex:1,
    

    
    
    }} />


    </Grid>
    </Slide>

    {
      ismobile &&

      <Slide direction="right" in={element1} mountOnEnter unmountOnExit>
      
    <Grid item xs={4} display={{xs:'block', sm:'none'}} style={{flexDirection:'row',display:'flex', justifyContent:'flex-start',
  
    alignItems:'center',paddingLeft:"0px",
    }}>
  
      <img src={DR} alt="dorimage" style={{width: "auto", height: ismobile? "150px" : "500px", borderRadius:"10%"
    
     //make the image look like a painting
      ,filter:"grayscale(100%)",
      filter:"contrast(200%)",
      filter:"hue-rotate(10deg)",
      filter:"invert(10%)",
      filter:"drop-shadow(16px 16px 30px #a1b2ff)",
      display: ismobile? "block" : "none",
      zIndex:2,

      
      

      
  
  
  
      
  
    }}/>
  
      </Grid>
      </Slide>
    }


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

                Bachelor of Information Systems from Ruppin Academic Center.
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

            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:issmallscreen? "120px": '130px'}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
        
            </Box>

          
   


         
            </>

        
    
    );
    }

    export default About;