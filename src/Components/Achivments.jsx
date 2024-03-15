import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import useMediaQuery from '@mui/material/useMediaQuery';
import AuthContext from "./Usecontexts/Maincontext";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportIcon from '@mui/icons-material/Support';
import dora1 from '../assets/images/dora1.jpg';
import Product from "./Product";
import prod_chain1 from '../assets/images/prod_chain1.png';
import tag1 from '../assets/images/tag1.png';
import web_pen from '../assets/images/web_pen.png';
import feather_pen from '../assets/images/feather_pen.png';


export default function Achivments() {

    const firstskill={
        title:"Fast Delivery",
        description:"We deliver test test test test test test test test test",
        image:tag1
    }

    const secondskill={
        title:"Quality",
        description:"We deliver test test test test test test test test test",
        image:web_pen
    }

    const thirdskill={
        title:"Support",
        description:"We deliver test test test test test test test test test",
        image:feather_pen
    }

    const fourthskill={
        title:"Support",
        description:"We deliver test test test test test test test test test",
        image:prod_chain1
    }

    const skills=[firstskill,secondskill,thirdskill,fourthskill]



    return (
        <Grid container style={{

            display: 'flex',
            paddingTop:'150px',
            paddingBottom:'150px',
            paddingLeft:'83px',
            paddingRight:'83px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'flex-start',
            height:"50%"

        }}>

            <Grid container item xs={12} style={{

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'flex-start',
                gap:"21px",


            }}
            >

                <Grid item xs={12} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems:'center',
                    gap:"10px"
                }}>
                    <div style={{
                        textAlign:'center',
                        fontFamily:'Roboto',
                        fontWeight:600,
                        lineHeight:"150%",
                        color:"#282938"
                    }}>
                      This is what you going to get
                    </div>

                    </Grid>

                    <Grid item xs={12} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems:'center',
                        gap:"10px"
                    }}>

                
                <div style={{
                   

                    fontFamily:'Roboto',
                    fontWeight:700,
                    lineHeight:"120%",
                    color:"#282938",
                    fontSize: "64px",
                    fontStyle: "normal",
                }}>

                     My products
                </div>

                </Grid>

                <Grid container item xs={12} style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems:'center',
                gap:"30px",
                alignSelf:'stretch',
                flexDirection: 'row',

            }} >

                {

                    //write a for loop to display the products
                    //for now we are going to display the same product 3 times
                    skills.map((item) => {
                        return (
                            <Product name= {item.title} image= {item.image} description={item.description}/>
                        )
                    })
                }
            </Grid>
                    



            </Grid>


           

         

            </Grid>

    );

}

