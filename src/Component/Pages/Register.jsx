import React from 'react'
import { House, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <>
            <div className='h-screen'  >
                <div className="grid h-full px-6 py-24 bg-white bg-cover place-items-center sm:py-32 lg:px-8" style={{ backgroundImage: 'url("./image/blurimage.jpg")' }}>
                    <div className="text-center">
                        <p className="text-4xl font-semibold text-white">Registeration Info</p>
                        <h1 className="mt-4 font-semibold tracking-tight text-white text-1xl text-balance lg:text-3xl md:text-2xl">
                            Go to Office
                        </h1>
                        <p className="mt-6 text-lg font-medium text-white text-pretty sm:text-xl/8">
                           visite the main office to registeration to union membership to get member login..
                        </p>
                        <div className="flex items-center justify-center mt-10 gap-x-6">
                            <Link to={'/'}
                                className="rounded-md bg-violet-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 flex gap-x-2 hover:shadow-lg"
                            >
                                Back to Home <span><House size={20} /></span>
                            </Link>
                            <Link to={'/contactus'} className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 flex gap-x-2 hover:shadow-lg">
                                Contact Us
                                <span ><MoveRight size={20} color='white' /></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Register;