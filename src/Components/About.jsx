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
                <Grid item xs={12} style={{textAlign:'center', height:ismobile? "80px" : "140px", flexDirection:'row',marginTop:"40px"}} >

<span className="Hometext" style={{fontSize: ismobile? "50px" : "100px", color:'#f02e1d'}} >

  About 
   </span>    
   <span className="Hometext" style={{fontSize: ismobile? "50px" : "100px" , marginLeft: ismobile? "3%" : "1.5%"}} >

  Me. 
   </span> 
     <br/>
     </Grid>
       <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',marginTop:  "5%", height:"75%"}}>  
       <Grid  item xs={5} style={{textAlign:'center',marginTop:ismobile? "20px" : "0%"}} >

                
       <img src="https://storage.googleapis.com/responsive-cab-377615.appspot.com/Images/Profiles/0544474788" style={{ borderRadius:"50%",
    
    //make the image responsive and fit the screen
    width: ismobile? "140px" : "300px",
    height: ismobile? "140px" : "300px",
     objectFit:"cover",
     //make it sharp
        imageRendering:"auto",
        imageRendering:"-moz-crisp-edges",
        imageRendering:"pixelated", 
        //make it in the center
        

     
     //make the image with blur effect
 
     }}/>
       

        </Grid>    
        <Grid item xs={1} style={{ height:"100%"}}  >
                <div style={{height:"70%",width:"1px",backgroundColor:"#ffffff",marginLeft:"53%", marginTop:"5%"}}></div>
                
            </Grid>
        <Grid item xs={5} style={{textAlign:'center', width:"100%"}} >


<div className="Homesecondtext" style={{textAlign:'left',fontSize:ismobile && !smallmobile? "22px" : smallmobile && !verysmallmobile? "14px": verysmallmobile? "12px": "24px" ,

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

            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:"0px"}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>


           </Grid>
    
    </>
    );
    }

    export default About;