import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme,ThemeProvider } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useContext,useEffect } from 'react';
import AuthContext from './Usecontexts/Maincontext';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';




export default function MyForm({type}) {

    const {issucceeded,setIssucceeded}= useContext(AuthContext);
    const {popup,setPopup}= useContext(AuthContext);
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const smaller1200= useMediaQuery('(max-width:1200px');



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


  
 
  
  if(type=="contact"){

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
    <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                style={{display: "flex", justifyContent: "center", maxWidth: "600px", width: smaller1200? "300px" : "350px", margin: "auto",
                backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'10px', paddingTop:smaller1200? "3%":"7%", height: smaller1200? "350px" : "500px",
              

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
  
  );
          }
          else if(type=="other"){

            const theme = createTheme({
              components: {
                MuiOutlinedInput: {
                  styleOverrides: {
                    root: {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor:'#f02e1d',
                        //make it expand if needed




                      },
                      '& .MuiOutlinedInput-input': {
                        color: '#ffffff', // Change input text color
                        lineHeight: 'normal', // This allows the input to expand as needed
                        fontSize: "11px",


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
                      fontSize: "13px",
                      fontWeight: "bold"
                    },
                  },
                },
              },
            });

            return (
             <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                style={{justifyContent: "center",display:'flex', width: "170px", margin: "auto",
                backgroundColor: 'rgba(0, 0, 0, 0.35)', borderRadius:'10px', paddingTop:"5%", paddingBottom:"5%",
                 textAlign:"center", 
                
              

            }}
            >
                <div style={{fontSize:  "12px", color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold',
              
              
              }} >

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
                 
                    style={{width:"70%",height:"10px",paddingBottom:"10px",marginTop:0,marginBottom:23}}
                    />
                    </ThemeProvider>
                    <br/> <br/>
                    <ThemeProvider theme={theme}> 

                    <TextField
                    id="outlined-multiline-flexible"
                    label="Email"
                    multiline
                    maxRows={4}
                    style={{width:"70%",height:"10px",paddingBottom:"10px",marginTop:5,marginBottom:23}}
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
                    style={{width:"70%", color:"#ffffff",marginTop:5,marginBottom:0}}
                    onChange={handlemessagechange}


                  //save to message state



                    />
                    </ThemeProvider>

                    <div style={{display: "flex", justifyContent: "center", height:"15px", maxWidth: "600px", width: "50%", margin: "auto",
                  marginTop:15}}>

                    <Button variant="contained" onClick={sendmessage}    >
                        <span className="button" style={{paddingTop:13,fontSize:"10px"}}  >
                            Send
                        </span>
                    </Button>
                    </div>
                </div>
            </Box>
            )

          }
}