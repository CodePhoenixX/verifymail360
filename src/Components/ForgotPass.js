import React from 'react'
import styles from '../CSS/Forgotpass.css'
import { Link } from 'react-router-dom'

function ForgotPass() {
    return (
        <>
            <div className="forgotContainer Dashboard-1">
                <div className="contact-boxCustom">
                    <div className="forgotImg"></div>
                    <div className="forgotRight">
                        <h2 className='forgotHeading'>Reset Your Password</h2>
                        <div className="forgot-form">
                            <input type="text" id="email" required autoComplete='off' />
                            <label htmlFor="email">Your Email: </label>
                        </div>

                        <div className="flex-div">
                            <p className='back-to-login'>
                                <Link to="/login">
                                    <a href="">Back to Login</a>
                                </Link>
                            </p>
                            <button type='submit' className="btnCustom">Send Reset Link</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPass
