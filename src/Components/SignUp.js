import React from 'react'
// import Navbar from './Navbar'
// import Sidenav from './Sidenav'
import '../CSS/Signup.css'
import { Link } from 'react-router-dom';

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
            <div className="signup-container Dashboard-1">
                <div className="signup-boxCustom">
                    <div className="leftCustom"></div>
                    <div className="rightSignup">
                        <h2 className='signup-heading'>Signup Here</h2>
                        <div className="form-group-2">
                            <input type="text" id="name" required autoComplete='off' />
                            <label htmlFor="name">Your Name </label>
                        </div>

                        <div className="form-group-2">
                            <input type="text" id="email" required autoComplete='off' />
                            <label htmlFor="email">Your Email </label>
                        </div>

                        <div className="form-group-2">
                            <input type="password" id="password" required />
                            <label htmlFor="password">Your Password </label>
                        </div>

                        <div className="form-group-2">
                            <input type="password" id="cpassword" required />
                            <label htmlFor="cpassword">Confirm Password </label>
                        </div>

                        <div className="signup-div-flex">
                            <p className='signup-check'><input className="signup-check-mark" type="checkbox" onClick={showPassword} />
                                Show Password
                            </p>
                            <button type='submit' className="btnCustomSignup">Sign Up</button>
                        </div>

                        <div className="signup-link">
                            <Link to="/login" style={{textDecoration: 'none'}}>
                                <p>Already have an account <span>Log In</span></p>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp