import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import prod_chain1 from '../assets/images/prod_chain1.png';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


const Product = ({name,image,description,description_small}) => {

    const theme= useTheme()

    const isntlg= useMediaQuery(theme.breakpoints.down('lg'))
    const isxl= useMediaQuery(theme.breakpoints.up('xl'))
    const ismd= useMediaQuery(theme.breakpoints.down('md'))
    const issm= useMediaQuery(theme.breakpoints.down('sm'))
//create variable of media query that will represent min 500 and max 900
    const specialsize= useMediaQuery('(min-width:500px) and (max-width:900px)')
    const supersmall= useMediaQuery('(max-width:400px)')
    return (

       

        <Grid className={isntlg?"shake": 'none'} xs={5} md={4} container style={{
            display:'flex',
            padding:'20px',
            alignItems:'flex-start',
            gap:'5px',
            height:isntlg? '240px': '410px',
            borderRadius:"10px",
            borderBottom:"4px solid #5E3BEE",
            backgroundColor:"#F5FCFF",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
            margin:'10px',
            cursor:'pointer',
            
            


            
            
            
            
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
                    paddingLeft:'20px',
                    paddingRight:'20px',
                    justifyContent:'center',
                    alignItems:'center',
                    gap:'14px',
                    borderRadius:'10px',
                    backgroundColor:"#FFF",
                    boxShadow:"0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
                    
                }}>

                    <img src={image} alt="symbol" style={{width:isxl?'50px':'30px',height:isxl?'50px':'30px',objectFit:'cover'}}/>


                </Grid>

                </Grid>

                <Grid xs={12} style={{ flexDirection:'column', justifyContent:'flex-start' ,alignItems:'flex-start', alignSelf:'stretch', gap:'21px', height:"100%",display:'flex'}} >

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:!isntlg?'32px':'18px', fontWeight:700, fontStyle:'normal',lineHeight:"150%"}}>

                    {name}
                    </div>

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:!isntlg?'16px': '14px', fontWeight:400, fontStyle:'normal',lineHeight:"150%"}}>

                        
                    {isntlg? description_small: description}

                    </div>
                    
                    

                  
                </Grid>
                


            </Grid>



      


    )
}

export default Product;