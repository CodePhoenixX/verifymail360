import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import axios from 'axios';
import { useState } from 'react';
import styles from '../CSS/SingleVerify.css'

const apiUrl = 'http://178.18.240.183:8080/logix/';

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
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <>
      <Navbar />
      <Sidenav />

      <form className="Dashboard" onSubmit={handleSubmit}>
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

              <tr>
                <th>Is inbox full</th>
                <td>:{resData.smtp.full_inbox ? 'Yes' : 'No'}</td>
              </tr>

              <tr>
                <th>Can be delivered</th>
                <td>:{resData.smtp.deliverable ? 'Yes' : 'No'}</td>
              </tr>

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
                <td>:{resData.disposable ? <span className='text-danger'>Yes</span> : <span className='text-success'>No</span>}</td>
              </tr>

              <tr>
                <th>Catch All Domain</th>
                <td>:{resData.smtp.catch_all ? 'Yes' : 'No'}</td>
              </tr>

              <tr>
                <th>MX Records exists</th>
                <td>:{resData.has_mx_records ? 'Yes' : 'No'}</td>
              </tr>

              <tr>
                <th>Is a free Domain</th>
                <td>:{resData.free ? 'Yes' : 'No'}</td>
              </tr>

            </table>

          </div>
          )}

          <div className="details details-container">

            <h3>OTHER DETAILS</h3>
            <hr />

            <div className="mx-container">
              <div className="mx-records">
                  <h4>MX Records</h4>

                  <p>alt1.gmail-smtp-in.l.google.com</p>
                  <p>alt1.gmail-smtp-in.l.google.com</p>
                  <p>alt1.gmail-smtp-in.l.google.com</p>
                  <p>alt1.gmail-smtp-in.l.google.com</p>
              </div>

              <div className="spf-details">
                <h4>SFC</h4>
                <p>v=spf1 redirect=_spf.google.com</p>
              </div>
            </div>

            <div className="dmarc">
              <h4>DMARC</h4>
              <p>v=DMARC1; p=none; sp=quarantine; rua=mailto:mailauth-reports@google.com</p>
            </div>
            
            <div className="suggestion">
              <p><b>Suggestion:</b> Since the MX of the domain is of Google, we recommend to use google Id to send email for better deliverability</p>
            </div>



          </div>

        </div>

      </div>



      {/* <div className='left-margin'>
        {resData && (
          <div>
            <table className='table table-striped'>
              <thead>
                <tr>
                  <th>Email Address</th>
                  <th>Able to reach</th>
                  <th>Catch All Domain</th>
                </tr>
              </thead>
              <tbody className='table-striped'>
                <tr>
                  <td className=''>{resData.email}</td>
                  <td>{resData.reachable}</td>
                  <td>{resData.smtp.catch_all ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th>Can be delivered</th>
                  <th>Is Inbox Full</th>
                  <th>Domain Name</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{resData.smtp.deliverable ? 'Yes' : 'No'}</td>
                  <td>{resData.smtp.full_inbox ? 'Yes' : 'No'}</td>
                  <td>{resData.syntax.domain}</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th>Is a Domain Valid</th>
                  <th>Is a Disposable Domain</th>
                  <th>Does MX records exists</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{resData.syntax.valid ? 'Yes' : 'No'}</td>
                  <td>{resData.disposable ? <span className='text-danger'>Yes</span> : <span className='text-success'>No</span>}</td>
                  <td>{resData.has_mx_records ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th>Is a Free Domain</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{resData.free ? 'Yes' : 'No'}</td>
                </tr>
              </tbody>
            </table>


          </div>
        )}
      </div> */}

    </>

  );
};


export default SingleVerify
