import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'

function BulkVerify() {
  return (
    <>
    <Navbar />
    <div className='Dashboard'>
        <Sidenav/>
        <h1>Bulk-Verify</h1>
    </div>
    </>
  )
}
export default BulkVerify