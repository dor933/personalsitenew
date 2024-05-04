//create component

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


//import Text




const Lefthome = () => {

    const theme = useTheme();
    const ismobile = useMediaQuery('(max-width:600px)');


    const ismd = useMediaQuery(theme.breakpoints.up('md'));

    const handleclick= (value) => {
        const section= ['home','partners','package','about','contact'][value];
            const sectionelement = document.getElementById(`${section}`);
            if(sectionelement){
          console.log(sectionelement);
          sectionelement.scrollIntoView({behavior:'smooth',
        
        block:'start'})
            }
    }


    return (
        <Grid container item xs={12} lg={6} style={{

            display: 'flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            flexShrink: 0,
            paddingRight:ismd?'100px' : '50px'

        }}>

            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
                gap:'32px',
            }}>

                <div
                style={{fontFamily:'Assistant',fontSize:'21.333px',fontWeight:600,marginBottom:'10px', color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}
                
                >

                   הגיע הזמן להפסיק לשלם הון תועפות על פלטפורמה דיגיטלית
                    
                    
                </div>
                <div style={{alignSelf:'stretch'}} >

                    <span style={{fontFamily:'Assistant', fontSize: ismd?'55.667px' : '40px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

היי,אני דור. אני מאמין

                    </span>
                    <span style={{fontFamily:'Assistant', fontSize: ismd? '55.667px' : '40px', fontStyle:'normal', fontWeight:700,lineHeight:'120%',color:'#5E3BEE',paddingLeft:ismd?'20px':'10px', paddingRight:ismd?'20px':'10px'}}>

                        שפלטפורמה דיגיטלית
                        </span>
                        <span style={{fontFamily:'Assistant', fontSize:ismd?'55.667px' : '40px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

                     במחיר הוגן זו זכות בסיסית של כל בעל עסק.


                    </span>


                </div>
                


            </Grid>
            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
                paddingTop:'40px',
                paddingBottom:'40px',
            }}>
              <Button onClick={()=> { 
                            window.open("https://wa.me/972544474788")



              }} variant="contained" style={{backgroundColor:'#5E3BEE',color:'white',padding:'15px 30px',borderRadius:'10px',fontSize:'17.333px',fontWeight:600,fontFamily:'Assistant',lineHeight:'150%',letterSpacing:'0.15px'}}>
                צור/י קשר ונצא לדרך.
                </Button>
                </Grid>

            </Grid>

    );
}

export default Lefthome;