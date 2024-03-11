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


export default function Achivments() {

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
            height:"30%"

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
                    [1,2,3,4].map((item) => {
                        return (
                            <Product name="sads" image="bb" description="aaa"/>
                        )
                    })
                }
            </Grid>
                    



            </Grid>


           

         

            </Grid>

    );

}

