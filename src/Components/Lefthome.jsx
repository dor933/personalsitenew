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
            height:"80%",
            paddingLeft:'100px'

        }}>

            <Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
            }}>

                <div
                style={{fontFamily:'Roboto',fontSize:'21.333px',fontWeight:600,marginBottom:'20px', color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}
                
                >

                    Hey, I'm Dor
                    
                </div>


            </Grid>

            </Grid>

    );
}

export default Lefthome;