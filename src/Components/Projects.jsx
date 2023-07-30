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
import AuthContext from './Usecontexts/Maincontext';
import AdvancedCarousel from "./Carousle";

import image1keepr from '../assets/images/projects/socialkeeper/1.jpg';
import image2keepr from '../assets/images/projects/socialkeeper/2.jpg';
import image3keepr from '../assets/images/projects/socialkeeper/3.jpg';
import image4keepr from '../assets/images/projects/socialkeeper/4.jpg';
import image5keepr from '../assets/images/projects/socialkeeper/5.jpg';
import image6keepr from '../assets/images/projects/socialkeeper/6.jpg';
import image7keepr from '../assets/images/projects/socialkeeper/7.jpg';
import image8keepr from '../assets/images/projects/socialkeeper/8.jpg';
import image9keepr from '../assets/images/projects/socialkeeper/9.jpg';
import image10keepr from '../assets/images/projects/socialkeeper/10.jpg';

const myobj={
    images:[image1keepr,image2keepr,image3keepr,image4keepr,image5keepr,image6keepr,image7keepr,image8keepr,image9keepr,image10keepr],
    type:"projects"
}




//create new component

const Projects = () => {

    const ismobile = useMediaQuery('(max-width:1048px)');
    const issm= useMediaQuery('(max-width:600px)');
    const isnotbigscreen = useMediaQuery('(max-width:1700px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const {isprojectspage,setIsinprojectpage}= useContext(AuthContext);

    useEffect(() => {
        setIsinprojectpage(true);

        return () => {
            setIsinprojectpage(false);
        }

    }, [])

    const myprojects = [
        {
            projectimage:"https://storage.googleapis.com/responsive-cab-377615.appspot.com/Images/SocialKeeper.png",
            projectname:"Social Keeper",
            projectdescription:"Social Keeper is an app that automates meeting scheduling. It harmonizes personal hobbies, preferred times, and calendar events to devise the ideal meeting for two individuals. Additionally, it uses Google Places for suitable location suggestions, creating a hassle-free, personalized meet-up experience.",
            repositorylink:"https://github.com/dor933/socialkeeper2",
            images: [image1keepr,image2keepr,image3keepr,image4keepr,image5keepr,image6keepr,image7keepr,image8keepr,image9keepr,image10keepr]
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

<Grid container justify="center" style={{marginTop:!ismobile? "20px" : "0px",width:"100%"}}>


{myprojects.map((project,index) => (

    <Grid container justify="center" style={{marginTop:"20px",width:"100%"}}>

    <Grid item xs={12} xl={6}    >

<div style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: "100%", margin: "auto",
marginTop: isnotbigscreen? "20px": "50px"

}}>


    <Projcard project={project} />
    </div>
    </Grid>

    
    <Grid container  item xs={12} xl={6}   style={{display: "flex", justifyContent: "center", width: "100%", margin: "auto",
  borderRadius:'20px',  
  marginTop:  isnotbigscreen? "4px" : "40px",
  maxWidth:"800px",



}}>

    

        <Grid item xs={12} style={{textAlign:"center",paddingTop:"5px",paddingBottom:"20px",fontSize: ismobile?"12px": "20px",color:"#f02e1d",fontFamily:"Comfortaa",fontWeight:"bold",
        alignItems:"center",
        display:"flex",
        flexDirection:"column",
        
        
    
    }} >
        <span style={{textAlign:"center",paddingTop:"20px",paddingBottom:"20px",fontSize: ismobile?"23px": "28px",color:"#f02e1d",fontFamily:"Anton",fontWeight:"bold"}}>


        {project.projectname}'s Photo Gallery

        </span>
        <AdvancedCarousel obj={myobj} />
        

        </Grid>


        </Grid>

    </Grid>
   



))}


<Grid item xs={12} style={{textAlign:'center', height:"5%", flexDirection:'row',marginTop:"120px"}} >
         <div className='footer' >
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
                </Grid>

    </Grid>
 
    

    
     
    
        </>
    );
};

export default Projects;