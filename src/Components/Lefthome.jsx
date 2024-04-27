//create component

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';



//import Text




const Lefthome = () => {

    return (
        <Grid container item xs={6} style={{

            display: 'flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            flexShrink: 0,
            paddingRight:'100px'

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

                    <span style={{fontFamily:'Assistant', fontSize:'55.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

                     אני דור. אני מאמין 


                    </span>
                    <span style={{fontFamily:'Assistant', fontSize:'55.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%',color:'#5E3BEE',paddingLeft:'20px', paddingRight:'20px'}}>

                        שפלטפורמה דיגיטלית
                        </span>
                        <span style={{fontFamily:'Assistant', fontSize:'55.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

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
              
              <Button variant="contained" style={{backgroundColor:'#5E3BEE',color:'white',padding:'15px 30px',borderRadius:'10px',fontSize:'17.333px',fontWeight:600,fontFamily:'Assistant',lineHeight:'150%',letterSpacing:'0.15px'}}>
                צור/י קשר ונצא לדרך.
                </Button>
                </Grid>

            </Grid>

    );
}

export default Lefthome;