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

    const islg= useMediaQuery(theme.breakpoints.up('lg'))

    return (

       

        <Grid xs={12} sm={6} md={5} container style={{
            display:'flex',
            padding:'20px',
            alignItems:'flex-start',
            gap:'10px',
            height:!islg? 'auto':'440px',
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

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:'32px', fontWeight:700, fontStyle:'normal',lineHeight:"150%"}}>

                    {name}
                    </div>

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:'18px', fontWeight:400, fontStyle:'normal',lineHeight:"150%"}}>

                        
                    {description}

                    </div>
                    
                    

                  
                </Grid>
                


            </Grid>



      


    )
}

export default Product;