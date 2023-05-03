import React from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Api from './Components/Api'
import SingleVerify from './Components/SingleVerify'
import BulkVerify from './Components/BulkVerify'
import Team from './Components/Team'
import Subscription from './Components/Subscription'
import Support  from './Components/Support'
import  Login  from './Components/Login'
import Profile from './Components/Profile'
import ForgotPass from './Components/ForgotPass'
import DeleteConfirmation from './Components/DeleteConfirmation'
import AddNewAPI from './Components/AddNewAPI'


function App() {
  return (
    <>
    {/* <Navbar /> */}
    <div>
        <Router>
      {/* <Sidenav /> */}
            <Routes>
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/single-verify' element={<SingleVerify/>}/>
              <Route path='/bulk-verify' element={<BulkVerify/>}/>
              <Route path='/api' element={<Api/>}/>
              <Route path='/team' element={<Team/>}/>
              <Route path='/subscription' element={<Subscription/>}/>
              <Route path='/support' element={<Support/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/forgot-password' element={<ForgotPass/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/delete' element={<DeleteConfirmation/>}/>
              <Route path='/add-new-api' element={<AddNewAPI/>}/>
            </Routes>
        </Router>
    </div>
    </>
  )
}

export default App
