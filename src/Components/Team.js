import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import '../CSS/Team.css'

function Team() {
    return (
      <>
      <Navbar />
    <Sidenav />
           {/* <!-- Main Site --> */}
      <main id="team-main" className='Team-margin'>
        <div className="Team-container">
          <div className="Team-nav d-flex justify-between">
            <a href="" className="Team-border-shadow">
              <span className="Team-text-gradient"> <Link to = "/add-new-member">Add Member</Link> <i className='bx bxs-user'></i></span>
            </a>
          </div>

          {/* <!-- form handling --> */}
          <form action="/" method="POST">
            <table className="Team-table">
              <thead className="Team-thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Amit Kumar</th>
                  <th>amit@gmail.com</th>
                  <th>Active</th>
                  <td>
                    {/* <a href="" className="btn Team-border-shadow update">
                      <span className="Team-text-gradient"><i className='bx bxs-edit-alt'></i></span>
                    </a> */}
                    <a className="btn Team-border-shadow delete">
                      <span className="Team-text-gradient"><i className='bx bxs-trash-alt'></i></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </main>
      {/* <!-- /Main Site --> */}
      </>
  
    )
  }
  
  export default Team
