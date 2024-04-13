import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import useMediaQuery from '@mui/material/useMediaQuery';
import dorimg from '../assets/images/dorimg.png';
import meetme from '../assets/images/meetme.mp4';


const Righthome = () => {

    return (
        <Grid container item xs={6} style={{

            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            flexShrink: 0,
            padding:'30px',
            

        }}>

         <video autoPlay loop muted style={{
                width:'100%',
                height:'100%',
                objectFit:'cover',
            }}>

                <source src={meetme} type="video/mp4" />

            </video>

             



            </Grid>

    );
}

export default Righthome;