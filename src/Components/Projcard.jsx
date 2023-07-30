import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Projcard = ({project}) => {

    const [projectimage,setprojectimage] = useState(project.projectimage);
    const projectname = project.projectname;
    const projectdescription= project.projectdescription;
    const repositorylink = project.repositorylink;

    const nobigscreen = useMediaQuery('(max-width:1700px)');
    const ismobile = useMediaQuery('(max-width:600px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');

    //replace project image with the next one in the array 
    const changeimage = () => {
        const index = project.images.indexOf(projectimage);
        if(index === project.images.length-1){
            setprojectimage(project.images[0]);
        }
        else{
            setprojectimage(project.images[index+1]);
        }
    }






    
 





    return (
        <>
        <Card sx={{ width:ismobile? 300 : 400, marginBottom:5,marginLeft:ismobile? "5px":"10px" }}>
                    <CardMedia
                    component="img"
                    sx={{ height: ismobile? "250px" : "300px",width:"100%"}}
                    image={projectimage}
                    alt="socialkeeper"
                    />
                    <CardContent style={{backgroundColor:"#3a3d3b",paddingBottom:0}}>

                  <Typography gutterBottom variant="h5" component="div" style={{ color:"#3a3d3b",textAlign:'left'}}>
                    <span className="Homesecondtext" style={{fontSize: nobigscreen? "20px" : "25px", color:'#f02e1d',fontWeight:'bold',
                    paddingLeft:"5px"
                }} >
                {projectname}
                </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color:"#ffffff",paddingTop:"1.3%",marginTop:"8px"}}>
                    <span className="Homesecondtext" style={{fontSize: nobigscreen? "16px": "18px", color:'#ffffff'}} >
                    {projectdescription}
                    </span>
                    </Typography>

                    <CardActions style={{paddingTop:7}} >
                        <Button size="small" style={{ fontSize: nobigscreen? "14px" : "15px",fontFamily:'Montserrat',fontWeight:'bold'}} href={repositorylink} target="_blank">Repository</Button>
                        
                    </CardActions>
                    

                    </CardContent>
                    
              
                </Card>
        </>
    )
}

export default Projcard