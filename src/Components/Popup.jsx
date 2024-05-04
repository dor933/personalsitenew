import React from 'react';
import '../popup.css';
import CheckIcon from '@mui/icons-material/Check';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import AuthContext from './Usecontexts/Maincontext';
import { useContext } from 'react';
import ErrorIcon from '@mui/icons-material/Error';

const Popup = () => {

    const issmall = useMediaQuery('(max-width:600px)');
    const {popup,setPopup}= useContext(AuthContext);
    const {issucceeded,setIssucceeded}= useContext(AuthContext);
    const {isvalidationerror,setIsvalidationerror}= useContext(AuthContext);

    const closePopup = () => {
        setIssucceeded(false);
        setIsvalidationerror(false);
        setPopup(false);
    }



    return (
            <div className="rectengal" style={{width:issmall? "300px" : "400px", padding: "20px" , height:issmall? "180px" : "250px",position:'fixed'}}>
                {
                    issucceeded &&                <svg xmlns="http://www.w3.org/2000/svg" width={ issmall? "30": "50"} height={issmall? "30":"50"} viewBox="0 0 390 389" fill="none">
                    <path d="M368.455 215.212C354.558 284.699 302.165 350.128 228.647 364.749C192.792 371.889 155.597 367.535 122.36 352.307C89.1226 337.079 61.5369 311.753 43.5307 279.935C25.5245 248.117 18.0157 211.429 22.0735 175.095C26.1313 138.761 41.5488 104.634 66.1308 77.5722C116.551 22.0382 201.686 6.75099 271.173 34.5458" stroke="#20AE5C" stroke-width="41.6923" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                }
 
                  {
                    issucceeded?                 <CheckIcon fontSize={issmall? 'small':'large'} style={{position:'absolute', paddingTop: issmall?3.7 :6,paddingLeft:5.5,color:'green'}} />
                    : <ErrorIcon fontSize={issmall? 'small':'large'} style={{position:'absolute', paddingTop: issmall?3.7 :6,paddingLeft:5.5,color:'red'}} />

                  }

                <div style={{justifyContent:'center',alignItems:'center', textAlign:'center',marginTop: issucceeded? 0 : 30}}>
                    <h1 style={{fontSize:issmall? '15px':'25px',paddingTop:issmall? 0:10,fontFamily: 'Assistant',color:issucceeded? 'green' : 'red'}}>
                         { issucceeded ? "הודעה נשלחה!": "שגיאה"
                         
                         }
                        </h1>
                    <span style={{fontSize:issmall? '12px':'15px',fontFamily: 'Assistant',fontWeight:'bold'}}>

                        {
                            issucceeded ? "איזה כיף! ההודעה נשלחה בהצלחה" : isvalidationerror? "נראה שהטופס מולא באופן חלקי או שגוי" : "נראה שמשהו השתבש"
                        }
                        
                        </span>
                    <br/>
                    <span style={{fontSize:issmall? '12px':'15px',fontFamily: 'Assistant'}}>
                        
                        {
                            issucceeded ? "אצור איתך קשר ב-24 השעות הקרובות.": isvalidationerror? "בבקשה מלא את השדות בערכים תקינים ונסה שוב" : "נסה שוב מאוחר יותר, מבטיח שיסתדר!"
                        }

                        </span>
                    <br/>

                    <Button variant="contained" style={{height:"30px",width:"150px", marginTop:"30px",backgroundColor:issucceeded?'green': 'red', color:'#ffffff', fontFamily:'Assistant',fontWeight:'bold'}} onClick={closePopup}>אישור</Button>



                </div>
            </div>
    )
}

export default Popup;