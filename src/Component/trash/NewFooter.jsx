import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, Youtube, ChevronDown, ChevronUp, } from 'lucide-react';

const NewFooter = () => {
  return (
    <footer className="py-8 text-white bg-gray-800 ">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First Container: Logo */}
          <div className="flex items-center justify-center lg:flex-col gap-y-2">
            <img
              src="./image/Picture1.jpg" // Replace with your company logo
              alt="Company Logo"
              className="w-16 h-16 rounded-full"
            />
            <span className="ml-3 text-2xl font-bold">Union Web</span>
          </div>

          {/* Second Container: Links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-gray-400">Home</a></li>
              <li><a href="#" className="hover:text-gray-400">About</a></li>
              <li><a href='#' className="hover:text-gray-400">Rules & Regulations</a></li>
              <li><a href="#" className="hover:text-gray-400">Member Benefits</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
            </ul>
          </div>

          {/* Third Container: Social Media */}
          <div >
            <h3 className="items-center mb-4 text-xl font-semibold place-self-">Follow Us</h3>
            <ul className="flex items-center gap-x-3">
              <li><a href="#" className="text-blue-400 hover:text-blue-500"><Facebook/></a></li>
              <li><a href="#" className="text-blue-400 hover:text-blue-500"><Twitter/></a></li>
              <li><a href="#" className="text-red-400 hover:text-red-500"><Instagram/></a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-700"><Youtube/></a></li>
            </ul>
          </div>

          {/* Fourth Container: Contact */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <p className="mb-2">1234 Street Address</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">+1 (555) 123-4567</p>
            <p className="mb-2">email@company.com</p>
          </div>
        </div>
      </div>

      <div className="py-4 mt-2 text-sm text-center bg-gray-900">
        <p>&copy; 2025 CompanyName. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default NewFooter;
