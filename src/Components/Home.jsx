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
import AuthContext from "./Usecontexts/Maincontext";
import CheckIcon from '@mui/icons-material/Check';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SupportIcon from '@mui/icons-material/Support';
import myimage from '../assets/images/dorpaint.jpg';
import myimage2 from '../assets/images/dortwo.jpg';
import MyForm from "./Form";



//create new component


const Home = () => {

    const bigscreen = useMediaQuery('(max-width:1700px)');
    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const {ishomepage,setIshomepage}= useContext(AuthContext);






    const download = () => {
        const link= document.createElement('a');
        link.href="https://storage.googleapis.com/staging.responsive-cab-377615.appspot.com/Resume/CVmostupdated.docx";
        link.download="CV Dor Ratzabi";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [isLoaded3, setIsLoaded3] = useState(false);
    const [isLoaded4, setIsLoaded4] = useState(false);
    const [isLoaded5, setIsLoaded5] = useState(false);
    const [isLoaded6, setIsLoaded6] = useState(false);

    useEffect(() => {

        setIshomepage(true);

        setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        setTimeout(() => {
            setIsLoaded2(true);
        }
        , 1400);

        setTimeout(() => {
            setIsLoaded6(true);
        }
        , 1600);
        setTimeout(() => {
            setIsLoaded3(true);
        }
        , 2000);

        setTimeout(() => {
            setIsLoaded4(true);
        }
        , 3000);
        setTimeout(() => {
            setIsLoaded5(true);
        }
        , 4000);

        return () => {
            setIshomepage(false);
        }

    }, []);



    return (
        <>
      
        <Box  style={{width:"100%",height:"100%",flexDirection:'row',marginTop:"50px"}}>

       

        <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',marginTop:"50px", 
        height:"100%",
        marginBottom:smallmobile? "60px": "0px", padding:"20px"
  //make overflow y

    }}>

        <Grid container item xs={12} style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start', 
        marginBottom:smallmobile? "60px": "30px"}}
        >

            <Grid item xs={8} style={{textAlign:'center',paddingRight:"15px"}} >
                <h2 className={`Homesecondtext ${isLoaded? 'fadeIn' : 'hidden'}`} style={{textAlign:'left',paddingLeft:ismobile? "0px": "20%",
            fontSize:bigscreen? "15px":"17px"
            }}>
                    Hello Friends! 👋
                </h2>
                
                <br/>
                <div className={isLoaded2? 'fadeIn' : 'hidden'} style={{lineHeight:2}}>

                <span className="Hometext" style={{fontSize:ismobile? "30px" : "60px"}}>

                   I'm  

                </span>
                
                <span className="Hometext" style={{color:'#f02e1d', marginLeft:bigscreen? "10px" :"15px", fontSize:ismobile? "30px" : "60px"}}>
                    Dor Ratzabi.
                </span>
                <br/>

                <span className="Hometext" style={{marginLeft:"2%",fontSize:ismobile? "24px" : "50px",zIndex:4}}>
                      Information systems,NOC and Support Specialist, and Applications & Websites Developer.
                    
                </span>
                <br/>
                <br/>



                <Button variant="contained" onClick={download} style={{width:ismobile? "140px" : "220px", height:ismobile? "45px": "60px", padding:"0px"}}    >
                
                    <span className="button" style={{fontSize:bigscreen? "10px" : "14px", padding:"0px"}}  >

                    Download CV
                    </span>

                    <IconButton aria-label="download"  style={{color:"#ffffff", paddingLeft:"10px"}}>
                        <CloudDownloadIcon style={{width:bigscreen?"15px" : "30px"}} />
                    </IconButton>
                    
                </Button>
                </div>

          

            </Grid>

              <Grid item xs={4} style={{textAlign:'center',marginTop:smallmobile? "0px" : "10px", alignSelf:'center'}} 
              
              className={isLoaded6? "fadeIn" : "hidden"}              >

                <img src={myimage2} style={{width:ismobile? "100%": "auto", height:ismobile? "100%" : "400px", borderRadius:"10px",
                //make the image look sharp
                imageRendering:"auto",
                imageRendering:"-moz-crisp-edges",
                imageRendering:"pixelated",
                //make the image look like a painting
                filter:"grayscale(100%)",
                filter:"contrast(150%)",
                filter:"brightness(80%)",
                filter:"saturate(150%)",
                filter:"hue-rotate(10deg)",
                filter:"blur(0.8px)",
                filter:"invert(10%)",
                filter:"sepia(50%)",
                //make the image fill the container

            
            }}/>
              </Grid>

            </Grid>
        

            <Grid item xs={10} style={{backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'15px',padding:"40px",marginTop:"30px",marginBottom:"20px"}} className={isLoaded3? 'fadeIn' : 'hidden'}>
            <h1 className="Hometext" style={{color:'#f02e1d',fontSize:bigscreen? "30px" : "50px",textAlign:'center',marginTop:"0px"}}>

               Achivements.
                   </h1>
                   <ul className="Homesecondtext" style={{fontSize:bigscreen? "14px" : "25px",padding:"5px"}}>
                          <li>  
                            <span style={{color:'#f02e1d'}}> 2023 </span> - Bachelor of Information Systems, Ruppin Academic Center- Avarage grade of 94.
                            </li>
                            <br/>

                     

                        
                            <li>
                            <span style={{color:'#f02e1d'}}> 2020-2023 </span> - Dean's list in each year.
                            </li>
                            <br/>

                            <li>
                            <span style={{color:'#f02e1d'}}> In progress </span> - Master’s of Information Systems, Infrastructure and Cybersecurity focus at Bar Ilan University
