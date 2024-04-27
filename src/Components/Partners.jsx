import React from "react";
import Grid from '@mui/material/Grid';
import open_in_new from '../assets/images/open_in_new.png';


const Partners = ({name,image,description}) => {


    return (

        <Grid xs={3} container style={{
            display:'flex',
            paddingBottom:'22px',
            gap:'10px',
            borderRadius:"10px",
            borderBottom:"4px solid #F5FCFF",
            backgroundColor:"#F5FCFF",
            height:'550px',
            boxShadow:"0px 0px 32px 0px rgba(0, 0, 0, 0.15)"


        }}>

            <Grid xs={12} container style={{

                display:'flex',
                flexDirection:'row',
                
            }}

            >

                <Grid xs={12} style={{
                    display:'flex',
                    gap:'14px',
                    borderRadius:'10px',
                    backgroundColor:"#FFF",
                    
                }}>

                    <img src={image} alt="symbol" style={{width:'100%',height:'100%',objectFit:'cover', borderRadius:'8px'}}/>


                </Grid>

                </Grid>

                <Grid xs={12} style={{ flexDirection:'column', justifyContent:'flex-start' ,alignItems:'flex-start', alignSelf:'stretch', gap:'21px',paddingRight:'20px', height:"100%",display:'flex'}} >

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:'28px', fontWeight:600, fontStyle:'normal',lineHeight:"140%"}}>

                    {name}
                    </div>

                    <div style={{fontFamily:'Assistant', color:'#282938', fontSize:'18px', fontWeight:400, fontStyle:'normal',lineHeight:"150%"}}>

                        
                    {description}

                    </div>

                    <div onClick={()=> {

                 window.open("https://hodaya-vaknin.com")

                    }} style={{fontFamily:'Assistant', color:'#282938', fontSize:'18px', fontWeight:600, fontStyle:'normal',lineHeight:"150%" ,
                borderBottom: '1.333px solid var(--Primary, #5E3BEE)', paddingBottom:'10px', display:'flex',
                alignItems:'center', cursor:'pointer'
                }}>

                        
                        <span>
                        לחץ כאן לכניסה לאתר

                        </span>
                        <img src={open_in_new} alt="symbol" style={{width:'20px',height:'20px',objectFit:'cover', padding:'5px',marginTop:'1px'}}/>
                 

                        
</div>

                    

                  
                </Grid>
                


            </Grid>


      


    )
}

export default Partners;