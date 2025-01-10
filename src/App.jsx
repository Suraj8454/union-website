import { useState } from 'react'
import './App.css'
import Home2 from './Component/Pages/Home2'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import New from './Component/Pages/New'
import UnionRules from './Component/Pages/UnionRules'
import MemberRules from './Component/Pages/MemberRules'
import Login from './Component/Pages/Login'

import Contact from './Component/Pages/Contact'
import SecondHomePage from './Component/Pages/secondHomePage/SecondHomePage'
import ErrorPage from './Component/Pages/ErrorPage'
import Contact2 from './Component/Pages/secondHomePage/Contact2'
import UnionRules2 from './Component/Pages/secondHomePage/UnionRules2'
import MemberRules2 from './Component/Pages/secondHomePage/MembarRules2'

function App() {

  return (
    <>
      <Router>
      
        <Routes>
          <Route path='/' element={<Home2 />} />
          <Route path='/home' element={<Home2 />} />
          <Route path='/unionrule' element={<UnionRules/>}/>
          <Route path='/memberrule' element={<MemberRules/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/contactus' element={<Contact/>}/>
          <Route path='/SecondHomePage' element={<SecondHomePage/>}/>
          <Route path='/contactus2' element={<Contact2/>}/>
          <Route path='/unionrule2' element={<UnionRules2/>}/>
          <Route path='/memberrule2' element={<MemberRules2/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
