import React from 'react'
import Navbar2 from './Navbar2'
import Footer from '../Footer'

export default function UnionRules2() {
  return (
    <>
      <Navbar2 />
      <div className='flex items-center justify-center p-6 lg:py-16'>
        <img
          src="./union img/rule.jpg"
          alt="head"
          className="object-fill w-full h-full lg:h-2/3 lg:w-2/4"
        />
      </div>
      <Footer />
    </>
  )
}
