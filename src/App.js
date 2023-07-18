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


function App() {

  const [menupress, setMenupress] = useState(false);

  return (
    <AuthContext.Provider value={{menupress,setMenupress}}>
    <Router>
    <div className="App">

        <video autoPlay loop muted className='video' >

          <source src={video} type='video/mp4' />
        </video>
        <div className='content' style={{opacity:menupress? "0.2" : "1"}} >
        <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        </Routes>
   

        </div>
        <div className='footer'>
        <p>© 2023 by <a href="https://www.linkedin.com/in/abhishek-kumar-2a1b3a1b0/">Dor Ratzabi</a></p>

        </div>

    
    </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
