import React from 'react';
import Grid from '@mui/material/Grid';
import Faceicon from '../assets/images/social_media/Facebook.png';
import Instagram from '../assets/images/social_media/Instagram.png';
import Twitter from '../assets/images/social_media/Twitter.png';
import LinkedIn from '../assets/images/social_media/LinkedIn.png';
import mylogo from '../assets/images/my_logo.png';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useContext } from 'react';
import AuthContext from './Usecontexts/Maincontext';




const Footer = () => {

    const theme = useTheme();
    const ismd = useMediaQuery(theme.breakpoints.up('md'));
    const issm = useMediaQuery(theme.breakpoints.down('md'));
    const ismobile = useMediaQuery('(max-width:600px)');
    const {value, setValue} = useContext(AuthContext);


    const handleclick= (value) => {
        const section= ['header','partners','package','about','contact'][value];
            const sectionelement = document.getElementById(`${section}`);
            if(sectionelement){
          console.log(sectionelement);
          sectionelement.scrollIntoView({behavior:'smooth',
        
        block:ismobile? 'start':'center'})
            }
    }
  

    return (
        <Grid container item xs={12} style={{

            display: 'inline-flex',
            flexDirection: 'column',
            alignItems:'flex-start',
            paddingTop:"30.667px",
            paddingBottom:"36.667px",
            paddingLeft: ismd? "85.333px" : '30px',
            paddingRight:ismd? "85.333px" : '30px', 
            background: 'var(--BG-Shade, #F5FCFF)',

            

        }}>

            <Grid container item xs={12} style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}>

                <Grid item xs={2} style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <img src={mylogo}
                    alt='mylogo'
                    style={{
                        width:ismd?"200px": '80px',
                        height:ismd? "200px" : '80px',

                    }} />
                </Grid>

                <Grid container item xs={8} style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-around',
                    fontFamily:'Assistant',
                    fontSize:ismd? '16px' : '11px',
                    fontWeight:600,
                    fontStyle:'normal',
                    lineHeight:"150%",
                }}>

                    <Grid item xs={2}  style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        paddingRight:'20px',
                    }}>
                           <span onClick={()=> {
                               if(value===0){
                                handleclick(0);
                            }
                            else{
                            setValue(0)
                            }
                        }}  style={{
                           cursor:'pointer',

                           }}>בית</span>                   

                        </Grid>
                        <Grid item xs={2}  style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                        paddingLeft:'20px',
                    }}>
                           <span onClick={()=> {

if(value===1){
    handleclick(1);
}
else{
setValue(1)
}
                           }}  style={{
                           cursor:'pointer',

                           }}>שותפים</span>                   

                        </Grid>

                        <Grid  item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',

                    }}>

                        <span onClick={()=> {

if(value===2){
    handleclick(2);
}
else{
setValue(2)
}
                        }}  style={{
                           cursor:'pointer',

                           }}>שירותים</span>
                        

                        </Grid>

                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',

                    }}>
                           <span onClick={()=> {

if(value===3){
    handleclick(3);
}
else{
setValue(3)
}

                           }}  style={{
                           cursor:'pointer',

                           }}>אודות</span>

                        </Grid>

                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',

                    }}>
                          <span  onClick={()=> {


if(value===4){
    handleclick(4);
}
else{
setValue(4)
}

                          }}  style={{
                           cursor:'pointer',

                           }}>צור קשר</span>

                        </Grid>
                    
                    
                    </Grid>

                    <Grid container item xs={2} style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-around',
                    alignItems:'center',
                    gap: issm?'5px' : '10px'
                }}>
                    <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                    }}>
                        
                        <img onClick={()=> {
                            window.open('https://www.facebook.com/profile.php?id=61558860754768')
                        }} src={Faceicon}
                        style={{
                            width: ismd? "32px" : "16px",
                            height:ismd? "32px" : "16px",

                        }} />

                        </Grid>
                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                    }}>
                        
                        <img onClick={()=> {
                            window.open('https://www.instagram.com/dr_web_development/')
                        }} src={Instagram}
                        style={{
                            width: ismd? "32px" : "16px",
                            height:ismd? "32px" : "16px",

                        }} />

                        </Grid>
             
                        <Grid item xs={2} style={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'flex-start',
                    }}>
                        
                        <img onClick={()=> {
                            window.open('https://www.linkedin.com/in/dor-ratzabi-3900b2248/')
                        }} src={LinkedIn}
                        style={{
                            width: ismd? "32px" : "16px",
                            height:ismd? "32px" : "16px",

                        }} />

                        </Grid>



                    </Grid>
                

                </Grid>

            </Grid>

    );
}

export default Footer;