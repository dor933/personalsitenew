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
import { useTheme } from '@mui/material/styles';
//bring router
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';









const Header = () => {



    const theme= useTheme();
    
    const {value, setValue} = useContext(AuthContext);
    const {ishomepage, setIshomepage} = useContext(AuthContext);
    const {menupress,setMenupress}= useContext(AuthContext)
    const ismobile = useMediaQuery('(max-width:600px)');
    const [drawerOpen, setDrawerOpen] = useState(false);   
    const isntmd = useMediaQuery(theme.breakpoints.down('md')); 
    


    const handleclick= (value) => {

       
        const section= ['header','partners','none','package','about','contact'][value];

        if(section === 'none'){
            return;
        }

        
            const sectionelement = document.getElementById(`${section}`);
            if(sectionelement){
          console.log(sectionelement);
          sectionelement.scrollIntoView({behavior:'smooth',
        
        block:'start'})
            }
            //scroll more down 
            
    
    }
 

        

    const tabStyle = {
        fontFamily: 'Assistant',
        fontSize: isntmd? '1.1rem': '1rem',
        textTransform: 'none',
        color: 'black', 
        zindex:ismobile? 2: 1,
        fontWeight:isntmd? 600:400
        
      };

      const tabStyleselected = {
        fontFamily: 'Assistant',
        fontSize: isntmd? '1.1rem':'1rem',
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

          handleclick(newValue);
        

          
         
           
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
          component={!ishomepage?Link:null} to="/"

          

          
          

          />
           <Tab label="שותפים"

style={ value !== 1 ? tabStyle: tabStyleselected }
component={!ishomepage?Link:null} to="/"






/>

<Tab label="בלוג"

style={ value !== 2 ? tabStyle: tabStyleselected }
component={ishomepage?Link:null} to="/blog"






/>
             <Tab label="שירותים" 
          style={ value !== 3 ? tabStyle: tabStyleselected }

          component={!ishomepage?Link:null} to="/"

         
          
          />
          
     
          <Tab label="אודות"
          style={ value !== 4 ? tabStyle: tabStyleselected }
          component={!ishomepage?Link:null} to="/"

          />
       
          <Tab label="צור קשר"
          style={ value !== 5 ? tabStyle: tabStyleselected }
          component={!ishomepage?Link:null} to="/"


          />



      </Tabs>
      );

    return (
        <>
        <Grid id="header" container  direction='row' 
        justifyContent="space-between"
        style={{ zIndex:2,
        boxShadow: ishomepage? '0px 5.333px 80px 0px rgba(0, 0, 0, 0.10)' : null,
        padding:'0px 30px',
        display:'flex',
        paddingBottom: isntmd? '48px': '22px',
        borderBottom: '1px solid #e0e0e0',
        
        
        //make box 
    
    }}

        >
            <Grid container item xs="12" md="9"
            
            style={{display:'flex',justifyContent:'space-around',alignItems:'center', 
        
        }}

            >

                <Grid item xs="2" style={{display:'flex',justifyContent:'center'}}>
                <img src={mylogo} alt='logo' style={{width:isntmd? "100px":"140px",position:'absolute', 
                
            
            marginTop:isntmd? "-25px":'-61px',

            }}/>
                </Grid>

                <Grid item xs="10" style={{display:'flex',justifyContent:'flex-end',}}>

                        

                {
                    isntmd ? (
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
                                
                                    handleclick(0);
                                
                              
                                


                            
                


                            
                            }}
                            style={tabStyle}
                            >בית</MenuItem>
                            <MenuItem onClick={() => {
                                
                                setDrawerOpen(false);
                                    handleclick(1);
                                
                               
                            
                            }}
                            
                            style={tabStyle}

                            >שותפים</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); 
                            
                            
                                handleclick(2);
                         

                            
                        }
                    }
                            style={tabStyle}
                            >שירותים</MenuItem>
                            <MenuItem onClick={() => {setDrawerOpen(false); 

                                    handleclick(3);
                                
                             
                             }}
                             style={tabStyle}

                            >אודות</MenuItem>
                             <MenuItem onClick={() => {setDrawerOpen(false); 

                               handleclick(4);
                                            
                                 


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

  
        <Grid container item sm="0" md="3"
        
        style={{flexDirection:'row',display:isntmd? 'none' :'flex',justifyContent:'flex-end',
    alignSelf:'center', marginTop:'12px',
    
    }}
    
        >

            <Grid onClick={()=>{
                handleclick(4);
            }} item xs="8" lg="4" style={{display:'flex',justifyContent:'center', borderRadius:'8px', border:'1.333px solid var(--Primary, #5E3BEE)',
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

