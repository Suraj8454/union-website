import React from 'react';
import { Link } from 'react-router-dom';
import { Check, X } from 'lucide-react';

const RegisterLogin = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover" style={{ backgroundImage: 'url("./image/blurimage.jpg")' }}>
            {/* Container */}
            <div className="w-full max-w-4xl p-8 space-y-6 rounded-lg " >

                {/* Image Section */}
                <div className="relative flex items-center justify-center">
                    <Link to={'/home'}>
                        <img
                            src='./image/Picture1.jpg'
                            alt="Description"
                            className="object-cover rounded-full shadow-md h-44 w-44"
                        />
                    </Link>
                </div>

                {/* heading */}
                <h1 className="text-3xl font-bold text-center text-white">
                    Are You a Union Member ?
                </h1>

                {/* detail */}
                {/* <p className="text-lg text-center text-white">
          you have two button in the buttom is login and register.your choice are make happy for you future.
          this is information page in the whatever.
        </p> */}

                {/* button container */}
                <div className="flex justify-center space-x-4">
                    {/* button 1 */}
                    <Link to={'/login'}>
                        <button className="flex px-6 py-3 space-x-2 text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-800">
                           <span className='font-medium'>Yes</span> <Check/>
                        </button>
                       
                    </Link>

                    {/* button 2 */}
                    <Link to={'/register'}>
                        <button className="flex px-6 py-3 space-x-2 text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-800" >
                        <span className='font-medium'>No</span> <X/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterLogin;
