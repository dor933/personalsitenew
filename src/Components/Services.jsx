import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import website1 from '../assets/images/website1.png';
import website2 from '../assets/images/website2.png';
import Projcard from "./Projcard";
import social1 from '../assets/images/projects/socialkeeper/1.jpg';
import social2 from '../assets/images/projects/socialkeeper/2.jpg';
import social3 from '../assets/images/projects/socialkeeper/3.jpg';
import social4 from '../assets/images/projects/socialkeeper/4.jpg';
import social5 from '../assets/images/projects/socialkeeper/5.jpg';
import social6 from '../assets/images/projects/socialkeeper/6.jpg';
import { useState,useContext,useEffect} from 'react';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const Services = () => {

    const theme = useTheme();

    const ismd = useMediaQuery(theme.breakpoints.up('md'));

    const applicationsimages=[social1,social2,social3,social4,social5,social6];
    let Zindex= 0;
    let rotate=-80;

   


    return (

<Grid container style={{

    display: 'flex',
    paddingTop:'80px',
    paddingBottom:'50px',
    paddingLeft:'40px',
    paddingRight:'40px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'flex-start',
    gap:"80px",

}}>

    <Grid container item xs={12} lg={4} style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems:'center',
       
        gap:"21px",}}
    >

        <Box item xs={12} style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-end',
            alignItems:'flex-end',
            fontfamily:'Assistant',
        }}>
            <ul style={{
                listStyleType:'none',
                padding:0,
                margin:0,
                letterSpacing:'0.7px',
                fontFamily:'Assistant',fontWeight:600,fontSize:ismd?'24px':'18px',color:'#282938'
            }}>
                <li style={{paddingBottom:'10px'}}> <span style={{lineHeight:'150%'}}> חיבור ל- WhatsApp</span>
                <CheckSharpIcon style={{color:'#5E3BEE',fontSize:'20px',paddingRight:'20px'}}/>
                </li>
                <li style={{paddingBottom:'10px'}}> <span style={{lineHeight:'150%'}}>בניית אתר כולל פיצ'רי בינה מלאכותית </span>
                <CheckSharpIcon style={{color:'#5E3BEE',fontSize:'20px',paddingRight:'20px'}}/>

                </li>
                <li style={{paddingBottom:'10px'}}> <span style={{lineHeight:'150%'}}>קידום אורגני וממומן של העסק</span>
                <CheckSharpIcon style={{color:'#5E3BEE',fontSize:'20px',paddingRight:'20px'}}/>

                </li>
                <li> <span style={{lineHeight:'150%'}}>תחזוק חשבונות ברשתות החברתיות </span>
                <CheckSharpIcon style={{color:'#5E3BEE',fontSize:'20px',paddingRight:'20px'}}/>

                </li>
            </ul>
        </Box>



    </Grid>

    <Grid container item xs={12} lg={6} style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        position:'relative',
        gap:"80px",
    }}
    >

        <Grid container item xs={12} style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            position:'relative',
        }}>


        <Grid container item xs={6} style={{

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems:'center',
            position:'relative',
            
        }}>
               <Box item xs={12} style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'flex-start',
            
        }}>
          
           <img src={website2} alt="secondwebsiteimage" style={{width:'100%',height:'100%',objectFit:'cover',
        borderRadius:'10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',


        }}/>

        </Box>


        </Grid>

        <Grid container item xs={6} style={{

         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'flex-start',
        alignItems:'center',
        position:'relative',
        marginRight:'-50px',
        marginTop:'-50px',

            }}>
   <Box item xs={12} style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start',


          }}>
         <img src={website1} alt="firstwebsiteimage" style={{width:'100%',height:'100%',objectFit:'cover',
        borderRadius:'10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',


        }}/>

</Box>


</Grid>

</Grid>


<Grid container item xs={12} style={{
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            position:'relative',
            display:'flex'
        }}>

            {
                
                    
                applicationsimages.map((image,index)=>{
                    return <Projcard image={image} description={`social${index}`} Zindex={++Zindex} rotate={rotate+=20}/>
                })

            
            
            }


            </Grid>


        

        </Grid>

   

    </Grid>
    );
}

export default Services;