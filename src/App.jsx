import { useState } from 'react'
import './App.css'
import Home from './Component/Pages/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Login from './Component/Pages/Login'

import Contact from './Component/Pages/Contact'
import SecondHomePage from './Component/Pages/secondHomePage/SecondHomePage'
import ErrorPage from './Component/Pages/ErrorPage'
import Contact2 from './Component/Pages/secondHomePage/Contact2'
import UnionRules2 from './Component/Pages/secondHomePage/UnionRules2'
import MemberRules2 from './Component/Pages/secondHomePage/MembarRules2'
import AdminLogin from './Component/admin/AdminLogin'
import { ToastContainer, toast } from 'react-toastify'
import Dashboard from './Component/admin/Dashboard'
import { AdminRequireAuth } from './Component/admin/AdminRequireAuth'
import RegisterLogin from './Component/Pages/RegisterLogin'
import Register from './Component/Pages/Register'
import Current2 from './Component/Pages/secondHomePage/officeBarrier2/Current2'
import Previous2 from './Component/Pages/secondHomePage/officeBarrier2/Previous2'
import Death from './Component/Pages/Death'
import Medical from './Component/Pages/Medical'
import Retirement from './Component/Pages/Retirement'
import CurrentCreate from './Component/admin/websitechanges/currentbearers/CurrentCreate'
import CurrentShow from './Component/admin/websitechanges/currentbearers/CurrentShow'
import MedicalCreate from './Component/admin/websitechanges/medical/MedicalCreate'
import MedicalShow from './Component/admin/websitechanges/medical/MedicalShow'
import DeathCreate from './Component/admin/websitechanges/death/DeathCreate'
import DeathShow from './Component/admin/websitechanges/death/DeathShow'
import RetirementCreate from './Component/admin/websitechanges/retirement/RetiermentCreate'
import RetirementShow from './Component/admin/websitechanges/retirement/RetiermentShow'
import HindiRuleCreate from './Component/admin/websitechanges/hindirule/HindiRuleCreate'
import HindiRuleShow from './Component/admin/websitechanges/hindirule/HindiRuleShow'
import HindiRule from './Component/Pages/HindiRule'
import EnglishRule from './Component/Pages/EnglishRule'
import EnglishRuleshow from './Component/admin/websitechanges/englishrule/EnglishRuleshow'
import EnglishRulesCreate from './Component/admin/websitechanges/englishrule/EnglishRulesCreate'
import PreviousBearersShow from './Component/admin/websitechanges/previousbearers/PreviousBearersShow'
import PreviousBearersCreate from './Component/admin/websitechanges/previousbearers/PreviousBearersCreate'
import FacilitiesShow from './Component/admin/websitechanges/facilities/FacilitiesShow'
import FacilitiesCreate from './Component/admin/websitechanges/facilities/FacilitiesCreate'
import Facilities from './Component/Pages/Facilities'
import Current from './Component/Pages/Current'
import Previous from './Component/Pages/Previous'



function App() {

  return (
    <>
      <Router>
        <Routes>

          {/* before member login routes */}
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/hindirule' element={<HindiRule />} />
          <Route path='/englishrule' element={<EnglishRule />} />
          <Route path='/current' element={<Current/>}/>
          <Route path='/previous' element={<Previous />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registerlogin' element={<RegisterLogin />} />
          <Route path='/contactus' element={<Contact />} />
          <Route path='/death' element={<Death />} />
          <Route path='/retirement' element={<Retirement />} />
          <Route path='/facilities' element={<Facilities />} />
          <Route path='/medical' element={<Medical />} />


          {/* after member login routes */}
          <Route path='/SecondHomePage' element={<SecondHomePage />} />
          <Route path='/contactus2' element={<Contact2 />} />
          <Route path='/current2' element={<Current2 />} />
          <Route path='/previous2' element={<Previous2 />} />
          <Route path='/unionrule2' element={<UnionRules2 />} />
          <Route path='/memberrule2' element={<MemberRules2 />} />
          <Route path='*' element={<ErrorPage />} />



          {/* backend routes */}
          <Route path='/backend/login' element={<AdminLogin />} />

          <Route path='/backend/dashboard' element={
            <AdminRequireAuth>
              <Dashboard />
            </AdminRequireAuth>
          } />

          
          <Route path='/backend/websitechanges/current' element={
            <AdminRequireAuth>
              <CurrentShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/current/create' element={
            <AdminRequireAuth>
              <CurrentCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/medical' element={
            <AdminRequireAuth>
              <MedicalShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/medical/create' element={
            <AdminRequireAuth>
              <MedicalCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/death' element={
            <AdminRequireAuth>
              <DeathShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/death/create' element={
            <AdminRequireAuth>
              <DeathCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/retirement' element={
            <AdminRequireAuth>
              <RetirementShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/retirement/create' element={
            <AdminRequireAuth>
              <RetirementCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/hindirule' element={
            <AdminRequireAuth>
              <HindiRuleShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/hindirule/create' element={
            <AdminRequireAuth>
              <HindiRuleCreate />
            </AdminRequireAuth>
          } />


          <Route path='/backend/websitechanges/englishrule' element={
            <AdminRequireAuth>
              <EnglishRuleshow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/englishrule/create' element={
            <AdminRequireAuth>
              <EnglishRulesCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/previousBearers' element={
            <AdminRequireAuth>
              <PreviousBearersShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/previousBearers/create' element={
            <AdminRequireAuth>
              <PreviousBearersCreate />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/facilities' element={
            <AdminRequireAuth>
              <FacilitiesShow />
            </AdminRequireAuth>
          } />

          <Route path='/backend/websitechanges/facilities/create' element={
            <AdminRequireAuth>
              <FacilitiesCreate />
            </AdminRequireAuth>
          } />


        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
