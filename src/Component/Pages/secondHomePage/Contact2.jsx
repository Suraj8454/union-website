import React from 'react';
import Navbar2 from './Navbar2';
import Footer from '../Footer';


const Contact2 = () => {
  return (
    <>
   <Navbar2/>
    <div className="container p-6 mx-auto bg-white lg:pt-8 ">
       
      {/* Header */}
      <div className="my-5 text-center lg:my-10">
        <h1 className="text-4xl font-semibold text-gray-800">Contact Us</h1>
      </div>

      {/* Form Section */}
      <div className="lg:flex lg:space-x-12">
        {/* Contact Form */}
        <div className="space-y-4 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800">Write us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Full Name</label>
              <input type="text" className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Email ID</label>
              <input type="email" className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Mobile Number</label>
              <input type="text" className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your Number" />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400" placeholder="Your Message" rows="4"></textarea>
            </div>
            <button type="submit" className="w-full py-3 text-white transition duration-300 bg-red-500 rounded-md shadow-md hover:bg-red-600">Send Message</button>
          </form>
        </div>

        {/* Contact Details & Google Map */}
        <div className="mt-8 space-y-5 lg:w-1/2 lg:mt-0">
          {/* Address */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Meet us</h2>
            <p className="text-lg font-medium text-gray-600">B-413, 414, 415, Express Zone, 4th Floor, Near Western Express Highway, Malad (East), Mumbai, Maharashtra 400097</p>
          </div>

          {/* Email */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Email Id</h2>
            <p className="text-lg font-medium text-gray-600">union@gmail.com</p>
          </div>
          {/*phone number */}
          <div>
            <h2 className="text-2xl font-medium text-gray-800">Phone Number</h2>
            <p className="mt-1 text-lg font-medium text-gray-600">+91 8655884111 , 8104611156 </p>
          </div>

          {/* Google Map */}
          <div className="relative flex items-center justify-center w-full h-64 overflow-hidden rounded-md">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6754530011176!2d72.85596857425418!3d19.165678649152994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7b8eb756d5b%3A0x99235f824b364d01!2sFilm%20Studios%20Setting%20%26%20Allied%20Mazdoor%20Union!5e0!3m2!1sen!2sin!4v1736333113935!5m2!1sen!2sin" className='w-full h-64 border-2 border-black' referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact2;
