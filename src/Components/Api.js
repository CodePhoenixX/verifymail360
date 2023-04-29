import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'

function Api() {   
  return (
    <>
  <Navbar />
    <div className='Dashboard'>
      <Sidenav/>
        <h1>API Page</h1>
    </div>
    </>
  )
}

export default Api
