import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiUrl } from './http';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../context/AdminAuth';

function AdminLogin() {
    const { login } = useContext(AdminAuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        const res = await fetch(`${apiUrl}/admin/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                console.log(result)

                if (result.status == 200) {
                    const adminInfo = {
                        token: result.token,
                        id: result.id,
                        name: result.name
                    }
                    toast.success("successful");
                    localStorage.setItem('adminInfo', JSON.stringify(adminInfo))

                    login(adminInfo)
                    navigate('/backend/dashboard')

                } else {
                    toast.error(result.message);
                }
            })
    }


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                {/* Login Form */}
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-700">Admin Login Page</h2>

                {/* Image */}
                <div className="flex justify-center mb-6">
                    <img src="/image/Picture1.jpg" alt="Logo" className="w-16 h-16" />
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                        <input
                            {...register("email", {
                                required: "the email field is required"
                            })}
                            type="email"
                            className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email && 'valid:border-green-500'}`}
                            placeholder="Enter your email"
                        />
                        {
                            errors.email && <p className='invalid:border-red-500'>{errors.email}</p>
                        }
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                        <input
                            {...register("password", {
                                required: "the password field is required"
                            })}

                            type="password"
                            autoComplete='off'
                            className={`w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${errors.email && 'valid:border-green-500'}`}
                            placeholder="Enter your password"

                        />
                        {
                            errors.email && <p className='invalid:border-red-500'>{errors.email}</p>
                        }
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
