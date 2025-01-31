
import { Facebook, Instagram, Mail, MapIcon, PhoneCall, Twitter, Youtube } from 'lucide-react';
import React from 'react';


const Footer = () => {
    
    return (
        <footer className="py-10 text-white bg-gray-800">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">

                    {/* Company Info and logo*/}
                    <div className="text-center md:text-left ">
                        <img
                            src="./image/Picture1.jpg"
                            alt="Company Logo"
                            className="h-24 mx-auto mb-4 rounded-full md:mx-0"
                        />
                        <h2 className="text-2xl font-bold">Union Website</h2>

                        <p className="mt-4 text-sm opacity-80">union website is use for a public and majdoor.</p>

                    </div>

                    {/* Quick links detail*/}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-center md:text-left ">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="transition-all hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="transition-all hover:text-gray-400">About</a></li>
                            <li><a href="#" className="transition-all hover:text-gray-400">Member Benefits</a></li>
                            <li><a href="#" className="transition-all hover:text-gray-400">Rules & Regulations</a></li>
                            <li><a href="#" className="transition-all hover:text-gray-400">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social media */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-center md:text-left">Follow Us</h3>
                        <div className="flex justify-center space-x-4 md:justify-start">
                            <a href="#" className="text-blue-900 transition-all hover:text-blue-400">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="text-blue-400 transition-all hover:text-blue-300">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="text-pink-600 transition-all hover:text-pink-500">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="text-blue-600 transition-all hover:text-blue-500">
                                <Youtube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div className='gap-y-4'>
                        <h3 className="mb-4 text-xl font-semibold text-center md:text-left">Contact Us</h3>
                        <ul>
                            <h1>Address :- </h1>
                            <li className="flex items-center justify-center mb-2">
                                <span>B-413, 414, 415, Express Zone, 4th Floor, Near Western Express Highway, Malad (East), Mumbai, Maharashtra 400097</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <PhoneCall className="mr-2 text-xl" />
                                <span>+91 8104611156 / 9920562666</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <Mail className="mr-2 text-xl" />
                                <span>alliedmazdoorunion@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* copy right*/}
            <div className="py-4 mt-8 text-sm text-center bg-gray-900">
                <p>&copy; {new Date().getFullYear()} Union Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;


