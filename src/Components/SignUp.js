import React from 'react'
// import Navbar from './Navbar'
// import Sidenav from './Sidenav'
import styles from '../CSS/Login.css'
import {Link} from 'react-router-dom';

function SignUp() {
    
    function showPassword() {
        var passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }

    return (
        <>
            <div className="containerCustom Dashboard-1">
                <div className="contact-boxCustom">
                    <div className="leftCustom"></div>
                    <div className="rightCustom">
                        <h2 className='loginHeading'>Login Form</h2>
                        <div className="form-group-1">
                            <input type="text" id="email" required autoComplete='off' />
                            <label htmlFor="email">Your Email: </label>
                        </div>

                        <div className="form-group-1">
                            <input type="password" id="password" required />
                            <label htmlFor="email">Your Password: </label>
                        </div>

                        <div className="div-flex">
                        <p className='check'><input className="check-mark" type="checkbox" onClick={showPassword}/> 
                        Show Password
                        <Link to = "/forgot-password">
                            <a href="" className='check-1'>Forgot Password</a>
                        </Link>
                        </p>
                        <button type='submit' className="btnCustom">Login</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp