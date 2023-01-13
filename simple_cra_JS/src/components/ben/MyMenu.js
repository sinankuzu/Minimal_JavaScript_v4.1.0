import { Box,Link } from '@mui/material'
import { forwardRef } from 'react'
import PropTypes from 'prop-types';


import { Link as RouterLink } from 'react-router-dom';
// @mui




const MyMenu = (({ sx }) => {
  
    const menu = (
      <Box 
      component = "div"
      sx={{
        width:"300px",
        height:"300px",
        display:"inline-flex",
        textAlign:"center",
        border:"1px solid purple",
        ...sx,
      }}

      >hey there
          <Box
          component = "h1"
          sx={{
            border:"1px solid purple",
       
          }}>
         
      hey there
      </Box></Box>
  
    
    )
    return menu;
}

)

MyMenu.propTypes = {
  sx: PropTypes.object
};
export default MyMenu