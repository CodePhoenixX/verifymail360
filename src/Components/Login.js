import React from 'react'
// import Navbar from './Navbar'
// import Sidenav from './Sidenav'
import '../CSS/Login.css'
import { Link } from 'react-router-dom';

function Login() {

    function showPassword() {
        var passwordInput = document.getElementById("password");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    }

    function login() {
        window.location.replace('/single-verify');

    }

    return (
        <>
            <div className="containerCustom Dashboard-1">
                <div className="contact-boxCustom">
                    <div className="leftCustom"></div>
                    <div className="rightCustom">
                        <h2 className='loginHeading'>Log In</h2>
                        <div className="form-group-1">
                            <input type="text" id="email" required autoComplete='off' value={"admin@gmail.com"} />
                            <label htmlFor="email">Your Email: </label>
                        </div>

                        <div className="form-group-1">
                            <input type="password" id="password" value="password123" required />
                            <label htmlFor="email">Your Password: </label>
                        </div>

                        <div className="div-flex">
                            <p className='check'><input className="check-mark" type="checkbox" onClick={showPassword} />
                                Show Password
                                <Link to="/forgot-password">
                                    <span className='check-1'>Forgot Password</span>
                                </Link>
                            </p>
                            <button type='submit' onClick={login} className="btnCustom">Login</button>
                        </div>

                        <div className="login-link">
                            <Link to="/sign-up" style={{textDecoration: 'none'}}>
                                <p>Don't have an account <span>Sign Up</span></p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login