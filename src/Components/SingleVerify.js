import React from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import { TextField, Button} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const apiUrl = 'http://178.18.240.183:8080/logix/';

const SingleVerify = () => {
  
  const [email, setEmail] = useState('');
  const [resData, setresData]=useState();

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
    <form onSubmit={handleSubmit} className='Dashboard'>
      <TextField
        label="Email"
        value={email}
        onChange={handleChange}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
      
        {/* {JSON.stringify(resData)} */}

        {resData && (
        <table>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      )}
    </form>
    </>
    
  );
};


export default SingleVerify
