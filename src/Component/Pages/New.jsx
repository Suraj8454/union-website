import { Facebook, Instagram, Twitter, Mail, Phone, Youtube, ChevronDown, ChevronUp, } from 'lucide-react';

import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };



    return (
        <div>
            <div className='fixed z-40 w-full bg-white'>
                <nav className="pt-1 pb-4 text-xs text-white bg-red-600 shadow-md lg:text-base">
                    <div className="flex flex-col items-center justify-between mx-auto max-w-7xl">
                        {/*top section */}
                        <div className="flex flex-col items-center justify-between hidden p-2 space-x-8 text-white md:flex-row md:flex place-self-end"  >
                            <div className="flex items-center space-x-6">
                                <a href="tel:+91 8655884111" className="flex items-center hover:text-gray-200">
                                    <Phone className="mr-2 md:size-4 lg:size-5" />
                                    +91 8104611156
                                </a>
                                <a href="#" className="flex items-center hover:text-gray-200">
                                    <Mail className="mr-2 md:size-4 lg:size-5" />
                                    alliedmazdoorunion@gmail.com
                                </a>
                            </div>
                            <div className="flex mt-2 space-x-4 md:mt-0">
                                <a href="https://www.facebook.com/@fssamu.in/" target='_blank' className="hover:text-gray-200">
                                    <Facebook className='md:size-5 lg:size-5' />
                                </a>
                                <a href="https://www.twitter.com" target='_blank' className="hover:text-gray-200">
                                    <Twitter className='md:size-4 lg:size-5' />
                                </a>
                                <a href="https://www.instagram.com" target='_blank' className="hover:text-gray-200">
                                    <Instagram className='md:size-4 lg:size-5' />
                                </a>
                                <a href="https://www.youtube.com" target='_blank' className="hover:text-gray-200">
                                    <Youtube className='md:size-4 lg:size-5' />
                                </a>
                            </div>
                        </div>
                        {/*bottom section */}
                        <div className="hidden space-x-8 font-semibold md:flex ">


                            <img
                                src={'./image/Picture1.jpg'}
                                alt={"logo"}
                                className='absolute object-cover w-20 h-20 rounded-full shadow-md cursor-pointer top-5 left-5 md:top-5 md:left-5'
                            />

                            {/*home*/}
                            <Link to={"/home"} className="hover:text-gray-300 md:mt-1 lg:mt-0">Home</Link>
            
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

                                <div className="absolute left-0 hidden w-40 text-black transition-opacity bg-white rounded-md shadow-lg group-hover:block ">
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp color='red' />
                                    </div>
                                    <Link to={"/unionrule"} className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white ">Rules in Hindi</Link>
                                    <Link to={"/memberrule"} className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Rules in English</Link>
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
                            <Link to={"/contactus"} className="hover:text-gray-300 md:mt-1 lg:mt-0">Contact Us</Link>
                        </div>

                        {/* Hamburger Menu for Mobile */}
                        <button className="flex text-white md:hidden place-self-end " onClick={toggleMobileMenu} >
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

                        <img
                            src={'./image/Picture1.jpg'}
                            alt={"logo"}
                            className='absolute z-30 object-cover w-16 h-16 rounded-full shadow-md top-3 left-5 lg:top-5 lg:left-5 md:top-5 lg:h-20 lg:w-20 md:h-20 md:w-20'
                        />
                    </div>
                </nav>

                {/* Mobile Menu (Toggleable) */}
                {isMobileMenuOpen && (
                    <div className="relative h-screen pt-16 space-y-20 text-center text-white bg-gray-800 md:hidden">
                        <div className="flex flex-col p-4 space-y-6">
                            <Link to={"/home"} className="hover:text-gray-300">Home</Link>
                            {/* about */}
                            <div className='flex flex-col items-center justify-center group'>
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">About</button>
                                    <ChevronDown />
                                </div>
                                <div className='flex hidden w-48 text-white group-hover:block '>
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp />
                                    </div>
                                    <div className='flex flex-col p-2 text-black bg-white rounded-sm'>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Current Member</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">previous Member</a>
                                    </div>

                                </div>
                            </div>
                            
                            {/* Rules & regulation */}
                            <div className='flex flex-col items-center justify-center group'>
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">Rules & regulation</button>
                                    <ChevronDown />
                                </div>
                                <div className='flex hidden w-48 text-white group-hover:block '>
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp />
                                    </div>
                                    <div className='flex flex-col p-2 text-black bg-white rounded-sm'>
                                    <Link to={"/unionrule"} className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Rules in Hindi</Link>
                                    <Link to={"/memberrule"} className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Rules in English</Link>
                                    </div>

                                </div>
                            </div>
                            {/* member benefit */}
                            <div className='flex flex-col items-center justify-center group'>
                                <div className='flex flex-row hover:text-gray-300'>
                                    <button className="rounded-md ">Member Benefits</button>
                                    <ChevronDown />
                                </div>
                                <div className='flex hidden w-48 text-white group-hover:block '>
                                    <div className='flex items-center justify-center mt-2'>
                                        <ChevronUp />
                                    </div>
                                    <div className='flex flex-col p-2 text-black bg-white rounded-sm'>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">M . F</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Medical</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Retirement</a>
                                    <a href="#" className="block px-2 py-1 font-normal hover:bg-red-600 hover:text-white">Death Compensation</a>
                                    </div>

                                </div>
                            </div>
                            <Link to={"/contactus"} className="hover:text-gray-300 ">Contact Us</Link>
                        </div>



                        <div className="flex flex-col items-center justify-between p-2 text-white gap-y-4 md:flex-row ">
                            <div className="flex items-center space-x-6">
                                <a href="tel:+91 8655884111" className="flex items-center hover:text-gray-200">
                                    <Phone className="mr-2" />
                                    +91 8655884111
                                </a>
                                <a href="mailto:example@example.com" className="flex items-center hover:text-gray-200">
                                    <Mail className="mr-2" />
                                    union@gmail.com
                                </a>
                            </div>
                            <div className="flex mt-2 space-x-4 md:mt-0">
                                <a href="https://www.facebook.com/@fssamu.in/" target='_blank' className="hover:text-gray-200">
                                    <Facebook />
                                </a>
                                <a href="https://www.instagram.com" target='_blank' className="hover:text-gray-200">
                                    <Instagram />
                                </a>
                                <a href="https://www.twitter.com" target='_blank' className="hover:text-gray-200">
                                    <Twitter />
                                </a>
                                <a href="https://www.youtube.com" target='_blank' className="hover:text-gray-200">
                                    <Youtube />
                                </a>
                            </div>
                        </div>
                    </div>
                )}


            </div>



            <div className='z-0 left-9 lg:top-3'>
                <img
                    src={'./image/dada.jpg'}
                    alt={"logo"}
                    className='object-cover w-10 h-10 rounded-full left-5'
                />
            </div>

        </div>

    );
};

export default Navbar;












