import React from 'react'
import '../CSS/AddNewMember.css'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function AddNewMember() {
  return (
    <>

      <Navbar />
      <Sidenav />

      {/* <!-- Main Site --> */}
      <main>
        <div className="Add-member-container">
          <div className="box-nav">
            <div className="filter">
              <a href="/"><i className='bx bxs-chevrons-left'></i> <Link to="/team">Back to Members</Link> </a>
            </div>
          </div>
          <div className="Add-member-title">
            <h2 className="heading">Add New Member</h2>
            {/* <button className="Add-member" id='keygen'>Generate New Api Key</button> */}


          </div>
          <form>
            <div className="new_Api-user">
              <div className="Add-member-form">
                <div className="Add-member-profile-form">
                  <input type="text" id="name" required autoComplete='off' />
                  <label htmlFor="name">Name </label>
                </div>

                <div className="Add-member-profile-form">
                  <input type="text" id="name" required autoComplete='off' />
                  <label htmlFor="name">Email </label>
                </div>

                <div className="Add-member-profile-form">
                  <input type="text" id='' required autoComplete='off' />
                  <label htmlFor="name">Yahan Ki Likhiye</label>
                </div>
                <button className="Add-member">Add Me</button>

              </div>
            </div>



          </form>
        </div>
      </main>

    </>
  )
}

export default AddNewMember
