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


const Contact = () => {

    const ismobile = useMediaQuery('(max-width:600px)');
    const smaller900= useMediaQuery('(max-width:900px');
    const bigscreen = useMediaQuery('(min-width:1700px)');
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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
        const res = await axios.post('/sendmessage', data);
        console.log(res);
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
             <Grid item xs={12} style={{textAlign:'center' , height: ismobile? "3%" : "10.4%", flexDirection:'row',marginTop:"3%"}} >

<span className="Hometext" style={{fontSize: ismobile? "30px" : "100px", color:'#f02e1d'}} >

    Contact
    </span>
    <span className="Hometext" style={{fontSize: ismobile? "30px" : "100px" , marginLeft: ismobile? "3%" : "1.1%"}} >
        Me.
    </span>
    </Grid>
    <Grid container justify="center" style={{marginTop: smaller900? "8%" : "0%",width:"100%",height:"100vh"}}>

  
    <Grid item xs={12} sm={6}  >
 
    <div style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: ismobile? "100%" : "85%", margin: "auto",
     borderRadius:'10px', paddingTop:'10%', marginTop:ismobile? "7%" :"5%",  backgroundColor: 'rgba(0, 0, 0, 0.35)', marginBottom:ismobile? "10%" : "0%", height: ismobile? "100%" : 
     "70%"
}}>

     <div style={{fontSize: ismobile? "20px" : "30px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >
        <span style={{color:'white'}}>Lets</span> 
        <span style={{color:'#f02e1d',marginLeft:ismobile? 3: 0}}> Connent.</span>
         <br/> <br/>

     
        <Socialcomp />


    </div>
    

       
        </div>

        </Grid>
        <Grid item xs={12} sm={6} style={{}} >
            <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: "100%", margin: "auto",
                backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'10px', paddingTop:'10%', marginTop: ismobile? "30%" : "5%", marginBottom:ismobile? "0%" : "0%", height: ismobile? "100%" : 
                "70%"

            }}
            >
                <div style={{fontSize: ismobile? "20px" : "25px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >

                    <div style={{margin: "auto"}}>
                    <span style={{color:'#f02e1d'}}>Send</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> Me</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> a</span>
                    <span style={{color:'white',marginLeft:ismobile? 5: 4}}> Message.</span>
                    </div>
                    <br/> <br/>
                    <ThemeProvider theme={theme}> 
                    <TextField
                    id="outlined-multiline-flexible"
                    label="Name"
                    multiline
                    variant="outlined"
                    onChange={handlenamechange}
                    

                    maxRows={4}
                 
                    style={{width:"100%"}}
                    />
                    </ThemeProvider>
                    <br/> <br/>
                    <ThemeProvider theme={theme}> 

                    <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    style={{width:"100%"}}
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
                    style={{width:"100%"}}
                    onChange={handlemessagechange}


                  //save to message state



                    />
                    </ThemeProvider>
                    <br/> <br/>

                    <div style={{display: "flex", justifyContent: "center", height:"50px", maxWidth: "600px", width: "100%", margin: "auto"}}>

                    <Button variant="contained" onClick={sendmessage}    >
                        <span className="button" style={{paddingTop:13}}  >
                            Send
                        </span>
                    </Button>
                    </div>
                </div>
            </Box>




            
        </Grid>
        
        </Grid>
        </>

    )
}

export default Contact


