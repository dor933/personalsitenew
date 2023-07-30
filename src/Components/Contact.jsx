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
    const smaller900= useMediaQuery('(max-width:900px');
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

            <Grid item xs={12} style={{textAlign:'center' , flexDirection:'row',marginTop:"50px",height:ismobile? "auto":"5px"}} >

<span className="Hometext" style={{fontSize: ismobile? "30px" : "80px", color:'#f02e1d'}} >

    Contact
    </span>
    <span className="Hometext" style={{fontSize: ismobile? "30px" : "80px" , marginLeft: ismobile? "2.4%" : "20px"}} >
        Me.
    </span>
    </Grid>

  
    <Grid container   style={{width:"100%",height:"100%",flexDirection:'row',display:'flex', alignContent:ismobile? 'flex-start': 'center',marginTop:ismobile? "50px" : "10px"}}>

  
    <Grid item xs={12} sm={6} style={{lineHeight:1.6}}  >
 
    <div style={{display: "flex", maxWidth: "600px", width: ismobile? "300px" : "350px", margin: "auto",paddingBottom:ismobile? "7%" : "0%",
     borderRadius:'10px', paddingTop:'7%',  backgroundColor: 'rgba(0, 0, 0, 0.35)', height: ismobile? "280px" : "500px",
     flexDirection:'column', justifyContent:'flex-start' 
    }}>

     <div style={{fontSize: ismobile? "18px" : "30px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >
        <span style={{color:'white'}}>Lets</span> 
        <span style={{color:'#f02e1d',marginLeft:ismobile? 3: 0}}> Connent.</span>
         <br/> <br/>

     
        <Socialcomp />


    </div>
    

       
        </div>

        </Grid>
        <Grid item xs={12} sm={6} style={{marginTop:ismobile? "100px": "0px"}} >
            <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: ismobile? "300px" : "350px", margin: "auto",
                backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'10px', paddingTop:"7%", height: ismobile? "350px" : "500px",
              

            }}
            >
                <div style={{fontSize: ismobile? "20px" : "25px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >

                    <div style={{margin: "auto"}}>
                    <span style={{color:'#f02e1d'}}>Send</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> Me</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> a</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> Message.</span>
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

                    <div style={{display: "flex", justifyContent: "center", height:ismobile? "30px":"50px", maxWidth: "600px", width: "100%", margin: "auto"}}>

                    <Button variant="contained" onClick={sendmessage}    >
                        <span className="button" style={{paddingTop:13,fontSize:ismobile?"10px":"20px"}}  >
                            Send
                        </span>
                    </Button>
                    </div>
                </div>
            </Box>




            
        </Grid>

  
        
        </Grid>

        <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:"80px"}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>

        

      
      
        </>

    )
}

export default Contact


