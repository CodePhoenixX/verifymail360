import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import axios from 'axios';
import { useState } from 'react';
import styles from '../CSS/SingleVerify.css'

const apiUrl = 'http://178.18.240.183:8080/logix/';

const SingleVerify = () => {

  const [email, setEmail] = useState('');
  const [resData, setresData] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(apiUrl + email);
      console.log(response.data);
      setresData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const renderTableRows = () => {
    const rows = [];
    if (resData) {
      const entries = Object.entries(resData);
      for (const [key, value] of entries) {
        rows.push(
          <tr key={key}>
            <td>{key}</td>
            <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
          </tr>
        );
      }
    }
    return rows;
  };

  return (
    <>
      <Navbar />
      <Sidenav />

      <form className="Dashboard" onSubmit={handleSubmit}>
        <div className="container-1">
          <div className="form-group">
            <input type="text" id="email" required autoComplete='off' onChange={handleChange} />
            <label htmlFor="email">Your Email: </label>
          </div>
          <button type="submit" className="btnCustom-1">Verify Email</button>
        </div>
      </form>

      <div className='Dashboard'>
        {resData && (
          <table>
            <tbody>
              {renderTableRows()}
            </tbody>
          </table>
        )}
      </div>

    </>

  );
};


export default SingleVerify
