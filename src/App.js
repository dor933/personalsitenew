import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import video from './videos/Videomy.mp4';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import AuthContext from './Components/Usecontexts/Maincontext';
import poster from './/assets/images/postar.jpg';
import { useMediaQuery } from '@mui/material';
import Popup from './Components/Popup';
import MyForm from './Components/Form';


function App() {

  const [menupress, setMenupress] = useState(false);
  const [popup, setPopup] = useState(false);
  const [issucceeded, setIssucceeded] = useState(false);
  const ismobile = useMediaQuery('(max-width:1700px)');
  const [isincontactpage, setIsincontactpage] = useState(false);
  const [ishomepage, setIshomepage] = useState(false);
  const [isinprojectpage, setIsinprojectpage] = useState(false);


  return (
    <AuthContext.Provider value={{menupress,issucceeded,ishomepage,setIshomepage,isinprojectpage,setIsinprojectpage,setIssucceeded,setMenupress,popup,setPopup, isincontactpage, setIsincontactpage}}>
    <Router>
    <div className={`App ${ismobile? "inmobile" : ""}`}>

     
       {
        !ismobile &&   <video autoPlay loop muted className='video' poster={poster}   >

        <source src={video} type='video/mp4' />
      </video>
       }

      
        <div className='content' style={{opacity:menupress || popup? "0.2" : "1"}} >

          { ishomepage &&
        <div style={{position:'fixed', flexDirection:'row'
        , zIndex:10, left:"52%",top:"5%",
        }}>

            <MyForm type="other" />

            </div>
}
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>

         


         
         
     
          
      
         
       
       

        </div>
       
 

        {
              popup && <Popup/>
           }


       


   
      
    
    </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
