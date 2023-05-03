import React from 'react'
import '../CSS/Profile.css'
import Sidenav from './Sidenav';
import Navbar from './Navbar';

function Profile() {
    return (
        <>
            <Navbar />
            <Sidenav />
            <div className="main-container Dashboard">
                <div className="profile-page">
                    <h2 className="profile-heading">Profile Page</h2>

                    <div className="input-box-container">
                        <div className="form-flex">
                            <div className="profile-form">
                                <input type="text" id="name" required autoComplete='off' />
                                <label htmlFor="name">First Name: </label>
                            </div>

                            <div className="profile-form">
                                <input type="text" id="name" required autoComplete='off' />
                                <label htmlFor="name">Last Name: </label>
                            </div>

                            <div className="profile-form">
                                <input type="email" id="email" required autoComplete='off' />
                                <label htmlFor="email">Email ID: </label>
                            </div>

                        </div>

                        <div className="form-flex">

                            <div className="profile-form">
                                <input type="password" id="password" required autoComplete='off' />
                                <label htmlFor="password">Current Password: </label>
                            </div>

                            <div className="profile-form">
                                <input type="password" id="password" required autoComplete='off' />
                                <label htmlFor="password">New Password: </label>
                            </div>

                            <div className="profile-form">
                                <input type="password" id="password" required autoComplete='off' />
                                <label htmlFor="password">Confirm Password: </label>
                            </div>

                        </div>
                    </div>

                    <button type='submit' className="saveBtn">Save</button>


                </div>

                <div className="delete-account">
                    <a href="/">DELETE ACCOUNT <i className='bx bxs-chevrons-right' styles='color:#0d6efd' ></i></a>
                </div>

            </div>
        </>
    )
}

export default Profile;
