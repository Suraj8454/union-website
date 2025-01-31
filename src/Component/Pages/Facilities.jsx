import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { apiUrl } from '../admin/http';
import { updateURL } from '../../Helper';
export default function Facilities() {
 const [mem, setMem] = useState([])
  const fetchMembers = async () => {
    const resShow = await fetch(`${apiUrl}/facilities`, {
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
  
    {mem.map((value, id) => {
          return (
            <>
              <div className='flex flex-wrap items-center justify-around p-6 lg:py-16 md:py-16'> 
              <img key={id}
                src={updateURL(value.imageUrl)}
                alt="head"
                className="object-cover w-full h-full py-4 lg:h-2/6 lg:w-2/6 lg:m-6 md:h-2/3 md:w-2/3"
              />
              </div>
            </>
          )
        })
        }
      <Footer/>
      </>
  )
}
