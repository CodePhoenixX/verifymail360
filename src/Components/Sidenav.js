import React from 'react'
import styles from '../CSS/Sidenav.css'
import { Link, useLocation } from 'react-router-dom'




export default function Sidenav() {

  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <>
      <div className="sidebar">
        <ul className="nav-list">
          <li className={isActive('/dashboard')}>
            {/* <Link to="/dashboard">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
              <span className="tooltip">Dashboard</span>
            </Link> */}
          </li>
          <li className={isActive('/single-verify')}>
            <Link to="/single-verify">
              <i className='bx bx-envelope'></i>
              <span className="links_name">single-verify</span>
            </Link>
            <span className="tooltip">Single Verify</span>
          </li>
          <li className={isActive('/bulk-verify')}>
            <Link to="/bulk-verify">
              {/* <i className='bx bxs-envelope'></i> */}
              <i class='bx bx-network-chart'></i>
              <span className="links_name">bulk-verify</span>
            </Link>
            <span className="tooltip">Bulk Verify</span>
          </li>
          
          <li className={isActive('/api')}>
            <Link to="/api">
              <i className='bx bx-pie-chart-alt-2' ></i>
              <span className="links_name">Api</span>
            </Link>
            <span className="tooltip">Api</span>
          </li>
          <li className={isActive('/team')}>
            <Link to="/team">
              <i className='bx bx-user-plus'></i>
              <span className="links_name">team</span>
            </Link>
            <span className="tooltip">Team</span>
          </li>
          <li className={isActive('/subscription')}>
            <Link to="/subscription">
              <i className='bx bx-wallet-alt'></i>
              <span className="links_name">Subscription</span>
            </Link>
            <span className="tooltip">Subscription</span>
          </li>
          

        </ul>
      </div>

    </>
  )
}
