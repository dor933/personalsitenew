import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



const Product = ({name,image,description}) => {


    return (

        <Grid xs={3} style={{
            display:'flex',
            padding:'32px',
            flexDirection:'column',
            alignItems:'flex-start',
            gap:'32px',
            flex:"1 1 0",
            borderRadius:"10px",
            borderBottom:"4px solid #5E3BEE",
            backgroundColor:"#F5FCFF",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}>

            <div style={{

                display:'flex',
                alignItems:'flex-start',
                flexDirection:'column',
                gap:'32px',
                alignSelf:'stretch',
            }}

            >

                
            </div>


        </Grid>
      


    )
}

export default Product;