import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import useMediaQuery from '@mui/material/useMediaQuery';
import image from '../assets/images/imagewebs.webp'



const Righthome = () => {

    return (
        <Grid container item xs={6} style={{

            display: 'flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            flexShrink: 0,
            height:"100%",
            padding:'30px'

        }}>

            <img src={image} style={{width:'80%',height:'80%',objectFit:'cover', borderRadius:'10%',padding:"20px"}}/>

            </Grid>

    );
}

export default Righthome;