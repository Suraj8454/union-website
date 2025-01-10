import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ReactTyped } from 'react-typed'
import Navbar from './New';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const CarouselComponent = () => {
  const images = [
    './union img/head.jpg',
    './union img/banner.jpg',
    './union img/head2.jpg',
    './union img/head3.jpg',
    './union img/head4.jpg',
    './union img/head5.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatic carousel (change image every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  // Next and Previous Image Functions
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-lg overflow-hidden transition duration-700 ease-in-out rounded-lg shadow-lg ">
      <img
        src={images[currentImage]}
        alt={`carousel ${currentImage}`}
        className="w-screen transition-all duration-1000 ease-linear delay-700 object-fit h-60 lg:h-80"
      />
      {/* Carousel Navigation Buttons at the Bottom */}
      <div className="absolute left-0 right-0 flex justify-between px-4 bottom-4">
        <button
          onClick={prevImage}
          className="p-2 text-white transition bg-gray-800 rounded-full opacity-50 hover:opacity-100"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={nextImage}
          className="p-2 text-white transition bg-gray-800 rounded-full opacity-50 hover:opacity-100"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

const Home2 = () => {
  const [setlogin,setSetlogin]=useState(false);
  
  return (
    <>
    <Navbar/>
    
    <div className="flex flex-col w-full min-h-full mt-8 bg-gray-100 lg:flex-row md:mt-14 lg:mt-16">
      {/* Left Side - Details with Two Buttons */}
      <div className="flex flex-col items-start justify-center p-8 space-y-4 bg-white lg:w-1/2">
          <img
            src={'./image/dada.jpg'}
            alt={"image"}
            className="object-cover w-64 h-64 mb-4 border-8 border-black rounded-full place-self-center"
          />

        <h1 className="mb-4 text-2xl font-bold lg:text-4xl md:text-3xl"><ReactTyped strings={["FILM STUDIOS SETTING", "ALLIED MAZDOOR UNION"]} typeSpeed={100} backSpeed={50} loop /></h1>
        <p className="mb-6 text-lg">
          This is the union website for get union card and renew in this website so is so usefull for production employeee.
        </p>
        {/*<h1><ReactTyped strings={["FROM ME","hii"]} typeSpeed={100} backSpeed={150} loop /></h1>*/}
        <div className="flex space-x-4">
          <Link to={"/login"}>
          <button
            className="px-6 py-2 font-medium text-white transition bg-red-500 rounded-md shadow-md hover:bg-red-900 hover:shadow-black"
          >
            Member Loginn
          </button></Link>
        </div>
      </div>

      {/* Right Side - Automatic Carousel with Next/Previous Buttons bg-gray-50*/}
      <div className="flex items-center justify-center p-8 bg-white lg:w-1/2">
        <CarouselComponent />
      </div>
    </div>
   
    <Footer/>
    </>
  );
};

export default Home2;
