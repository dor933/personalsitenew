import React from "react";
import Grid from '@mui/material/Grid';
import Product from "./Product";
import prod_chain1 from '../assets/images/prod_chain1.png';
import tag1 from '../assets/images/tag1.png';
import web_pen from '../assets/images/web_pen.png';
import feather_pen from '../assets/images/feather_pen.png';
import { useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function Package() {

    const theme = useTheme();

    const firstskill={
        title:"תיבת תוכן",
        description:"בניית אתר מודרני ומתקדם בטכנולוגיות החדישות ביותר. בנוסף לעיצוב הויזואלי שייעשה בהתאם לדרישות הלקוח ותוך כדי שיתוף פעולה לאורך כל הדרך, הרחבות כגון שליחת הודעות למייל ולטלפון ואפשרות לקביעת פגישות דרך יומן גוגל, כלולות במחיר.",
        image:tag1
    }

    const secondskill={
        title:"בניית אתר",
        description:"בניית אתר מודרני ומתקדם בטכנולוגיות החדישות ביותר. בנוסף לעיצוב הויזואלי שייעשה בהתאם לדרישות הלקוח ותוך כדי שיתוף פעולה לאורך כל הדרך, הרחבות כגון שליחת הודעות למייל ולטלפון ואפשרות לקביעת פגישות דרך יומן גוגל, כלולות במחיר.",
        image:web_pen
    }

    const thirdskill={
        title:"כתיבת תוכן",
        description:"על מנת למשוך מבקרים לאתר ולשפר את דירוג האתר במנועי החיפוש, על האתר להכיל תוכן איכותי ורלוונטי. כתיבת תוכן היא חלק בלתי נפרד מבניית פתרון דיגיטלי, ובתחום זה אנו מציעים שירות חדשני המשלב את יכולות הבינה המלאכותית בכתיבת תוכן לדפי האתר ולרשתות החברתיות."
        ,
        image:feather_pen
    }

    const fourthskill={
        title:"תיבת תוכן",
        description:"בניית אתר מודרני ומתקדם בטכנולוגיות החדישות ביותר. בנוסף לעיצוב הויזואלי שייעשה בהתאם לדרישות הלקוח ותוך כדי שיתוף פעולה לאורך כל הדרך, הרחבות כגון שליחת הודעות למייל ולטלפון ואפשרות לקביעת פגישות דרך יומן גוגל, כלולות במחיר.",
        image:prod_chain1
    }

    const skills=[firstskill,secondskill,thirdskill,fourthskill]
//create a variable that will represent lg screen
const isLg = useMediaQuery(theme.breakpoints.up('lg'));


    return (
        <Grid id="package" container style={{

            display: 'flex',
            paddingTop:'150px',
            paddingBottom:'150px',
            paddingLeft:'50px',
            paddingRight:'50px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems:'flex-start',

        }}>

            <Grid container item xs={12} style={{

                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:'flex-start',
                gap:"21px",


            }}
            >

                <Grid item xs={12} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems:'center',
                    gap:"10px"
                }}>
                    <div style={{
                        textAlign:'center',
                        fontFamily:'Assistant',
                        fontWeight:600,
                        lineHeight:"150%",
                        color:"#282938"
                    }}>
                        לבנות אתר לבד זה לא מספיק. 
                    </div>

                    </Grid>

                    <Grid item xs={12} style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems:'center',
                        gap:"10px"
                    }}>

                
                <div style={{
                   

                    fontFamily:'Assistant',
                    fontWeight:700,
                    lineHeight:"120%",
                    color:"#282938",
                    fontSize: "64px",
                    fontStyle: "normal",
                }}>

                     השירותים הכלולים בחבילה.
                </div>

                </Grid>

                {
                    isLg?    <Grid item xs={12} style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems:'center',
                        gap:"20px",
                        flexDirection: 'row',
        
                    }} >
        
                        {
        
                          
                            skills.map((item) => {
                                return (
                                    <Product name= {item.title} image= {item.image} description={item.description}/>
                                )
                            })
                        }
                    </Grid> :  <Grid container style={{
                display: 'flex',
                alignItems:'center',
                flexDirection: 'row',


            }} >



                {

                    

                  
                    skills.map((item) => {
                        return (
                            //הוספת השורה הבודדת שבה תהיה קומפוננטת השירות צריכה להיות רק מתחת לגודל md
                            // <Grid item xs={12} style={{
                            //     display: 'flex',
                            //     justifyContent: 'flex-start',
                            //     alignItems:'center',
                            //     gap:"20px",
                            //     flexDirection: 'row',
                            //     paddingRight:'30px'
                    
                            // }} >
                            <Product name= {item.title} image= {item.image} description={item.description}/>
                            // </Grid>
                        )
                    })
                }

                </Grid>
                }

               
                    



            </Grid>


           

         

            </Grid>

    );

}

