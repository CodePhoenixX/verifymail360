import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import '../CSS/Api.css'
import { Link } from 'react-router-dom'

function Api() {
  return (
    <>
      <Navbar />
      <Sidenav />

      {/* <!-- Main Site --> */}
      <main id="site-main">
        <div className="container">
          <div className="box-nav d-flex justify-between">
            <a href="" className="border-shadow">
              <span className="text-gradient"> <Link to = "/add-new-api">Add New API</Link> <i className='bx bx-pie-chart-alt-2'></i></span>
            </a>
          </div>

          {/* <!-- form handling --> */}
          <form action="/" method="POST">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Status</th>
                  <th>API Key</th>
                  <th>Activation Date</th>
                  <th>Disabled Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Amit Kumar</th>
                  <th>Active</th>
                  <th>fkjdhciu837e9cjihbcdieh</th>
                  <th>May 2 2023, 2.26PM</th>
                  <th>-</th>
                  <td>
                    {/* <a href="" className="btn border-shadow update">
                      <span className="text-gradient"><i className='bx bxs-edit-alt'></i></span>
                    </a> */}
                    <a className="btn border-shadow delete">
                      <span className="text-gradient"><i className='bx bxs-trash-alt'></i></span>
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

export default Api
