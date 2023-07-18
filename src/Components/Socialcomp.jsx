import React from "react";
import { Route, Switch } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import {SiGmail} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';


const Socialcomp = () => {
    
    const ismobile = useMediaQuery('(max-width:600px)');

    return (

        <>
            <div style={{textAlign: 'center'}}>
                    <a href="mailto:doratzabi1@gmail.com" style={{color:'#ffffff', textDecoration:'none'}}>
                        Gmail
                        <SiGmail size= {ismobile? "15px" : "25px"}  style={{color:'red', fontSize:'30px',marginLeft:"7%"}}/>

                    </a>
                </div>
                <div style={{textAlign: 'center',paddingTop:35}}>
                    <a href=" https://wa.me/+972544474788" style={{color:'#ffffff', textDecoration:'none'}}>
                        WhatsApp

                        <BsWhatsapp size= {ismobile? "15px" : "25px"}  style={{color:'green', fontSize:'30px',marginLeft:"7%"}}/>

                    </a>
                </div>
                <div style={{textAlign: 'center',paddingTop:35}}>
                    <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/" style={{color:'#ffffff', textDecoration:'none'}}>
                        Linkedin

                        <FaLinkedin size= {ismobile? "15px" : "25px"}  style={{color:'blue', fontSize:'30px',marginLeft:"7%"}}/>


                    </a>
                </div>
                <div style={{textAlign: 'center',paddingTop:35}}>
                    <a href="https://github.com/dor933" style={{color:'#ffffff', textDecoration:'none'}}>
                        GitHub

                        <AiFillGithub size= {ismobile? "15px" : "25px"}  style={{color:'black', fontSize:'30px',marginLeft:"7%"}}/>



                    </a>
                </div>
        </>
    )
}

export default Socialcomp
