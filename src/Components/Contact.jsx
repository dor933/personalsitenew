import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import Socialcomp from "./Socialcomp";
import TextField from '@mui/material/TextField';
import { createTheme,ThemeProvider } from "@mui/material";
import AuthContext from './Usecontexts/Maincontext';


const Contact = () => {

    const ismobile = useMediaQuery('(max-width:600px)');
    const smaller1200= useMediaQuery('(max-width:1200px');
    const bigscreen = useMediaQuery('(min-width:1700px)');
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {isincontactpage,setIsincontactpage}= useContext(AuthContext);
    const {issucceeded,setIssucceeded}= useContext(AuthContext);
    const {popup,setPopup}= useContext(AuthContext);


    

    useEffect(() => {
        setIsincontactpage(true);
        

        return () => {
            setIsincontactpage(false);
        }

    }, [])



    const handlemessagechange = (e) => {
        setMessage(e.target.value)
    }

    const handlenamechange = (e) => {

      setName(e.target.value)
    }

    const handleemailchange = (e) => {

      setEmail(e.target.value)
    }




    const sendmessage= async () => {
        const myname = name;
        const myemail = email;
        const mymessage = message;
        const data = {
            name: myname,
            email: myemail,
            message: mymessage
        }

        console.log('this is the data', data)

        const res = await axios.post('/sendmessage', data);
        if(res.status === 200){

          setIssucceeded(true);
          setPopup(true);
        

          
        }
        else{
          setIssucceeded(false);
          setPopup(true);
        
        }


    }


    const theme = createTheme({
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor:'#f02e1d',
              },
              '& .MuiOutlinedInput-input': {
                color: '#ffffff', // Change input text color
                height:"10px"
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff', // Change border color on hover
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ffffff', // Change border color when focused
              },
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              color: '#ffffff', // Change color of placeholder text
            },
          },
        },
      },
    });
    


    return (
        <>

      

  
    <Box  style={{width:"100%",height:"100%",flexDirection:'row',marginTop:"50px"}}>

    <Grid item xs={12} style={{textAlign:'center' ,marginTop:"0px",marginBottom: smaller1200? "30px":"150px"}} >

<span className="Hometext" style={{fontSize: smaller1200? "30px" : "80px", color:'#f02e1d'}} >

    Contact
    </span>
    <span className="Hometext" style={{fontSize: smaller1200? "30px" : "80px" , marginLeft: smaller1200? "10px" : "20px"}} >
        Me.
    </span>
    </Grid>

      <Grid container >


  
    <Grid item xs={12} lg={6} style={{lineHeight:1.6}}  >
 
    <div style={{display: "flex", maxWidth: "600px", width: smaller1200? "300px" : "350px", margin: "auto",paddingBottom:smaller1200? "7%" : "0%",
     borderRadius:'10px', paddingTop: smaller1200? "4%": '7%',  backgroundColor: 'rgba(0, 0, 0, 0.35)', height: smaller1200? "280px" : "500px",
     flexDirection:'column', justifyContent:'flex-start' 
    }}>

     <div style={{fontSize: smaller1200? "18px" : "30px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >
        <span style={{color:'white'}}>Lets</span> 
        <span style={{color:'#f02e1d',marginLeft:smaller1200? 3: 0}}> Connent.</span>
         <br/> <br/>

     
        <Socialcomp />


    </div>
    

       
        </div>

        </Grid>
        <Grid item xs={12} lg={6} style={{marginTop:smaller1200? "60px": "0px"}} >
            <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: smaller1200? "300px" : "350px", margin: "auto",
                backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'10px', paddingTop:"7%", height: smaller1200? "350px" : "500px",
              

            }}
            >
                <div style={{fontSize: smaller1200? "20px" : "25px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >

                    <div style={{margin: "auto"}}>
                    <span style={{color:'#f02e1d'}}>Send</span>
                    <span style={{color:'white',marginLeft:smaller1200? 5: 4}}> Me</span>
                    <span style={{color:'white',marginLeft:smaller1200? 5: 4}}> a</span>
                    <span style={{color:'white',marginLeft:smaller1200? 5: 4}}> Message.</span>
                    </div>
                    <br/> 
                    <ThemeProvider theme={theme}> 
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    variant="outlined"
                    onChange={handlenamechange}
                    

                    maxRows={4}
                 
                    style={{width:"100%",height:"20px",paddingBottom:"10px"}}
                    />
                    </ThemeProvider>
                    <br/> <br/>
                    <ThemeProvider theme={theme}> 

                    <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    style={{width:"100%",height:"20px",paddingBottom:"10px"}}
                    onChange={handleemailchange}
                    />
                    </ThemeProvider>
                    <br/> <br/>
                    <ThemeProvider theme={theme}> 

                    <TextField
                    id="outlined-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={4}
                    style={{width:"100%", color:"#ffffff"}}
                    onChange={handlemessagechange}


                  //save to message state



                    />
                    </ThemeProvider>
                    <br/> <br/>

                    <div style={{display: "flex", justifyContent: "center", height:smaller1200? "30px":"50px", maxWidth: "600px", width: "100%", margin: "auto"}}>

                    <Button variant="contained" onClick={sendmessage}    >
                        <span className="button" style={{paddingTop:13,fontSize:smaller1200?"10px":"20px"}}  >
                            Send
                        </span>
                    </Button>
                    </div>
                </div>
            </Box>




            
        </Grid>

        </Grid>


        <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:"100px"}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
        
        </Box>

     

        

      
      
        </>

    )
}

export default Contact


