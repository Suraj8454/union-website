
import { ArrowLeft,ArrowRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
  const images = [
    'https://via.placeholder.com/400x300?text=Image+1',
    'https://via.placeholder.com/400x300?text=Image+2',
    'https://via.placeholder.com/400x300?text=Image+3',
    'https://via.placeholder.com/400x300?text=Image+4',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Automatic carousel (change image every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[currentImage]}
        alt={`carousel ${currentImage}`}
        className="object-cover w-full h-60"
      />
    </div>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 lg:flex-row">
      {/* Left Side - Details with Two Buttons */}
      <div className="flex flex-col items-start justify-center p-8 space-y-4 bg-white lg:w-1/2">
        <h1 className="mb-4 text-3xl font-semibold">Responsive Layout</h1>
        <p className="mb-6 text-lg">
          This is the left side of the layout. You can add any content here, like text, images, or other components.
        </p>
        <div className="flex space-x-4">
          <button
            className="px-6 py-2 text-white transition bg-blue-500 rounded-md shadow-md hover:bg-blue-600"
            onClick={() => alert('Button 1 Clicked')}
          >
            Button 1
          </button>
          <button
            className="px-6 py-2 text-white transition bg-green-500 rounded-md shadow-md hover:bg-green-600"
            onClick={() => alert('Button 2 Clicked')}
          >
            Button 2
          </button>
        </div>
      </div>

      {/* Right Side - Automatic Carousel */}
      <div className="flex items-center justify-center p-8 lg:w-1/2 bg-gray-50">
        <CarouselComponent />
      </div>
    </div>
  );
};

export default Home;

