
import { Facebook, Instagram, Twitter, Mail, Phone, Youtube, ChevronDown, ChevronUp } from 'lucide-react';

import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <div className='fixed z-20 w-full bg-white'>
                <nav className="pt-1 pb-4 text-white bg-red-600 ">
                    <div className="flex flex-col items-center justify-between mx-auto max-w-7xl">
                        {/*top section */}
                        <div className="flex flex-col items-center justify-between hidden p-2 space-x-8 text-white md:flex-row md:flex place-self-end"  >
                            <div className="flex items-center space-x-6">
                                <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
                                    <Phone className="mr-2" />
                                    +91 8847758587
                                </a>
                                <a href="mailto:example@example.com" className="flex items-center hover:text-gray-200">
                                    <Mail className="mr-2" />
                                    union@gmail.com
                                </a>
                            </div>
                            <div className="flex mt-2 space-x-4 md:mt-0">
                                <a href="#" className="hover:text-gray-200">
                                    <Facebook />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Twitter />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Instagram />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Youtube />
                                </a>
                            </div>
                        </div>
                        {/*bottom section */}
                        <div className="hidden space-x-8 font-semibold md:flex">
                            {/*home*/}
                            <a href="#" className="hover:text-gray-300">Home</a>
                            {/*about*/}
                            <div className="relative group">
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">About</button>
                                    <ChevronDown />
                                </div>

                                <div className="absolute hidden w-40 text-black transition-opacity bg-white rounded-md shadow-lg group-hover:block -left-8">
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp color='red' />
                                    </div>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white ">Current Member</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Previous Member</a>
                                </div>
                            </div>
                            {/*rules & regulation*/}
                            <div className="relative group">

                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">Rules & Regulations</button>
                                    <ChevronDown />
                                </div>

                                <div className="absolute left-0 hidden w-40 text-black transition-opacity bg-white rounded-md shadow-lg group-hover:block">
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp color='red' />
                                    </div>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white ">Union Rules</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Members Rules</a>
                                </div>
                            </div>
                            {/*member & benefit*/}
                            <div className="relative group">
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md">Members & Benefits</button>
                                    <ChevronDown />
                                </div>

                                <div className="absolute left-0 hidden w-48 text-black transition-opacity bg-white rounded-md shadow-lg group-hover:block" >
                                    <div className='flex items-center justify-center'>
                                        <ChevronUp color='red' />
                                    </div>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">M . F</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Medical</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Retirement</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Death Compensation</a>
                                </div>
                            </div>
                            {/*contact*/}
                            <a href="#" className="hover:text-gray-300">Contact Us</a>


                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <button className="flex text-white md:hidden place-self-end " onClick={toggleMobileMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-10 h-10 pt-3 pr-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu (Toggleable) */}
                {isMobileMenuOpen && (
                    <div className="relative h-screen space-y-20 text-center text-white bg-gray-800 md:hidden">
                        <div className="flex flex-col p-4 space-y-6">
                            <a href="#" className="hover:text-gray-300">Home</a>
                            {/* about */}
                            <div className="relative flex items-center justify-center group">
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">About</button>
                                    <ChevronDown />
                                </div>

                                <div className="absolute hidden w-40 text-black transition-opacity bg-white rounded-md shadow-lg right-50 group-hover:block top-6">
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp color='red' />
                                    </div>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white ">Current Member</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Previous Member</a>
                                </div>
                            </div>


                            <a href="#" className="hover:text-gray-300">Rules & regulation</a>
                            <a href="#" className="hover:text-gray-300 ">Members benefit</a>
                            <a href="#" className="hover:text-gray-300 ">Contact Us</a>
                        </div>



                        <div className="flex flex-col items-center justify-between p-2 text-white gap-y-4 md:flex-row ">
                            <div className="flex items-center space-x-6">
                                <a href="tel:+1234567890" className="flex items-center hover:text-gray-200">
                                    <Phone className="mr-2" />
                                    +91 9763564837
                                </a>
                                <a href="mailto:example@example.com" className="flex items-center hover:text-gray-200">
                                    <Mail className="mr-2" />
                                    union@gmail.com
                                </a>
                            </div>
                            <div className="flex mt-2 space-x-4 md:mt-0">
                                <a href="#" className="hover:text-gray-200">
                                    <Facebook />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Instagram />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Twitter />
                                </a>
                                <a href="#" className="hover:text-gray-200">
                                    <Youtube />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>


             <div className='fixed absolute sticky z-40 top-3 left-9'>
                <img
                    src={'./image/Picture1.jpg'}
                    alt={"logo"}
                    className='object-cover w-20 h-20 rounded-full left-5'
                />
            </div>

           </> 
    );
};

export default Navbar;












