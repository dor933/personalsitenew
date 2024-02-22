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







const Header = () => {

  

    const [value, setValue] = useState(0);
    const {menupress,setMenupress}= useContext(AuthContext);

    const navigator = useNavigate();

    const ismobile = useMediaQuery('(max-width:600px)');
    const isbigscreen= useMediaQuery('(min-width:1000px)');
    const [drawerOpen, setDrawerOpen] = useState(false);    

    const tabStyle = {
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'none',
        color: 'black',
        zindex: 1,
      };

      const tabStyleselected = {
        fontFamily: 'Montserrat',
        fontSize: '1rem',
        textTransform: 'none',
        color: "#fa617b",
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
          setValue(newValue);
          if(ismobile){
              setDrawerOpen(false);
              
          }
      }}

      style={{paddingRight: !isbigscreen ? '0px' : '120px'}}

      

      
      >
          <Tab label="Home" component={Link} to="/" 

          style={ value !== 0 ? tabStyle: tabStyleselected }
          

          
          

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
        style={{ zIndex:2,
        boxShadow: '0px 5.333px 80px 0px rgba(0, 0, 0, 0.10)',
        padding:'0px 30px',
        display:'flex',
        paddingBottom: '10px',
        borderBottom: '1px solid #e0e0e0',
        
        
        //make box 
    
    }}

        >
            <Grid container item xs="4" sm="8"
            
            style={{display:'flex',justifyContent:'space-around',alignItems:'center', 
        
        }}

            >

                <Grid item xs="2" style={{display:'flex',justifyContent:'center'}}>
                <img src={drimage} style={{width:"60px"}}/>
                </Grid>

                <Grid item xs="10" style={{display:'flex',justifyContent:'flex-end'}}>

                        

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

  
        <Grid item xs="8" sm="4"
        
        style={{flexDirection:'row',display:'flex',justifyContent:'center',paddingTop:6}}
        >

      <a href="https://github.com/dor933" style={{marginRight:'10%'}} >

         
        <AiFillGithub size={!isbigscreen? "25px": "35px"} color="black" 
        
         

        />
        </a>

        <a href="https://www.facebook.com/kushi101" style={{marginRight:'10%'}}>
        <BsFacebook size={!isbigscreen? "25px": "35px"} color="black"
        
        style={{marginRight:'10%'}}
        />
        </a>
            <a href="https://www.linkedin.com/in/dor-ratzabi-3900b2248/" >

        <FaLinkedin size={!isbigscreen? "25px": "35px"} color="black"
        />
                </a>

        
     

     

     
   

  
     </Grid>


        </Grid>
   
        </>
    )
}

export default Header;

