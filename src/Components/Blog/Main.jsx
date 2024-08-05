import React from "react";
import Grid from '@mui/material/Grid';
import { useState,useContext,useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import AuthContext from "../Usecontexts/Maincontext";


const Main = () => {
    const {menupress,value,setValue,isvalidationerror,setIsvalidationerror,issucceeded,ishomepage,setIshomepage,isinprojectpage,setIsinprojectpage,setIssucceeded,setMenupress,popup,setPopup, isincontactpage, setIsincontactpage} = useContext(AuthContext);
    const ismobile = useMediaQuery('(max-width:1700px)');

    useEffect(() => {
        setIshomepage(false);

        return () => {
            setIshomepage(true);
        }

    }, [])

    return (

       
        <Grid style={{
            display: "flex",
            alignItems: "center", // Changed to flex-start
            justifyContent: "center",
            alignSelf: "stretch",
            gap: "50px",
            flexDirection: "column",
            padding: "30px 0px",
            marginTop: "50px",
            backgroundColor: "#FFF",


        }}>
            <Grid container style={{
                display: "flex",
                width: "1216px",
                gap: "260px",
                borderBottom: "0.5px solid rgba(0, 0, 0, 0.24)",
                borderTop: "0.5px solid rgba(0, 0, 0, 0.24)",
                alignItems: "center", // Changed to flex-start
                justifyContent: "center", // Keep justifyContent to center horizontally
            }}>
                <span style={{
                    color: "#1A1A1A",
                    fontFamily: "Assistant",
                    fontStyle: "normal",
                    fontSize: "60.8px",
                    lineHeight: "normal",
                    fontWeight: "700",
                }}>
                    <h1 style={{margin:"0px 0px 20px 0px"}}>הבלוג</h1>
                </span>
            </Grid>
        </Grid>
           
    );
}

export default Main;