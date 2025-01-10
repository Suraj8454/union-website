import React from 'react'
import Navbar from './New'
import Footer from './Footer'

export default function MemberRules() {
  return (
    <>
    <Navbar/>
    <div className='flex items-center justify-center p-6 lg:py-16'> 
    <img
        src="./union img/memberrule.jpg"
        alt="head"
        className="object-fill w-full h-full lg:h-2/3 lg:w-2/4"
      /></div>
      <Footer/>
      </>
  )
}