Expected Completion: July 2025

                                
                           
                            </li>

                            <br/>
                            <li>


                            Main developer of Social Keeper- algorithm based meetings app, press <a href="https://github.com/dor933/socialkeeper2">here</a> to see the repository.




                         
                            </li>

                            </ul>

                          

                         </Grid>

                      


                         <Grid item xs={10} className={isLoaded4? 'fadeIn' : 'hidden'} style={{marginTop:"70px",
           display:"flex", flexDirection:"row", marginLeft: smallmobile? "10%" : "4%"
        }}  > 

            <span className="Hometext" style={{color:'#ffffff',fontSize:bigscreen? "30px" : "50px", borderBottom:'1px solid #ffffff'}}>
            I'm
            </span>
            <span className="Hometext" style={{color:'#f02e1d',fontSize:bigscreen? "30px" : "50px", paddingLeft:bigscreen? "10px" : "20px",
        borderBottom:'1px solid #ffffff'}}>
               Guarentee.
                     </span>

            </Grid>

         

            <Grid container xs={10} className={isLoaded5? 'fadeIn': 'hidden'} style={{ marginLeft:"3%", 
            marginTop:"10px", padding:"10px",
         backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'15px'}}>

            <Grid item xs={12} style={{textAlign:'left',marginTop:"10px", padding:'5px',flexDirection:'row',display:'flex',
        alignItems:'center'}} >

            <CheckIcon style={{color:'#2a612f',fontSize:bigscreen? "20px" : "30px", paddingRight:"7px",paddingBottom:"5px"}} />

                
                <span className="Homesecondtext" style={{fontSize:bigscreen? "16px" : "20px", color:'#2a612f', width:"60px"}} >

                Quality Assurance.
                </span>
                <span className="Homesecondtext" style={{fontSize:bigscreen? "12px" : "20px", color:'#ffffff',paddingLeft:smallmobile?"55px" : "90px",
            lineHeight:'1.6'}} >

                I commit to deliver high-quality work that meets your specific needs.

                    </span>
                </Grid>

                <Grid item xs={12} style={{textAlign:'left',marginTop:smallmobile? "15px": "25px", padding:'5px',flexDirection:'row',display:'flex',
        alignItems:'center'}} >

            <AccessTimeIcon style={{color:'#f02e1d',fontSize:bigscreen? "20px" : "30px", paddingRight:"7px",paddingBottom:"5px"}} />

                <span className="Homesecondtext" style={{fontSize:bigscreen? "16px" : "20px", color:'#f02e1d',width:"60px"}} >
                Timely Delivery.
                                </span>
                <span className="Homesecondtext" style={{fontSize:bigscreen? "12px" : "20px", color:'#ffffff',paddingLeft:smallmobile?"55px" : "90px", lineHeight:'1.6'}} >

                I promise to respect and adhere to our agreed timelines.
                    </span>
                </Grid>

                <Grid item xs={12} style={{textAlign:'left',marginTop:smallmobile? "15px" : "20px", padding:'5px',flexDirection:'row',display:'flex',
        alignItems:'center'}} >

            <SupportIcon style={{color:'#4256db',fontSize:bigscreen? "20px" : "30px", paddingRight:"7px",paddingBottom:"5px"}} />


                <span className="Homesecondtext" style={{fontSize:bigscreen? "16px" : "20px", color:'#4256db',width:"60px"}} >
                Ongoing Support.                                </span>
                <span className="Homesecondtext" style={{fontSize:bigscreen? "12px" : "20px", color:'#ffffff',paddingLeft:smallmobile?"55px" : "90px", lineHeight:'1.6'}} >

                I guarantee ongoing support and maintenance for my work, standing by to assist with any post-delivery concerns or updates.                    </span>
                </Grid>


            </Grid>

           
            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row', marginTop:smallmobile?"80px" : "110px"
                        
                    }} >
      
      <div className='footer'>
          <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
  
          </div>
          </Grid>

        </Grid>

       

       

      


         



        </Box>

      

   
        </>
    );
    };


export default Home;

