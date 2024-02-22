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
import { createTheme,ThemeProvider } from "@mui/material";
import AuthContext from './Usecontexts/Maincontext';
import MyForm from "./Form";

const Contact = () => {

    const smaller1200= useMediaQuery('(max-width:1200px');
    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const {setIsincontactpage}= useContext(AuthContext);
    const {setIssucceeded}= useContext(AuthContext);
    const {setPopup}= useContext(AuthContext);


    

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

     <div style={{fontSize: smaller1200? "18px" : "30px", textAlign:'center', color:'#f02e1d', fontFamily:'Comfortaa', fontWeight:'bold'}} >
        <span style={{color:'white'}}>Lets</span> 
        <span style={{color:'#f02e1d',marginLeft:smaller1200? 3: 0}}> Connent.</span>
         <br/> <br/>

     
        <Socialcomp />


    </div>
    

       
        </div>

        </Grid>
        <Grid item xs={12} lg={6} style={{marginTop:smaller1200? "60px": "0px"}} >

          <MyForm type={"contact"} />
          

            
        </Grid>

        </Grid>


        <Grid item xs={12} style={{textAlign:'center', flexDirection:'row',marginTop:"120px"}} >
          
          <div className='footer'>
              <p>© 2023 by <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/">Dor Ratzabi</a></p>
      
              </div>
              </Grid>
        
        </Box>

     

        

      
      
        </>

    )
}

export default Contact


