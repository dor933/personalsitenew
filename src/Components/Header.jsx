// write a react component called Header that renders the header element

import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect } from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {FaLinkedin} from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//bring hamburger icon from material ui
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import AuthContext from './Usecontexts/Maincontext';
import drimage from '../assets/images/DR.png'
import mylogo from '../assets/images/my_logo.png'








const Header = () => {

  

    const {value, setValue} = useContext(AuthContext);
    const {menupress,setMenupress}= useContext(AuthContext)
    const ismobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);    


    const handleclick= (value) => {
        const section= ['header','partners','package','about','contact'][value];
            const sectionelement = document.getElementById(`${section}`);
            if(sectionelement){
          console.log(sectionelement);
          sectionelement.scrollIntoView({behavior:'smooth',
        
        block:ismobile? 'start':'center'})
            }
    }

 

        

    const tabStyle = {
        fontFamily: 'Assistant',
        fontSize: ismobile? '1.1rem': '1rem',
        textTransform: 'none',
        color: 'black', 
        zindex:ismobile? 2: 1,
        fontWeight:ismobile? 600:400
        
      };

      const tabStyleselected = {
        fontFamily: 'Assistant',
        fontSize: '1rem',
        textTransform: 'none',
        color: "#5E3BEE",
        zindex: 1,
        fontWeight:400
      };

      useEffect(() => {
        if(drawerOpen){
            setMenupress(true);
        }
        else{
            setMenupress(false);
        }
    }, [drawerOpen])

      const tabs= (  <Tabs centered={!ismobile} indicatorColor='none'
      value={value} 

      onChange={(event, newValue) => {
        console.log(newValue);
          setValue(newValue);

          
         
           
      }}



      style={{

        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'85%',
        marginTop:'12px',

       
    
    }}

      

      
      >
          <Tab label="בית"

          style={ value !== 0 ? tabStyle: tabStyleselected }
          

          
          

          />
           <Tab label="שותפים"

style={ value !== 1 ? tabStyle: tabStyleselected }





/>
             <Tab label="שירותים" 
          style={ value !== 2 ? tabStyle: tabStyleselected }

          
          />
          <Tab label="אודות"
          style={ value !== 3 ? tabStyle: tabStyleselected }
          
          />
       
          <Tab label="צור קשר"
          style={ value !== 4 ? tabStyle: tabStyleselected }

          />
      </Tabs>
      );

    return (
        <>
        <Grid id="header" container  direction='row' 
        justifyContent="space-between"
        style={{ zIndex:2,
        boxShadow: '0px 5.333px 80px 0px rgba(0, 0, 0, 0.10)',
        padding:'0px 30px',
        display:'flex',
        paddingBottom: ismobile? '48px': '22px',
        borderBottom: '1px solid #e0e0e0',
        
        
        //make box 
    
    }}

        >
            <Grid container item xs="12" sm="9"
            
            style={{display:'flex',justifyContent:'space-around',alignItems:'center', 
        
        }}

            >

                <Grid item xs="2" style={{display:'flex',justifyContent:'center'}}>
                <img src={mylogo} alt='logo' style={{width:ismobile? "100px":"140px",position:'absolute', 
                
            
            marginTop:ismobile? "-25px":'-61px',

            }}/>
                </Grid>

                <Grid item xs="10" style={{display:'flex',justifyContent:'flex-end',}}>

                        

                {
                    ismobile ? (
                        <>
                        
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
                            <MenuIcon style={{color:"#000000", width:"100%",
                            position:'absolute', left:'10', top:'20', fontSize:'2rem', zIndex:1,
                            transform: 'scale(1.5)'
                        }}  />
                        </IconButton>
                        <Menu 
                        anchorEl={drawerOpen}
                        open={drawerOpen}
                   
                        
                    
                        //make the background transparent   
                        PaperProps={{
                            style: {
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                position:'fixed',
                                zIndex: 1,
                                width: '100%',
                                height: '100%',
                                top: 10,
                                left: 0,
                            }
                        }}
                        
                        onClose={() => setDrawerOpen(false)}
                        >

                                 <MenuItem
                            
                            onClick={() => {setDrawerOpen(false); 
                                
                                if(value===0){
                                    handleclick(0);
                                }
                                else {
                                    setValue(0);

                                }
                                


                            
                


                            
                            }}
                            style={tabStyle}
                            >בית</MenuItem>
                            <MenuItem onClick={() => {
                                
                                setDrawerOpen(false);
                                if(value===1){
                                    handleclick(1);
                                }
                                else {
                                    setValue(1);

                                }
                            
                            }}
                            
                            style={tabStyle}

                            >שותפים</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); 
                            
                            
                            if(value===2){
                                handleclick(2);
                            }
                            else {
                                setValue(2);

                            }

                            
                        }
                    }
                            style={tabStyle}
                            >שירותים</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); 

                                    if(value===3){
                                    handleclick(3);
                                }
                                else {
                                    setValue(3);

                                }
                             }}
                             style={tabStyle}

                            >אודות</MenuItem>
                             <MenuItem onClick={() => {setDrawerOpen(false); 

                              if(value===4){
                               handleclick(4);
                                            }
                                     else {
                                    setValue(4);

                                           } 


                              }}
                             style={tabStyle}

                            >צור קשר</MenuItem>
                        </Menu>
                        
                    

                        </>
                    ) : (
                        tabs
                    )

                }

</Grid>
       
        </Grid>

  
        <Grid container item xs="8" sm="3"
        
        style={{flexDirection:'row',display:ismobile? 'none' :'flex',justifyContent:'flex-end',
    alignSelf:'center', marginTop:'12px',
    
    }}
    
        >

            <Grid onClick={()=>{
                setValue(4);
            }} item xs="6" sm="10" lg="6" xl="4" style={{display:'flex',justifyContent:'center', borderRadius:'8px', border:'1.333px solid var(--Primary, #5E3BEE)',
        fontFamily:'Assistant', fontSize:'15px', fontWeight:400, color:'var(--Primary, #5E3BEE)', lineHeight:'150%',padding:'12.667px 20.667px', cursor:'pointer'
        }}>

       צור/י קשר

                </Grid>

      

     
   

  
     </Grid>


        </Grid>
   
        </>
    )
}

export default Header;

