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

      <Grid container xs={12} style={{
        display:'flex',
        paddingTop:'150px',
        paddingBottom:'150px',
        paddingLeft:'83px',
        paddingRight:'83px',
        flexDirection:'column',
        justifyContent:'center',
        background: 'var(--BG-Shade, #F5FCFF)',
        height:"50%",

        gap:'64px'}}>

          test
        </Grid>
       
    )
}

export default Contact


