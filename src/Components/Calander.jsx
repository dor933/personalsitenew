// src/Calendar.js
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField } from '@mui/material';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
    '& .MuiPickersDay-root': {
      fontFamily: 'Assistant',
      fontSize: '0.85rem', // Adjusted font size
    },
    '& .MuiPickersCalendarHeader-label': {
      fontFamily: 'Assistant',
      fontSize: '1.1rem', // Adjusted font size
      //center the text
    },

    '& .MuiPickersCalendarHeader-labelContainer': {
        justifyContent: 'center', // Center the text
        paddingLeft:'20px'

    },
    '& .MuiPickersCalendarHeader-switchViewIcon': {
      color: '#000000', // Customize the color for the switch view icon
    },
    '& .MuiPickersCalendarHeader-iconButton': {
      color: '#000000', // Customize the color for the navigation buttons
      
    },
    '& .MuiDayCalendar-weekContainer': {
        height:'42px'
  },
    
  }));


const Calendar = ({ischecked}) => {
  const [value, setValue] = React.useState(new Date());

  console.log(ischecked);
  

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CustomStaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={value}
            disabled={!ischecked}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params}  />}
          />
        </LocalizationProvider>
      </Paper>
   
    </Box>
  );
};

export default Calendar;
