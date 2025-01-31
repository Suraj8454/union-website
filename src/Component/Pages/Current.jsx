import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import CardDetail2 from './common/CardDetail2';
import { apiUrl } from '../admin/http';
import { updateURL } from '../../Helper';

const Current = () => {
  const [mem, setMem] = useState([])
  const fetchMembers = async () => {
    const resShow = await fetch(`${apiUrl}/current_bearers`, {
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
      <Navbar />
      <div className='flex flex-col items-center justify-center p-6 lg:py-10'>

        <div className='py-5 text-center'><h1 className='text-3xl font-extrabold'><span className='font-medium text-red-600'>Current Office Bearers </span></h1></div>
        <div className='flex flex-wrap items-center w-10/12 h-full gap-6 p-6 justify-evenly '>
        {mem.map((value, id) => {
          return (
            <>
              {/* <img key={id}
                src={value.imageUrl}
                alt="head"
                className="object-cover w-1/2 h-1/3 lg:h-3/4 lg:w-2/5"
              /> */}
              <CardDetail2
              image={updateURL(value.imageUrl)}/>
            </>
          )
        })
        }
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Current;

