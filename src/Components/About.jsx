import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useMediaQuery } from "@mui/material";


const About = () => {

    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:555px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');

    return (
        <>
                <Grid item xs={12} style={{textAlign:'center', height:"15%", flexDirection:'row',marginTop:"3%"}} >

<span className="Hometext" style={{fontSize: ismobile? "50px" : "100px", color:'#f02e1d'}} >

  About 
   </span>    
   <span className="Hometext" style={{fontSize: ismobile? "50px" : "100px" , marginLeft: ismobile? "3%" : "1.5%"}} >

  Me. 
   </span> 
     <br/>
     </Grid>
       <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',height:"100vh",marginTop: ismobile? "3%": "1%"}}>  
       <Grid  item xs={5} style={{textAlign:'center',height:"100%",marginTop:ismobile? "17%" : "0%"}} >

                
       <img src="https://storage.googleapis.com/responsive-cab-377615.appspot.com/Images/Profiles/0544474788" style={{ borderRadius:"50%",
    
    //make the image responsive and fit the screen
     maxWidth:"100%",
     maxHeight:"30%",
     objectFit:"cover",
     //make it sharp
        imageRendering:"auto",
        imageRendering:"-moz-crisp-edges",
        imageRendering:"pixelated", 
        //make it in the center
        

     
     //make the image with blur effect
 
     }}/>
       

        </Grid>    
        <Grid item xs={1} style={{ height:"80%"}}  >
                <div style={{height:"50%",width:"1px",backgroundColor:"#ffffff",marginLeft:"53%", marginTop:"5%"}}></div>
                
            </Grid>
        <Grid item xs={5} style={{textAlign:'center', height:"25%", width:"100%"}} >


<div className="Homesecondtext" style={{textAlign:'left',fontSize:ismobile && !smallmobile? "22px" : smallmobile && !verysmallmobile? "17px": verysmallmobile? "12px": "24px" ,

color:"#d45959"
}}>
            <ul>
                <li>
                Aged 29, originating from the town of Tel Mond, Israel.
                </li>
                <br/>
                <li>
                Bachelor's degree in Information Systems from Ruppin Academic Center.
                </li>
                <br/>

                <li>
             Node.js, C#, C++, Javascript, and Typescript, Microsoft Excel.

                </li>
                <br/>
                <li>
                 React, React Native
                </li>
                <br/>

                <li>
                Networking and Cyber Security.
                </li>

                <br/>


            </ul>




</div>
            </Grid>


           </Grid>
    </>
    );
    }

    export default About;