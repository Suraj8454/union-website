
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { apiUrl } from '../../http';

const RetiermentCreate = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState(null);
  const nevigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);

    try {
      const response = await axios.post(`${apiUrl}/retirements`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.status == true) {
        toast.success("added");
        nevigate('/backend/websitechanges/retirement')
        setMessage(response.data.message);
      }
      else {
        toast.error("image only support png,jpg,jpeg,gif")
      }
    } catch (e) {
      toast.error(e)
    }

  };

  return (


    <div className="flex items-center justify-center h-screen ">
      <div className="flex items-center justify-center ">

        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative w-1/2 p-6 bg-white rounded-lg shadow-lg md:w-3/5 lg:w-2/5">

            <h2 className="mb-4 text-2xl font-bold place-self-center"><Link to={'/backend/websitechanges/retirement'}>Retierment</Link></h2>

            <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col gap-y-1'>
                <label className='text-lg font-semibold'>Image</label>
                <input
                  type="file"
                  {
                  ...register('image')
                  }
                  placeholder="image"

                  className="w-56 p-2 border border-gray-300 rounded lg:w-96"
                />
              </div>

              <div className="flex justify-end pt-5 space-x-4 md:col-span-2">
                <Link to={'/backend/websitechanges/retirement'}> <button
                  type="button"
                  className="px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
                >
                  close
                </button></Link>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Add
                </button>
              </div>
            </form>
            {message && <p>{message}</p>}
          </div>
        </div>
      </div>
    </div>

  );
};

export default RetiermentCreate;










