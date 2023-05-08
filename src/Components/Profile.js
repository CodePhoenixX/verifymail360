import React from 'react'
import '../CSS/Profile.css'
import Sidenav from './Sidenav';
import Navbar from './Navbar';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function Profile() {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
            <>
                <Navbar />
                <Sidenav />

                {/* Model for delete popup */}

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Account</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are You Sure You Wnat to Delete This Account.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button className="btn btn-danger">Delete</Button>
                    </Modal.Footer>
                </Modal>

                <div className="main-container Dashboard">
                    <div className="profile-page">
                        <h2 className="profile-heading">Profile Page</h2>

                        <div className="input-box-container">
                            <div className="form-flex">
                                <div className="profile-form">
                                    <input type="text" id="name" required autoComplete='off' />
                                    <label htmlFor="name">First Name </label>
                                </div>

                                <div className="profile-form">
                                    <input type="text" id="name" required autoComplete='off' />
                                    <label htmlFor="name">Last Name </label>
                                </div>



                            </div>

                            <div className="form-flex-1">

                                <div className="profile-form-1">
                                    <input type="email" id="email" required autoComplete='off' />
                                    <label htmlFor="email">Email ID </label>
                                </div>

                            </div>

                            <div className="form-flex">

                                <div className="profile-form">
                                    <input type="password" id="password" required autoComplete='off' />
                                    <label htmlFor="password">Current Password </label>
                                </div>

                                <div className="profile-form">
                                    <input type="password" id="password" required autoComplete='off' />
                                    <label htmlFor="password">New Password </label>
                                </div>

                            </div>

                        </div>

                        <div className="form-flex">

                            <div className="profile-form">
                                <input type="password" id="password" required autoComplete='off' />
                                <label htmlFor="password">Confirm Password </label>
                            </div>

                            <button type='submit' className="saveBtn">Save</button>

                        </div>



                    </div>

                    <div className="delete-account">
                        <a href='#' onClick={handleShow}>DELETE ACCOUNT <i className='bx bxs-chevrons-right' styles='color: #0d6efd'></i></a>
                    </div>

                </div>
            </>
        )
    }
   

export default Profile
