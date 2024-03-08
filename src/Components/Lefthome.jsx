//create component

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import useMediaQuery from '@mui/material/useMediaQuery';


//import Text




const Lefthome = () => {

    return (
        <Grid container item xs={6} style={{

            display: 'flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            flexShrink: 0,
            paddingLeft:'100px'

        }}>

            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
                gap:'32px',
            }}>

                <div
                style={{fontFamily:'Roboto',fontSize:'21.333px',fontWeight:600,marginBottom:'20px', color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}
                
                >

                    Hey, I'm Dor
                    
                </div>
                <div style={{alignSelf:'stretch'}} >

                    <span style={{fontFamily:'Roboto', fontSize:'74.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

                    I'm a 


                    </span>
                    <span style={{fontFamily:'Roboto', fontSize:'74.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%',color:'#5E3BEE',paddingLeft:'20px', paddingRight:'20px'}}>

                        Website Builder
                        </span>
                        <span style={{fontFamily:'Roboto', fontSize:'74.667px', fontStyle:'normal', fontWeight:700,lineHeight:'120%'}}>

                    and system engineer


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
              
              <Button variant="contained" style={{backgroundColor:'#5E3BEE',color:'white',padding:'15px 30px',borderRadius:'10px',fontSize:'21.333px',fontWeight:600,fontFamily:'Roboto',lineHeight:'150%',letterSpacing:'0.15px'}}>
                Get in touch
                </Button>
                </Grid>

            </Grid>

    );
}

export default Lefthome;