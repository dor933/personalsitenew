//create functional component

import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Fieldcomp = ({fieldname,iswide}) => {

    return (
        <>

<Grid container xs={iswide? 12 : 6} style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'flex-start',
              gap:'10px',
              justifyContent:'center',
              flex:'1 1 0',
              //make the contects closer
          }}>

        <Grid xs={12} style={{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent: 'flex-start',
            flex:'1 1 0',
            alignSelf:'stretch',
            paddingRight:'18px',
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
            flex:'1 1 0',
        }}>

            {
                iswide?  <textarea placeholder='type your message...' style={{   padding:'6px',
                borderRadius:'8px',
                border: "1.333px solid var(--Primary, #5E3BEE)",
                background: 'var(--White, #FFF)',
                lineHeight:"150%",
                width:'96%',
                height:'250px',
                fontFamily:'Roboto',
            }}>

            </textarea>  :     <input type="text" style={{
            padding:'6px',
            borderRadius:'8px',
            border: "1.333px solid var(--Primary, #5E3BEE)",
            background: 'var(--White, #FFF)',
            lineHeight:"150%",
            width:'90%',
            alignSelf:'flex-end',
            fontFamily:'Roboto',
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