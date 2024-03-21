import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import Faceicon from '../assets/images/social_media/Facebook.png';
import Instagram from '../assets/images/social_media/Instagram.png';
import Twitter from '../assets/images/social_media/Twitter.png';
import LinkedIn from '../assets/images/social_media/LinkedIn.png';



const Footer = () => {

    return (
        <Grid container item xs={12} style={{

            display: 'inline-flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            height:"40%",
            paddingTop:"106.667px",
            paddingBottom:"106.667px",
            paddingLeft:"85.333px",
            paddingRight:"85.333px",

        }}>

            <Grid container item xs={12} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent:'space-between'
            }}>

                <Grid item xs={2} style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                }}>
                    test
                </Grid>

                <Grid container item xs={6} style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    flexDirection:'row',
                }}>

                    <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                           <span style={{
                            fontFamily:'Roboto',
                            fontSize:'16px',
                            fontWeight:400,
                            fontStyle:'normal',
                            lineHeight:"150%",
                        }}
                        >Home</span>
                        

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>

                        <span style={{
                            fontFamily:'Roboto',
                            fontSize:'16px',
                            fontWeight:400,
                            fontStyle:'normal',
                            lineHeight:"150%",
                        }}
                        >Portfolio</span>
                        

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                           <span style={{
                            fontFamily:'Roboto',
                            fontSize:'16px',
                            fontWeight:400,
                            fontStyle:'normal',
                            lineHeight:"150%",
                        }}
                        >About</span>

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                          <span style={{
                            fontFamily:'Roboto',
                            fontSize:'16px',
                            fontWeight:400,
                            fontStyle:'normal',
                            lineHeight:"150%",
                        }}
                        >Contact</span>

                        </Grid>
                    
                    
                    </Grid>

                    <Grid container item xs={4} style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'flex-start',
                }}>
                    <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                        
                        <img src={Faceicon}
                        style={{
                            width:"32px",
                            height:"32px",

                        }} />

                        </Grid>
                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                        
                        <img src={Instagram}
                        style={{
                            width:"32px",
                            height:"32px",

                        }} />

                        </Grid>
                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                        
                        <img src={Twitter}
                        style={{
                            width:"32px",
                            height:"32px",

                        }} />

                        </Grid>
                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                        
                        <img src={LinkedIn}
                        style={{
                            width:"32px",
                            height:"32px",

                        }} />

                        </Grid>



                    </Grid>
                

                </Grid>

            </Grid>

    );
}

export default Footer;