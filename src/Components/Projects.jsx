import React from "react";
import Grid from '@mui/material/Grid';
import { useContext,useEffect } from 'react';
import Partners from "./Partners";
import hodayaimg from '../assets/images/hodayaimg.png';


//create new component

const Projects = () => {

    



    useEffect(() => {

    

    }, [])

    const myprojects = [
        {
          name:"הודיה וקנין שמלות כלה",
            description:"הודיה היא מעצבת שמלות כלה שעשתה לעצמה שם באיזור השרון. היא חיפשה פתרון מקצה לקצה שיכניס אותה לעולם הדיגיטלי. צעד אחר צעד בנינו לה מערך דיגיטלי שלם ומדהים.",
            image:hodayaimg

        }

     
   
       

    ]

    return (
        <>
         <Grid container id="partners" style={{

display: 'flex',
paddingTop:'100px',
paddingBottom:'100px',
paddingLeft:'40px',
paddingRight:'40px',
flexDirection: 'column',
justifyContent: 'center',
alignItems:'flex-start',
background: 'var(--BG-Shade, #F5FCFF)',
gap:"60px"


}}>

<Grid item xs={12} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'flex-start',
                alignSelf:'stretch',
                gap:'22px',
            }}>
                  <div
                style={{fontFamily:'Assistant',fontSize:'21.333px',fontWeight:600,marginBottom:'5px', color:'#282938',lineHeight:"150%", fontStyle:'normal',letterSpacing:'0.15px'}}
                
                >

                   בתי עסק שכבר קיבלו פתרון דיגיטלי מדהים
                    
                    
                </div>
                <div
                style={{fontFamily:'Assistant',fontSize:'63.333px',fontWeight:700,marginBottom:'10px', color:'#282938',lineHeight:"120%", fontStyle:'normal',letterSpacing:'0.15px'}}
                
                >

                    השותפים העסקיים שלי.

                </div>

                </Grid>

                <Grid item xs={12} style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems:'center',
                gap:"20px",
                flexDirection: 'row',
                alignSelf:'stretch',

            }}>

                {

                   myprojects.map((item) => {

                    return (
                        <Partners
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        />
                    )
                   })


                }



                </Grid>


    </Grid>
    
        </>
    );
};

export default Projects;