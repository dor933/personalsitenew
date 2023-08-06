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






const Header = () => {

  

    const [value, setValue] = useState(0);
    const {menupress,setMenupress}= useContext(AuthContext);

    const navigator = useNavigate();

    const ismobile = useMediaQuery('(max-width:600px)');
    const isbigscreen= useMediaQuery('(min-width:1000px)');
    const [drawerOpen, setDrawerOpen] = useState(false);   
    const [ispagescrolled, setIspagescrolled] = useState(false);

    const tabStyle = {
        fontFamily: 'Montserrat',
        fontSize: ismobile ? '1rem' : '1.25rem',
        fontWeight: 'bold',
        textTransform: 'none',
        color: '#ffffff',
        zindex: 1,
      };

      useEffect(() => {
        if(drawerOpen){
            setMenupress(true);
        }
        else{
            setMenupress(false);
        }
    }, [drawerOpen])

      const tabs= (  <Tabs centered={!ismobile} indicatorColor='primary'
      value={value} 
      onChange={(event, newValue) => {
          setValue(newValue);
          if(ismobile){
              setDrawerOpen(false);
              
          }
      }}

      style={{paddingRight: !isbigscreen ? '0px' : '240px'}}


      

      
      >
          <Tab label="Home" component={Link} to="/" 

          style={tabStyle}

          
          

          />
          <Tab label="About" component={Link} to="/about" 
          style={tabStyle}
          
          />
          <Tab label="Projects" component={Link} to="/projects"
          style={tabStyle}

          
          />
          <Tab label="Contact" component={Link} to="/contact"
          style={tabStyle}

          />
      </Tabs>
      );

    return (
        <>
        <Grid container  direction='row' 
        justifyContent="space-between"
        style={{height:"5%",
        marginTop:ismobile ? "0px" : "10px",


       

        

        
        
        
    
    }}

        >
            <Grid item xs="4" sm="8"
            
            style={{textAlign:'center'}}

            >
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

  
        <Grid item xs="8" sm="4"
        
        style={{flexDirection:'row',display:'flex',justifyContent:'center',paddingTop:6}}
        >

      <a href="https://github.com/dor933" style={{marginRight:'10%'}} >

         
        <AiFillGithub size={!isbigscreen? "25px": "35px"} color="#ffffff" 
        
         

        />
        </a>

        <a href="https://www.facebook.com/kushi101" style={{marginRight:'10%'}}>
        <BsFacebook size={!isbigscreen? "25px": "35px"} color="#ffffff"
        
        style={{marginRight:'10%'}}
        />
        </a>
            <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/" >

        <FaLinkedin size={!isbigscreen? "25px": "35px"} color="#ffffff"
        />
                </a>

     

     

     
   

  
     </Grid>


        </Grid>
   
        </>
    )
}

export default Header;

