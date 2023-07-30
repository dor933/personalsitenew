import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import Button from '@mui/material/Button';
import { useMediaQuery,useTheme } from '@mui/material';


const AdvancedCarousel = ({obj}) => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  const ismobile = useMediaQuery('(max-width:600px)');

  // Replace this with your array of image URLs
    const imageUrls = obj.images;
    const type= obj.type;
    
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
            width: "100%",
            alignContent:"center",
            listStyle: 'none',
            marginTop:"20px",
            marginBottom:"20px",
            paddingLeft:12,


            
          
        }}
      >
        {imageUrls.map((url, i) => (
          <li
            style={{
              width:  '300px',
              height: '500px',
              objectFit: 'cover',
              marginRight:"20px",
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              scrollSnapAlign: 'start',
              //make the image look sharp
              imageRendering:"auto",
              opacity:0.9,

            }}
          >
            <img src={url} alt={`Item ${i}`} style={{ width: '100%', height: '100%',borderRadius:"10px" }} />
          </li>
        ))}
      </ul>

      <div style={{marginRight:"0px"}}> 
    
      <Button onClick={() => prev()} style={{color:'#f02e1d',fontFamily:'Anton'}}>Prev</Button>
        <Button onClick={() => next()} style={{color:'#f02e1d',fontFamily:'Anton'}} >Next</Button>
        </div>

  
    </>
  );
};

export default AdvancedCarousel;