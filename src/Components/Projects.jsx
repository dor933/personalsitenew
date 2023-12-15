import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useContext,useEffect } from 'react';
import { useState } from 'react';
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
    const isnotbigscreen = useMediaQuery('(max-width:1700px)');
    const {isprojectspage,setIsinprojectpage}= useContext(AuthContext);
    const [chosenproject, setchosenproject] = useState({});
    const [isloaded,setIsloaded] = useState(false);



    useEffect(() => {

        console.log(isloaded)
     

        setIsinprojectpage(true);

        return () => {
            setIsinprojectpage(false);
        }

    }, [])

    const myprojects = [
        {
            index:0,
            projectimage:"https://storage.googleapis.com/responsive-cab-377615.appspot.com/Images/SocialKeeper.png",
            projectname:"Social Keeper",
            projectdescription:"Social Keeper is an app that automates your meeting scheduling routine. It's considering the users personal hobbies, preferred times, and calendar events to find the ideal meeting for two individuals. Additionally, it uses Google Places for suitable location suggestions, when the goal is to create an optimal meet-up experience.",
            repositorylink:"https://github.com/dor933/socialkeeper2",
            images: [image1keepr,image2keepr,image3keepr,image4keepr,image5keepr,image6keepr,image7keepr,image8keepr,image9keepr,image10keepr],
            type:"projects"

        },

     
   
       

    ]

    return (
        <>
        <Box  style={{width:"100%",height:"100%",flexDirection:'row',marginTop:"70px"}}>

             <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:"30px", height:"10%"}} >

<span className="Hometext" style={{fontSize: isnotbigscreen? "50px" : "80px", color:'#f02e1d'}} >

  My 
   </span>    
   <span className="Hometext" style={{fontSize: isnotbigscreen? "50px" : "80px" , marginLeft: ismobile? "14px" : "20px"}} >

  Projects.
   </span> 
     <br/>
     </Grid>

<Grid container justify="center" style={{marginTop:!ismobile? "5px" : "5px",width:"100%", height:"90%"}}>


{myprojects.map((project,index) => (

    <Grid container justify="center" style={{marginTop:ismobile? "6px" : "10px",width:"100%"}}>

    <Grid item xs={12} xl={12}    >

<div style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: "100%", margin: "auto",
marginTop: isnotbigscreen? "20px": "50px"

}}>


    <Projcard setIsloaded={setIsloaded} project={project} chosenproject={chosenproject} setchosenproject={setchosenproject}  />
    </div>
    </Grid>



    </Grid>

    
   



))}

{
    chosenproject.index!==undefined &&

  
    
    <Grid container item xs={12} xl={6} className={`${ isloaded ? "fadeIn" : "hidden"}`}   style={{display: "flex", justifyContent: "center", width: "100%", margin: "auto",
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


        {chosenproject.projectname}'s Photo Gallery

        </span>
        
            <AdvancedCarousel obj={{images:chosenproject.images, type: chosenproject.type}} />

        
        

        </Grid>


        </Grid>
}


<Grid item xs={12} style={{textAlign:'center', flexDirection:'row', marginTop: chosenproject.index? "300px" : "250px"}} >
         <div className='footer' >
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
                </Grid>

    </Grid>
 
    

    
     </Box>
    
        </>
    );
};

export default Projects;