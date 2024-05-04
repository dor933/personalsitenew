import React from "react";
import Grid from '@mui/material/Grid';
import { useState,useContext,useEffect } from 'react';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import AuthContext from './Usecontexts/Maincontext';
import Fieldcomp from "./fieldcomp";


const Contact = () => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [businessname, setBusinessname] = useState('')
    const {setIssucceeded}= useContext(AuthContext);
    const {setPopup}= useContext(AuthContext);


 



    const handlemessagechange = (e) => {
        setMessage(e.target.value)
        console.log('this is the message', message)
    }

    const handlebusinessnamechange = (e) => {
        setBusinessname(e.target.value)
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
        const mybusinessname = businessname;

        const data = {
            name: myname,
            email: myemail,
            message: mymessage,
            businessname: mybusinessname
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

      <Grid id="partners" container xs={12} style={{
        display:'flex',
        paddingTop:'120px',
        paddingBottom:'120px',
        paddingLeft:'83px',
        paddingRight:'83px',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'flex-start',

        gap:'30px'}}>

          <Grid container xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            gap:'19px',
            height:"30%"
        }}>

          <Grid xs={12} style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'21px',
        }}>

            <div style={{
              fontFamily:'Assistant',
              color:'var(--Heading-color, #282938)',
              fontSize:'18px',
              fontWeight:600,
              fontStyle:'normal',
              lineHeight:"100%",
          }}>בוא נדבר</div>

          </Grid>

          <Grid xs={12} style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            gap:'10px',
        }}>
          <div style={{
            fontFamily:'Assistant',
            color:'var(--Heading-color, #282938)',
            fontSize:'48px',
            fontWeight:700,
            fontStyle:'normal',
            lineHeight:"150%",
        }}>צור קשר</div>

        </Grid>

        <Grid xs={12} style={{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          gap:'30px',
      }}>

        <div style={{
          fontFamily:'Assistant',
          color:'var(--Heading-color, #282938)',
          fontSize:'24px',
          fontWeight:400,
          fontStyle:'normal',
          lineHeight:"150%",
          textAlign:'center',
      }}>ונהפוך את החלומות של העסק שלך למציאות!</div>

      </Grid>

          </Grid>

          <Grid container style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            height:"70%",
            justifyContent:'center',
            // center the form




        }}>

          <Grid container  style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'flex-start',
            justifyContent:'flex-start',
            
            // make
            
        }}>

          <Grid container  style={{
            flexDirection:'row',
            alignItems:'flex-start',
            display:'flex',
            justifyContent:'center',
            gap:'10px',
            
            marginBottom:'20px'

          }}>

        
          

            <Fieldcomp fieldname="שם" handlechange={handlenamechange} />
            
          
            <Fieldcomp fieldname="שם עסק" handlechange={handlebusinessnamechange}/>





            </Grid>

            <Grid container style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            gap:'10px',

            justifyContent:'center',
            marginBottom:'30px'
          }}>

            <Fieldcomp fieldname="מייל" handlechange={handleemailchange} />

            <Fieldcomp fieldname="טלפון" />


            </Grid>

            <Grid container xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            marginBottom:'30px',
            
            justifyContent:'center',
          }}>

            <Fieldcomp fieldname="שלח הודעה" iswide={true} handlechange={handlemessagechange} />

          

            </Grid>

            <Grid item xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'flex-start',
            gap:'10px',
            justifyContent:'center',
            width:'100%',

          }}>

            <div 
            onClick={sendmessage}

             style={{
              display:'flex',
              borderRadius:'8px',
              backgroundColor:'var(--Primary, #5E3BEE)',
              width:'7%',
              paddingTop:'18.667px',
              paddingBottom:'18.667px',
              paddingLeft:'40px',
              paddingRight:'40px',
              gap:'10px',
              justifyContent:'center',
              cursor:'pointer',

              

            }}>

              <span style={{
                fontSize:'21.33px',
                fontFamily:'Assistant',
                fontWeight:400,
                lineHeight:'150%',
                color:'var(--White, #FFF)',
                fontStyle:'normal',
              }}>שלח</span>
              
            </div>


          

            </Grid>

          </Grid>

          </Grid>


       

          
          

              

              
      



        </Grid>
       
    )
}

export default Contact


