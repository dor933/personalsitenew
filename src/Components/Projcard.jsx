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

    const projectimage = project.projectimage;
    const projectname = project.projectname;
    const projectdescription= project.projectdescription;
    const repositorylink = project.repositorylink;

    const bigscreen = useMediaQuery('(min-width:1700px)');
    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');

    return (
        <>
        <Card sx={{ width:ismobile? 300 : 400, marginBottom:5 }}>
                    <CardMedia
                    component="img"
                    sx={{ height: "200px",width:"100%"}}
                    image={projectimage}
                    alt="socialkeeper"
                    />
                    <CardContent style={{backgroundColor:"#3a3d3b",paddingBottom:0}}>

                  <Typography gutterBottom variant="h5" component="div" style={{ color:"#3a3d3b"}}>
                    <span className="Homesecondtext" style={{fontSize: !smallmobile? "24px" : "17px", color:'#f02e1d',fontWeight:'bold'}} >
                {projectname}
                </span>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ color:"#ffffff",paddingTop:"1.3%"}}>
                    <span className="Homesecondtext" style={{fontSize: !bigscreen? "12px": "18px", color:'#ffffff'}} >
                    {projectdescription}
                    </span>
                    </Typography>

                    <CardActions style={{paddingTop:7}} >
                        <Button size="small" style={{ fontSize: !smallmobile? "18px" : "12px",fontFamily:'Montserrat',fontWeight:'bold'}} href={repositorylink} target="_blank">Repository</Button>
                        
                    </CardActions>
                    

                    </CardContent>
                    
              
                </Card>
        </>
    )
}

export default Projcard