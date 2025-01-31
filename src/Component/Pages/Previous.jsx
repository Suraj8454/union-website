import React, { useEffect, useState } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';
import CardDetail from './common/CardDetail';
import { apiUrl } from '../admin/http';
import { updateURL } from '../../Helper';

const Previous = () => {
  
    const [mem, setMem] = useState([])
     const fetchMembers = async () => {
       const resShow = await fetch(`${apiUrl}/previous_bearers`, {
         'method': 'GET',
         'headers': {
           'Content-type': 'application/json'
         }
       });
       const resultShow = await resShow.json();
       console.log(resultShow)
       setMem(resultShow.data);
      
     }
     useEffect(() => {
       fetchMembers();
     }, [])

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className='py-5 pt-10 text-center lg:pt-14'><h1 className='text-3xl font-extrabold'><span className='font-medium text-red-600'>Previous Members</span></h1></div>

        <img
            src={'./image/Picture1.jpg'}
            alt={"image"}
            className="object-cover mb-4 rounded-full h-44 w-44 place-self-center"
          />
        
        <div className="flex flex-wrap items-center justify-center -mx-4 text-center lg:pb-20">
          {mem.map((card, index) => (
            <CardDetail
              key={index}
              year={card.year}
              image={updateURL(card.imageUrl)}
              
            />
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Previous;

