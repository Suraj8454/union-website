import React, { useState } from 'react';
import { SquareX, ChevronDown, BookOpen, ExternalLink, PanelLeftOpen,Info } from 'lucide-react';
import { useRef } from 'react';


const CardDetail2 = ({ image, title, link, introduction, country, subscriber, worth, adress, contact, email, imdb, cineguru }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full p-4 sm:w-1/2 lg:w-1/4">
      <div className="overflow-hidden duration-500 shadow-lg bg-gray-50 rougnded-lg rounded-2xl hover:shadow-slate-400 hover:scale-110">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="object-fill w-full h-48" />
        </a>

        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>

          <button
            className="mt-4 text-blue-500 hover:text-blue-700"
            onClick={openModal}
          >
            {isModalOpen ? <ChevronDown color='black' size={30} /> : <Info color='black' size={30} />}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl" onClick={closeModal}>
          <div className="flex flex-col w-11/12 p-6 bg-white rounded-lg sm:w-1/3">
            <button
              className="place-self-end"
              onClick={closeModal}
            >
              <SquareX color='black' size={30} />
            </button>

            <div className='flex flex-col '>
              <h3 className="mt-2 font-serif text-4xl font-bold text-pink-600">{title}</h3>
              <p className='mt-4'><span className='font-semibold '>Introduction : </span>{introduction}</p>
              <p><span className='font-semibold'>No of country : </span>{country}</p>
              <p><span className='font-semibold'>No subscriber : </span>{subscriber}</p>
              <p><span className='font-semibold'>Company Worth : </span>{worth}</p>
              <p><span className='font-semibold'>Office adress : </span>{adress}</p>
              <p><span className='font-semibold'>Contact No : </span>{contact}</p>
              <p><span className='font-semibold'>Email Id : </span>{email}</p>
              <p><span className='font-semibold'>IMDB Rating : </span>{imdb}</p>
              <p><span className='font-semibold'>Cineguru Rating : </span>{cineguru}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail2;



