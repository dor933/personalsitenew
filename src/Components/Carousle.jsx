import React from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import Button from '@mui/material/Button';
import image1 from '../assets/images/personalimages/1.jpg';
import image2 from '../assets/images/personalimages/2.jpg';
import image3 from '../assets/images/personalimages/3.jpg';

const AdvancedCarousel = () => {
  const { scrollRef, pages, activePageIndex, next, prev, goTo } = useSnapCarousel();

  // Replace this with your array of image URLs
    const imageUrls = [image1, image2, image3];
    
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          scrollSnapType: 'x mandatory',
          padding:0
        }}
      >
        {imageUrls.map((url, i) => (
          <li
            style={{
              width: '250px',
              height: '250px',
              marginRight:"20px",
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img src={url} alt={`Item ${i}`} style={{ width: '100%', height: '100%',borderRadius:"10px" }} />
          </li>
        ))}
      </ul>

      <div style={{marginRight:"20px"}}> 
    
      <Button onClick={() => prev()}>Prev</Button>
        <Button onClick={() => next()}>Next</Button>
        </div>

  
    </>
  );
};

export default AdvancedCarousel;