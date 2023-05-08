import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import axios from 'axios';
import { useState } from 'react';
import '../CSS/SingleVerify.css'

const apiUrl = 'https://api.verifymail360.com/logix/';

const SingleVerify = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [resData, setresData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get(apiUrl + email);
      // console.log(response.data);
      setresData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false); // Stop loading in case of error
      setresData(error);
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <>
      <Navbar />
      <Sidenav />

      <form className="left-margin-1 Dashboard-margin" onSubmit={handleSubmit}>
        <div className="container-1">
          <div className="form-group">
            <input type="text" id="email" required autoComplete='off' onChange={handleChange} />
            <label htmlFor="email">Your Email </label>
          </div>
          <button type="submit" className="btnCustom-1">{loading ? <>Loading..</> : <>Verify Email</>}</button>
        </div>
      </form>



      <div className="single-verify-card left-margin">

        <div class="card">
          {resData && (
            <div class="card-container">

              <table className='content-table'>

                <tr>
                  <th>Email</th>
                  <td>:{resData.email}</td>
                </tr>

                <tr>
                  <th>Able to reach</th>
                  <td>:{resData.reachable}</td>
                </tr>


                {resData.smtp &&
                  <>
                    <tr>
                      <th>Is inbox full</th>
                      <td>:{resData.smtp.full_inbox ? 'Yes' : 'No'}</td>
                    </tr>

                    <tr>
                      <th>Can be delivered</th>
                      <td>:{resData.smtp.deliverable ? 'Yes' : 'No'}</td>
                    </tr>


                    <tr>
                      <th>Catch All Domain</th>
                      <td>:{resData.smtp.catch_all ? 'Yes' : 'No'}</td>
                    </tr>

                  </>
                }

              </table>

              <table className='content-table'>

                <tr>
                  <th>Domain Name</th>
                  <td>:{resData.syntax.domain}</td>
                </tr>

                <tr>
                  <th>Is a domain valid</th>
                  <td>:{resData.syntax.valid ? 'Yes' : 'No'}</td>
                </tr>

                <tr>
                  <th>Disposable</th>
                  <td>:{resData.disposable ? <span className='bg-danger text-white'>Yes</span> : <span className='text-success'>No</span>}</td>
                </tr>



                <tr>
                  <th>MX Found</th>
                  <td>:{resData.has_mx_records ? 'Yes' : 'No'}</td>
                </tr>

                <tr>
                  <th>Is a free Domain</th>
                  <td>:{resData.free ? 'Yes' : 'No'}</td>
                </tr>

              </table>

              <div className="details details-container">
                <h3>OTHER DETAILS</h3>
                <hr />

                <div className="mx-records">
                  <h4>MX Records</h4>
                  <p>
                  {resData.available_mx_record && resData.available_mx_record.length > 0 &&
                      <div>
                        {resData.available_mx_record.map((record, index) => (
                          <div key={index}>
                            {record}<br />
                          </div>
                        ))}
                      </div>
                    }
                  </p>
                </div>

                <div className="spf-details">
                  <h4>SPF</h4>
                  <p>{resData.spf_record}</p>
                </div>

                <div className="dmarc">
                  <h4>DMARC</h4>
                  <p>{resData.dmarc_record}</p>
                </div>

                {/* <div className="suggestion">
                  <p><b>Suggestion:</b> Since the MX of the domain is of Google, we recommend to use google Id to send email for better deliverability</p>
                </div> */}
              </div>
            </div>

          )}


        </div>

      </div>


    </>

  );
};


export default SingleVerify
