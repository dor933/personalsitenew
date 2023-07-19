import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import Projcard from "./Projcard";


//create new component

const Projects = () => {

    const ismobile = useMediaQuery('(max-width:1048px)');
    const issm= useMediaQuery('(max-width:600px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');

    const myprojects = [
        {
            projectimage:"https://storage.googleapis.com/responsive-cab-377615.appspot.com/Images/SocialKeeper.png",
            projectname:"Social Keeper",
            projectdescription:"Social Keeper is an app that automates meeting scheduling. It harmonizes personal hobbies, preferred times, and calendar events to devise the ideal meeting for two individuals. Additionally, it uses Google Places for suitable location suggestions, creating a hassle-free, personalized meet-up experience.",
            repositorylink:"https://github.com/dor933/socialkeeper2"
        },
   
       

    ]

    return (
        <>
             <Grid item xs={12} style={{textAlign:'center', height:"10%", flexDirection:'row',marginTop:"50px"}} >

<span className="Hometext" style={{fontSize: ismobile? "50px" : "80px", color:'#f02e1d'}} >

  My 
   </span>    
   <span className="Hometext" style={{fontSize: ismobile? "50px" : "80px" , marginLeft: ismobile? "14px" : "20px"}} >

  Projects.
   </span> 
     <br/>
     </Grid>

<Grid container justify="center" style={{marginTop:"20px",width:"100%",height:"100%"}}>


{myprojects.map((project,index) => (

    <Grid item xs={12} sm={12}   >

<div style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: "100%", margin: "auto"}}>


    <Projcard project={project} />
    </div>
    </Grid>

))}

    
    </Grid>
    <Grid item xs={12} style={{textAlign:'center', height:"10%", flexDirection:'row',marginTop:"0px"}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/abhishek-kumar-2a1b3a1b0/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
    

    
     
    
        </>
    );
};

export default Projects;