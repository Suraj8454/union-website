import { House } from 'lucide-react';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [number, setNumber] = useState("");
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const clicklogin = () => {
        try {
            if (number == "8454091165" && otp == "1234") {
                navigate("/SecondHomePage")

            }
            else {
                alert("Enter correct number and otp")
            }
        }
        catch (e) {
            alert(e)
        }

    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: 'url("./image/blurimage.jpg")' }} >
            <div className="flex flex-col w-5/6 max-w-screen-xl lg:flex-row">
                {/* Left Side  */}
                <div className="mt-16 lg:flex lg:flex-1">

                    {/* image section */}
                    <div className="flex flex-col items-center justify-center px-8 py-12 text-white">
                        <div className='relative flex items-center justify-center mt-4 mb-3 w-60'>
                            <img
                                src="./image/dada.jpg"
                                alt="imahe"
                                className="absolute object-cover rounded-full shadow-md w-44 h-44 right-16 bottom-12 lg:w-52 lg:h-52"
                            />
                            <img
                                src="./image/Picture1.jpg"
                                alt="imahe"
                                className="z-10 object-cover rounded-full shadow-md h-28 w-28 lg:h-32 lg:w-32"
                            />
                        </div>
                        <h1 className="text-2xl font-bold lg:text-4xl">Mazdoor Login Page</h1>
                        <p className="mt-4 text-lg">welcome back to the login page...</p>
                        <div className='mt-6'>
                            <Link to={'/home'}
                                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 flex gap-x-2 hover:shadow-lg"
                            >
                                Back to Home <span><House size={20} /></span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side login detail */}
                <div className="flex-1 p-8 m-4 mb-10 bg-white shadow-lg rounded-3xl lg:m-16">
                    <h2 className="mb-6 text-3xl font-semibold text-center">Login</h2>
                    <form className="space-y-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                autoComplete='false'
                                type="text"
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter your Number"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"

                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                                OTP
                            </label>
                            <input
                                autoComplete='true'
                                type="text"
                                id="password"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                placeholder="Enter OTP"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Remember me and Forgot Password */}
                        <div className="flex items-center justify-between mt-4">
                            <label className="flex items-center text-sm text-gray-600">
                                <input type="checkbox" className="mr-2" />
                                Remember me
                            </label>
                            <a href="#" className="text-sm text-red-500 hover:text-red-700">
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-2 mt-6 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                            onClick={clicklogin}
                        >
                            Login
                        </button>


                        {/* Sign up link */}
                        <div className="mt-4 text-center">
                            <span className="text-sm text-gray-600">Don't have an account?</span>
                            <a href="#" className="text-sm font-medium text-red-600 hover:text-red-700">
                                Sign up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
