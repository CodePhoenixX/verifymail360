import React from 'react'
import '../CSS/AddNewApi.css'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
var randomstring = require("randomstring");


export default function AddNewAPI() {
    return (
        <>

            <Navbar />
            <Sidenav />

            {/* <!-- Main Site --> */}
            <main>
                <div className="Api-container">
                    <div className="box-nav">
                        <div className="filter">
                            <a href="/"><i className='bx bxs-chevrons-left'></i> <Link to="/api">Back to API</Link> </a>
                        </div>
                    </div>
                    <div className="form-title">
                        <h2 className="heading">Add New API</h2>
                        {/* <button className="Generate-Api" id='keygen'>Generate New Api Key</button> */}


                    </div>
                    <form>
                        <div className="new_Api-user">
                            <div className="Api-form">
                                <div className="Api-profile-form">
                                    <input type="text" id="name" required autoComplete='off' />
                                    <label htmlFor="name">Name: </label>
                                </div>

                                {/* <div className="Api-profile-form">
                                    <h3>Email Type:</h3>
                                </div> */}


                                <div className="select-menu">
                                   <select className='select-menu form-select form-select-lg'>
                                        <option>--Select Api Type--</option>
                                        <option value={"single"}>Single</option>
                                        <option value={"single"}>Bulk</option>
                                   </select>
                                </div>

                                <div className="Api-profile-form">
                                    <input type="text" readOnly={"true"} value={randomstring.generate(25)}></input>
                                    {/* <label htmlFor="name">Your Api Key: </label> */}
                                </div>
                                <button className="Generate-Api">Save</button>
                            
                            </div>
                        </div>



                    </form>
                </div>
            </main>


            


        </>
    )
}
