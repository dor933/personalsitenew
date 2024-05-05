import React, { useEffect,useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMediaQuery,useTheme } from "@mui/material";
import dor_new_about from '../assets/images/dor_new_about.png';



const About = () => {

  const theme = useTheme();
  const islg = useMediaQuery(theme.breakpoints.up('lg'));
  const issm= useMediaQuery(theme.breakpoints.up('sm'));
//check if smaller than sm
  const isxs= useMediaQuery(theme.breakpoints.down('sm'));
  const ismd= useMediaQuery(theme.breakpoints.up('md'));

    return (
  <>
 
        <Grid id="about" container style={{flexDirection:'row',alignItems:'center',
       display:'flex',
       paddingTop:"40.333px",
         paddingBottom:"85.333px",
         justifyContent:'flex-start',
         paddingLeft:'50px',
          paddingRight:'50px',
         
        

            background: 'var(--BG-Shade, #F5FCFF)',


    }}>

        <Grid item xs={12} lg={6} style={{
          display:'flex',
          justifyContent:'flex-start',
          alignItems:'flex-start',
          paddingRight: islg?'100px': '30px',
          marginBottom:issm? '0px' : isxs? '50px': '0px',
          
        }}>

<Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
                gap:'5px',
            }}>

          <div
                style={{fontFamily:'Assistant',fontSize:'21.333px',fontWeight:600, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}>
                  אודות


                </div>
        

          <div
                style={{fontFamily:'Assistant',fontSize:ismd?'62.333px':'40px',fontWeight:700,marginBottom:'10px', color:'#282938',lineHeight:"120%", fontStyle:'normal',letterSpacing:'0.15px'}}>
                  קצת עליי.


                </div>
          
                 {
                  !islg &&
                  

<img src={dor_new_about} alt="dor" style={{width: isxs?'100%': issm? "100%" : "80%" ,height:isxs?'100%': issm? "80%" : "80%",objectFit:'cover',marginRight:'-20px'}}/>

                  

                 }

                <div
                style={{fontFamily:'Assistant',fontSize:isxs? '20px':'23.333px',fontWeight:400, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.35px',marginBottom:'10px',marginTop:'10px'}}>
                  אני דור, בן 30 מהישוב קדימה שבשרון. אני מאמין שבעידן החדש של הבינה המלאכותית, לכל בעל עסק מגיע פתרון מקיף וכולל במחיר {<span style={{color:'#5E3BEE',fontWeight:'700',fontSize:'29px'}}> שפוי. </span>} 


                </div>

                <div
                style={{fontFamily:'Assistant',fontSize:isxs? '20px':'23.333px',fontWeight:400, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.35px', 

                }}>
אני מציע חבילת "הכל כלול" שכוללת בניית אתר,קידומו, קישורו לחשבונות ברשתות החברתיות ותחזוקן, ועוד דברים שלא חלמתם שיכולים להיות לעסק שלכם.
כל זה, ב {<span style={{color:'#5E3BEE',fontWeight:'700',fontSize:'29px'}}> 1/6 </span>} מהמחיר הנמוך ביותר שתקבלו כיום בשוק על אותם השירותים.

                </div>
           




                </Grid>
        

        </Grid>

          {
            islg&&  <Grid item xs={12} lg={6} style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'flex-start',
            }}>
           
              
              <img src={dor_new_about} alt="dor" style={{width: isxs?'80%': issm? "80%" : "80%" ,height:isxs?'80%': issm? "80%" : "80%",objectFit:'cover'}}/>
    
              </Grid>
          }
       
       <div id="contry" style={{marginBottom:"-200px"}}>

        </div>


        </Grid>



</>

         

        
    
    );
    }

    export default About;