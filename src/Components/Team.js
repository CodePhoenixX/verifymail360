import React from 'react'
import Sidenav from './Sidenav'
import Box from '@mui/material/Box';
import Navbar from './Navbar'

function Team() {
    return (
      <>
      <Navbar />
      <Box sx={{ display: 'flex' }}>
        <div className='Dashboard'>
          <Sidenav />
          <h1>Team Page</h1>
        </div>
        
      </Box>
      </>
  
    )
  }
  
  export default Team
