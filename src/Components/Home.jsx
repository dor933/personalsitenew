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



//create new component


const Home = () => {

    const bigscreen = useMediaQuery('(max-width:1700px)');
    const ismobile = useMediaQuery('(max-width:920px)');
    const smallmobile = useMediaQuery('(max-width:470px)');
    const verysmallmobile = useMediaQuery('(max-width:314px)');
    const {ishomepage,setIshomepage}= useContext(AuthContext);






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
    const [isLoaded4, setIsLoaded4] = useState(false);
    const [isLoaded5, setIsLoaded5] = useState(false);
    const [isLoaded6, setIsLoaded6] = useState(false);

    useEffect(() => {

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
    }, []);



    return (
        <>
        <Grid container style={{flexDirection:'row',justifyContent:'center',alignItems:'flex-start',marginTop:"30px", height:"100%",
        marginBottom:smallmobile? "60px": "0px"
  //make overflow y

    }}>

            <Grid item xs={5} style={{textAlign:'center'}} >
                <h2 className={`Homesecondtext ${isLoaded? 'fadeIn' : 'hidden'}`} style={{textAlign:'left',paddingLeft:bigscreen? "0px": "20%",
            fontSize:bigscreen? "15px":"17px"
            }}>
                    Hello Friends! 👋
                </h2>
                
                <br/>
                <div className={isLoaded2? 'fadeIn' : 'hidden'} style={{}}>

                <span className="Hometext" style={{fontSize:bigscreen? "40px" : "50px"}}>

                   I'm  

                </span>
                
                <span className="Hometext" style={{color:'#f02e1d', marginLeft:bigscreen? "10px" :"26px", fontSize:bigscreen? "40px" : "50px"}}>
                    Dor Ratzabi.
                </span>
                <br/>

                <span className="Hometext" style={{marginLeft:"2%",fontSize:bigscreen? "24px" : "50px"}}>
                      Information systems,NOC and Support Specialist, and Applications Developer.
                    
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
            <Grid item xs={1} style={{ height:"40%"}} className={isLoaded6? 'fadeIn' : 'hidden'}  >
                <div style={{height:"100%",width: "0.3px",backgroundColor:"#ffffff",marginLeft:"55%", marginTop:"5%"}}></div>
                
            </Grid>

            <Grid item xs={5} style={{textAlign:'center'}} className={isLoaded3? 'fadeIn' : 'hidden'}>
            <h1 className="Hometext" style={{color:'#f02e1d',fontSize:bigscreen? "30px" : "50px",textAlign:'center'}}>

               Achivements.
                   </h1>
                   <ul className="Homesecondtext" style={{textAlign:'left',fontSize:bigscreen? "14px" : "20px",paddingLeft:"10px"}}>
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
            marginTop:"15px", padding:"10px",
         backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'15px'}}>

            <Grid item xs={12} style={{textAlign:'left',marginTop:"10px", padding:'5px',flexDirection:'row',display:'flex',
        alignItems:'center'}} >

            <CheckIcon style={{color:'#2a612f',fontSize:bigscreen? "20px" : "30px", paddingRight:"7px",paddingBottom:"5px"}} />

                
                <span className="Homesecondtext" style={{fontSize:bigscreen? "16px" : "20px", color:'#2a612f', width:"60px"}} >

                Quality Assurance.
                </span>
                <span className="Homesecondtext" style={{fontSize:bigscreen? "12px" : "20px", color:'#ffffff',paddingLeft:smallmobile?"55px" : "90px",
            lineHeight:'1.6'}} >

                I commit to delivering high-quality work that meets your specific needs.

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

           
            <Grid item xs={12} style={{textAlign:'center', flexDirection:'row', marginTop:"80px"
                        
                    }} >
      
      <div className='footer'>
          <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
  
          </div>
          </Grid>

        </Grid>

       

       

      


         



        

      

   
        </>
    );
    };


export default Home;

