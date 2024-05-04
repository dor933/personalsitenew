//create functional component

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Fieldcomp = ({fieldname,iswide,handlechange}) => {

    return (
        <>

<Grid item xs={12} lg={iswide? 8:3.5} style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              justifyContent:'flex-start',
              gap:'20px',
              //make the contects closer
          }}>

        <Grid xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-start',

        }}>

          <span style={{
            fontFamily:'Assistant',
            color:'var(--Heading-color, #282938)',
            fontSize:'18px',
            fontWeight:400,
            fontStyle:'normal',
            lineHeight:"150%",
        }}>{fieldname}</span>

          </Grid>

<Grid xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            alignSelf:'stretch',
        }}>

            {
                iswide?  <textarea onChange={handlechange} placeholder='הקלד את ההודעה שלך...' style={{   padding:'6px',
                borderRadius:'8px',
                border: "1.333px solid var(--Primary, #5E3BEE)",
                background: 'var(--White, #FFF)',
                lineHeight:"150%",
                width:'96%',
                height:'250px',
                fontFamily:'Assistant',
            }}>

            </textarea>  :     <input onChange={handlechange} type="text" style={{
            padding:'6px',
            borderRadius:'8px',
            border: "1.333px solid var(--Primary, #5E3BEE)",
            background: 'var(--White, #FFF)',
            lineHeight:"150%",
            width:'90%',
            alignSelf:'flex-end',
            fontFamily:'Assistant',
            height:'35px',
           
            
          }}>
            
          </input>

        }
            
      

          </Grid>

          </Grid>
          </>
       
    )
}

export default Fieldcomp