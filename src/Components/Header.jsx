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
import { useNavigate } from 'react-router-dom';
import AuthContext from './Usecontexts/Maincontext';
import drimage from '../assets/images/DR.png'
import mylogo from '../assets/images/my_logo.png'







const Header = () => {

  

    const [value, setValue] = useState(0);
    const {menupress,setMenupress}= useContext(AuthContext);

    const navigator = useNavigate();

    const ismobile = useMediaQuery('(max-width:600px)');
    const isbigscreen= useMediaQuery('(min-width:1000px)');
    const [drawerOpen, setDrawerOpen] = useState(false);    

    const tabStyle = {
        fontFamily: 'Assistant',
        fontSize: '1rem',
        textTransform: 'none',
        color: 'black', 
        zindex: 1,
        fontWeight:400
        
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
      //create space between the tabs






      onChange={(event, newValue) => {
          setValue(newValue);
          if(ismobile){
              setDrawerOpen(false);
              
          }
      }}

      style={{//align to center 

        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'85%',
        marginTop:'12px',

       
    
    }}

      

      
      >
          <Tab label="בית" component={Link} to="/" 

          style={ value !== 0 ? tabStyle: tabStyleselected }
          

          
          

          />
          <Tab label="אודות" component={Link} to="/about" 
          style={tabStyle}
          
          />
          <Tab label="שירותים" component={Link} to="/projects"
          style={tabStyle}

          
          />
          <Tab label="צור קשר" component={Link} to="/contact"
          style={tabStyle}

          />
      </Tabs>
      );

    return (
        <>
        <Grid container  direction='row' 
        justifyContent="space-between"
        style={{ zIndex:2,
        boxShadow: '0px 5.333px 80px 0px rgba(0, 0, 0, 0.10)',
        padding:'0px 30px',
        display:'flex',
        paddingBottom: '22px',
        borderBottom: '1px solid #e0e0e0',
        
        
        //make box 
    
    }}

        >
            <Grid container item xs="4" sm="9"
            
            style={{display:'flex',justifyContent:'space-around',alignItems:'center', 
        
        }}

            >

                <Grid item xs="2" style={{display:'flex',justifyContent:'center'}}>
                <img src={mylogo} alt='logo' style={{width:"140px",position:'absolute', 
                
            
            marginTop:'-61px',

            }}/>
                </Grid>

                <Grid item xs="10" style={{display:'flex',justifyContent:'flex-end',}}>

                        

                {
                    ismobile ? (
                        <>
                        
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setDrawerOpen(!drawerOpen)}>
                            <MoreVertIcon style={{color:"#ffffff", width:"90%"}}  />
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
                            
                            onClick={() => {setDrawerOpen(false); setValue(0) 
                            
                                //navigate to the home page

                                navigator("/")


                            
                            }}
                            style={tabStyle}
                            >Home</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); setValue(1); navigator("/about")}}
                            
                            style={tabStyle}

                            >About</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); setValue(2); navigator("/projects")}}
                            style={tabStyle}
                            >Projects</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); setValue(3); navigator("/contact")}}
                             style={tabStyle}

                            >Contact</MenuItem>
                        </Menu>
                        
                    

                        </>
                    ) : (
                        tabs
                    )

                }

</Grid>
       
        </Grid>

  
        <Grid container item xs="8" sm="3"
        
        style={{flexDirection:'row',display:'flex',justifyContent:'flex-end',
    alignSelf:'center', marginTop:'12px',
    }}
    
        >

            <Grid item xs="6" sm="10" lg="6" xl="4" style={{display:'flex',justifyContent:'center', borderRadius:'8px', border:'1.333px solid var(--Primary, #5E3BEE)',
        fontFamily:'Assistant', fontSize:'15px', fontWeight:400, color:'var(--Primary, #5E3BEE)', lineHeight:'150%',padding:'12.667px 20.667px'
        }}>

       צור/י קשר

                </Grid>

      

     
   

  
     </Grid>


        </Grid>
   
        </>
    )
}

export default Header;

