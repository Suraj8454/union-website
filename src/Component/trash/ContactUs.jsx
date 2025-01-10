import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Navbar from "./New";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can handle the form submission logic (e.g., sending it to a server)
  };

  return (
    <>
    <Navbar/>
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mt-8 mb-8 text-4xl font-semibold text-center">Contact Us</h1>
      
      <div className="grid grid-cols-3 gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="p-6 border rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
            <h2 className="mb-4 text-2xl">Meet Us</h2>
            </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl">Our Office</h2>
          <p className="mb-4">
            <strong>Address:</strong> 1234 Street, City, Country
          </p>
          <p className="mb-4">
            <strong>Phone:</strong> +1 (234) 567-8900
          </p>
          <p className="mb-4">
            <strong>Email:</strong> contact@example.com
          </p>

          <p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120551.80651840214!2d72.72348403930661!3d19.22819699841075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b158222067c7%3A0x4ce86be376e098ba!2sGlobal%20Vipassana%20Pagoda!5e0!3m2!1sen!2sin!4v1736325961444!5m2!1sen!2sin" className="w-80 h-52"></iframe>
          </p>

          {/* Google Map */}
          {/*<LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={{ width: "100%", height: "300px" }}
              center={{ lat: 40.748817, lng: -73.985428 }}
              zoom={15}
            >
              <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
            </GoogleMap>
          </LoadScript>*/}

         
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactUs;
