import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';



//create new component


const Home = () => {

    const bigscreen = useMediaQuery('(max-width:1700px)');
    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');


    const download = () => {
        const link= document.createElement('a');
        link.href="https://storage.googleapis.com/staging.responsive-cab-377615.appspot.com/Resume/CV%20Dor%20ratzabi.docx";
        link.download="CV Dor Ratzabi";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [isLoaded3, setIsLoaded3] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        setTimeout(() => {
            setIsLoaded2(true);
        }
        , 1400);
        setTimeout(() => {
            setIsLoaded3(true);
        }
        , 2000);
    }, []);



    return (
        <>
        <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',height:"100vh",marginTop:"5%"}}>

            <Grid item xs={5} style={{textAlign:'center', height:"100%"}} >
                <h2 className={`Homesecondtext ${isLoaded? 'fadeIn' : 'hidden'}`} style={{textAlign:'left',paddingLeft:bigscreen? "15%": "20%",
            fontSize:bigscreen? "15px":"20px"
            }}>
                    Hello Friends! 👋
                </h2>
                
                <br/>
                <div className={isLoaded2? 'fadeIn' : 'hidden'} style={{paddingLeft:"10px"}}>

                <span className="Hometext" style={{fontSize:bigscreen? "40px" : "100px"}}>

                   I'm  

                </span>
                
                <span className="Hometext" style={{color:'#f02e1d', marginLeft:bigscreen? "10px" :"26px", fontSize:bigscreen? "40px" : "100px"}}>
                    Dor Ratzabi.
                </span>
                <br/>

                <span className="Hometext" style={{marginLeft:"2%",fontSize:bigscreen? "30px" : "100px"}}>
                      Information systems Specialist and Applications Developer.
                    
                </span>
                <br/>
                <br/>



                <Button variant="contained" onClick={download} style={{width:bigscreen? "140px" : "220px", height:bigscreen? "45px": "60px", padding:"0px"}}    >
                
                    <span className="button" style={{fontSize:bigscreen? "10px" : "14px", padding:"0px"}}  >

                    Download CV
                    </span>

                    <IconButton aria-label="download"  style={{color:"#ffffff", paddingLeft:"10px"}}>
                        <CloudDownloadIcon style={{width:bigscreen?"15px" : "30px"}} />
                    </IconButton>
                    
                </Button>
                </div>

          

            </Grid>
            <Grid item xs={2} style={{ height:"60%"}}  >
                <div style={{height:"100%",width: "0.3px",backgroundColor:"#ffffff",marginLeft:"55%", marginTop:"5%"}}></div>
                
            </Grid>

            <Grid item xs={5} style={{textAlign:'center'}} className={isLoaded3? 'fadeIn' : 'hidden'}>
            <h1 className="Hometext" style={{color:'#f02e1d',fontSize:bigscreen? "25px" : "100px"}}>

               Achivements.
                   </h1>
                   <ul className="Homesecondtext" style={{textAlign:'left',fontSize:bigscreen? "15px" : "20px",paddingLeft:"0px"}}>
                          <li>  
                            <span style={{color:'#f02e1d'}}> 2023 </span> - Bachelor of Information Systems, Ruppin Academic Center- Avarage grade of 94.
                            </li>
                            <br/>

                     

                        
                            <li>
                             Dean's list in each year.
                            </li>
                            <br/>

                            <li>
                            In progress: Master’s in Information Systems, Infrastructure and Cybersecurity focus in Bar Ilan University
Expected Completion: July 2025
                            </li>

                            <br/>
                            <li>
                            Main developer of Social Keeper- algorithm based meetings app, press <a href="https://github.com/dor933/socialkeeper2">here</a> to see the repository.

                         
                            </li>

                            </ul>

                         </Grid>

        </Grid>
     
        </>
    );
    };


export default Home;

