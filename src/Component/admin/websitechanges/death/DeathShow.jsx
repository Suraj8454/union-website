import React, { useEffect, useState } from 'react'

import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';

import { apiUrl } from '../../http';
import Sidebar from '../../Sidebar';
import { toast } from 'react-toastify';
import { updateURL } from '../../../../Helper';

const DeathShow = () => {

  const [members, setMembers] = useState([]);



  //show data
  const fetchMembers = async () => {
    const resShow = await fetch(`${apiUrl}/deaths`, {
      'method': 'GET',
      'headers': {
        'Content-type': 'application/json'
      }
    });
    const resultShow = await resShow.json();
    console.log(resultShow)
    setMembers(resultShow.data);
  }

  useEffect(() => {
    fetchMembers();
  }, [])



  //delete data

  const deleteMember = async (id) => {

    const resShow = await fetch(`${apiUrl}/deaths/${id}`, {
      'method': 'DELETE',
      'headers': {
        'Content-type': 'application/json'
      }
    });
    const resultShow = await resShow.json();
    console.log(resultShow)

    if (resultShow.status == true) {
      const newMember = members.filter(member => member.id != id);
      setMembers(newMember);
      toast.success("member deleted")
    }
    else {
      toast.error("not deleted member")
    }
  }





  return (
    <>

      <div className="flex h-screen">
       <Sidebar/>
        <div className="flex-1 p-4 overflow-auto">
          <div className="p-4">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold">Death compensation</h1>
                <Link to={'/backend/websitechanges/death/create'} > <button className="px-4 py-2 text-white bg-blue-500 rounded shadow-md hover:bg-blue-600">
                  ADD NEW
                </button></Link>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded shadow-md">
                  <thead>
                    <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                      <th className="px-6 py-3 text-left">ID</th>
                      <th className="px-6 py-3 text-left">IMAGE</th>
                      <th className="px-6 py-3 text-left">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-600">
                    {members.map((member,id) => (
                      <tr
                        key={member.id} 
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="px-6 py-3">{id+1}</td>
                        <td className="px-6 py-3">
                          <img
                            // src={member.imageUrl}
                            src={updateURL(member.imageUrl)}
                            alt={member.name}
                            className="w-10 h-10 rounded-full"
                          />
                        </td>
                        {/* <td className="flex flex-row px-6 py-3 space-x-2 justify-evenly"> */}
                        <td className="px-6 py-3">
                          <button className="p-3 font-medium text-white bg-red-600 rounded-lg hover:bg-red-900" onClick={() => deleteMember(member.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeathShow;