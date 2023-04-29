import React from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Navbar from './Navbar'

function Subscription() {
    return (
      <>
    <Navbar />
      <Box sx={{ display: 'flex' }}>
        <div className='Dashboard'>
          <Sidenav />
          <h1>Subscription Page</h1>
        </div>
        
      </Box>
      </>
  
    )
  }
  
  export default Subscription
