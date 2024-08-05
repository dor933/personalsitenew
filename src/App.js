import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import AuthContext from './Components/Usecontexts/Maincontext';
import { useMediaQuery } from '@mui/material';
import Popup from './Components/Popup';
import { useEffect } from 'react';
import Main from './Components/Blog/Main';


function App() {

  const [menupress, setMenupress] = useState(false);
  const [popup, setPopup] = useState(false);
  const [issucceeded, setIssucceeded] = useState(false);
  const [isvalidationerror, setIsvalidationerror] = useState(false);
  const ismobile = useMediaQuery('(max-width:1700px)');
  const [isincontactpage, setIsincontactpage] = useState(false);
  const [ishomepage, setIshomepage] = useState(true);
  const [isinprojectpage, setIsinprojectpage] = useState(false);
  const [value, setValue] = useState(0);


  
  


  return (
    <AuthContext.Provider value={{menupress,value,setValue,isvalidationerror,setIsvalidationerror,issucceeded,ishomepage,setIshomepage,isinprojectpage,setIsinprojectpage,setIssucceeded,setMenupress,popup,setPopup, isincontactpage, setIsincontactpage}}>
    <Router>

    <div>

     
     
       



        <div className='content' style={{opacity:menupress || popup? "0.2" : "1"}} >



          

<Header/>


        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Main />} />
      
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
