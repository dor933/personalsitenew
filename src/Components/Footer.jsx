import React from 'react';
import Grid from '@mui/material/Grid';
import Faceicon from '../assets/images/social_media/Facebook.png';
import Instagram from '../assets/images/social_media/Instagram.png';
import Twitter from '../assets/images/social_media/Twitter.png';
import LinkedIn from '../assets/images/social_media/LinkedIn.png';
import mylogo from '../assets/images/my_logo.png';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';



const Footer = () => {

    const theme = useTheme();
    const ismd = useMediaQuery(theme.breakpoints.up('md'));
    const isxs = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container item xs={12} style={{

            display: 'inline-flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            paddingTop:"30.667px",
            paddingBottom:"36.667px",
            paddingLeft: ismd? "85.333px" : '30px',
            paddingRight:ismd? "85.333px" : '30px', 
            background: 'var(--BG-Shade, #F5FCFF)',

            

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
                    alignItems:'flex-end',
                }}>
                    <img src={mylogo}
                    alt='mylogo'
                    style={{
                        width:ismd?"200px": '80px',
                        height:ismd? "200px" : '80px',

                    }} />
                </Grid>

                <Grid container item xs={6} style={{
                    display:'flex',
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    flexDirection:'row',
                    fontFamily:'Assistant',
                    fontSize:ismd? '16px' : '14px',
                    fontWeight:600,
                    fontStyle:'normal',
                    lineHeight:"150%",
                }}>

                    <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'center'
                    }}>
                           <span>בית</span>                   

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                    }}>

                        <span>שירותים</span>
                        

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:isxs? 'center':'flex-start'
                    }}>
                           <span>אודות</span>

                        </Grid>

                        <Grid item xs={3} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                    }}>
                          <span>צור קשר</span>

                        </Grid>
                    
                    
                    </Grid>

                    <Grid container item xs={4} style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'flex-end',
                    alignItems:'flex-start',
                    gap:'5px'
                }}>
                    <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        alignItems:'flex-end',
                    }}>
                        
                        <img src={Faceicon}
                        style={{
                            width: ismd? "32px" : "24px",
                            height:ismd? "32px" : "24px",

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
                            width: ismd? "32px" : "24px",
                            height:ismd? "32px" : "24px",

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
                            width: ismd? "32px" : "24px",
                            height:ismd? "32px" : "24px",

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
                            width: ismd? "32px" : "24px",
                            height:ismd? "32px" : "24px",

                        }} />

                        </Grid>



                    </Grid>
                

                </Grid>

            </Grid>

    );
}

export default Footer;