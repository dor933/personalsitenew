import * as React from 'react';
import Box from '@mui/material/Box';

export default function BoxSx() {
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: '#e8e8e8',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.5, 0.1, 0.1],
        },
      }}
    >

    </Box>
  );
}