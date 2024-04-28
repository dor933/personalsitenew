import React, { useEffect,useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useMediaQuery,useTheme } from "@mui/material";
import dor_new_about from '../assets/images/dor_new_about.png';

const About = () => {


    return (
  
 
        <Grid id="about" container style={{flexDirection:'row',alignItems:'center',
       display:'flex',
       paddingTop:"40.333px",
         paddingBottom:"85.333px",
         justifyContent:'flex-start',
         paddingLeft:'50px',
          paddingRight:'50px',
         
        

            background: 'var(--BG-Shade, #F5FCFF)',


    }}>

        <Grid item xs={6} style={{
          display:'flex',
          justifyContent:'flex-start',
          alignItems:'flex-start',
          height:'450px',
          paddingRight:'100px',
          
        }}>

<Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
            }}>

          <div
                style={{fontFamily:'Assistant',fontSize:'21.333px',fontWeight:600, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}>
                  אודות


                </div>
        

          <div
                style={{fontFamily:'Assistant',fontSize:'62.333px',fontWeight:700,marginBottom:'10px', color:'#282938',lineHeight:"120%", fontStyle:'normal',letterSpacing:'0.15px'}}>
                  קצת עליי.


                </div>
                <div
                style={{fontFamily:'Assistant',fontSize:'23.333px',fontWeight:400, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px',marginBottom:'10px'}}>
                  אני דור, בן 30 מהישוב קדימה שבשרון. אני מאמין שבעידן החדש של הבינה המלאכותית, לכל בעל עסק מגיע פתרון מקיף וכולל במחיר {<span style={{color:'#5E3BEE',fontWeight:'700',fontSize:'29px'}}> שפוי. </span>}. 


                </div>

                <div
                style={{fontFamily:'Assistant',fontSize:'23.333px',fontWeight:400, color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px', 

                }}>
אני מציע חבילת "הכל כלול" שכוללת בניית אתר,קידומו, קישורו לחשבונות ברשתות החברתיות ותחזוקן, ועוד דברים שלא חלמתם שיכולים להיות לעסק שלכם.
כל זה, ב {<span style={{color:'#5E3BEE',fontWeight:'700',fontSize:'29px'}}> 1/6 </span>} מהמחיר הנמוך ביותר שתקבלו כיום בשוק על אותם השירותים.

                </div>
           




                </Grid>
        

        </Grid>

        <Grid item xs={6} style={{
          display:'flex',
          justifyContent:'center',
          alignItems:'flex-start',
        }}>
       
          
          <img src={dor_new_about} alt="dor" style={{width:'80%',height:'80%',objectFit:'cover'}}/>

          </Grid>



        </Grid>

         

        
    
    );
    }

    export default About;