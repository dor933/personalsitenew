import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import prod_chain1 from '../assets/images/prod_chain1.png';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const Product = ({name,image,description}) => {

    const theme= useTheme()

    const islg= useMediaQuery(theme.breakpoints.down('lg'))
    const isxl= useMediaQuery(theme.breakpoints.up('xl'))
    const ismd= useMediaQuery(theme.breakpoints.down('md'))
    const issm= useMediaQuery(theme.breakpoints.down('sm'))
//create variable of media query that will represent min 500 and max 900
    const specialsize= useMediaQuery('(min-width:500px) and (max-width:900px)')
    const supersmall= useMediaQuery('(max-width:400px)')
    return (

       

        <Grid xs={12} md={5} container style={{
            display:'flex',
            padding:'20px',
            alignItems:'flex-start',
            gap:'10px',
            height:specialsize? '350px': supersmall? '490px': '440px',
            borderRadius:"10px",
            borderBottom:"4px solid #5E3BEE",
            backgroundColor:"#F5FCFF",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
            margin:'10px',
            
            
            
        }}>

            <Grid xs={12} container style={{

                display:'flex',
                alignItems:'flex-start',
                flexDirection:'row',
                gap:'22px',
                
            }}

            >

                <Grid xs={3} style={{
                    display:'flex',
                    padding:'10px',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'14px',
                    borderRadius:'10px',
                    backgroundColor:"#FFF",
                    boxShadow:"0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
                    
                }}>

                    <img src={image} alt="symbol" style={{width:'50px',height:'50px',objectFit:'cover'}}/>


                </Grid>

                </Grid>

                <Grid xs={12} style={{ flexDirection:'column', justifyContent:'flex-start' ,alignItems:'flex-start', alignSelf:'stretch', gap:'21px', height:"100%",display:'flex'}} >

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:isxl?'32px':'25px', fontWeight:700, fontStyle:'normal',lineHeight:"150%"}}>

                    {name}
                    </div>

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:isxl?'18px': islg? '18px': '16px', fontWeight:400, fontStyle:'normal',lineHeight:"150%"}}>

                        
                    {description}

                    </div>
                    
                    

                  
                </Grid>
                


            </Grid>



      


    )
}

export default Product;