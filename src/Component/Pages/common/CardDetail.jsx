import React, { useState } from 'react';
import { SquareX, ChevronDown, BookOpen, ExternalLink, PanelLeftOpen, Info,ImageUp } from 'lucide-react';
import { useRef } from 'react';


const CardDetail = ({ image, year, link, introduction, country, subscriber, worth, adress, contact, email, imdb, cineguru }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full p-4 sm:w-1/2 lg:w-1/4">
      <div className="overflow-hidden duration-500 shadow-lg bg-gray-50 rougnded-lg rounded-2xl hover:shadow-slate-400 hover:scale-110">


        <div className="p-4">
          <h3 className="text-xl font-semibold">{year}</h3>

          <button
            className="mt-4 text-blue-500 hover:text-blue-700"
            onClick={openModal}
          >
            {isModalOpen ? <ChevronDown color='black' size={30} /> : <ImageUp color='black' size={30} />}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl" onClick={closeModal}>
          <div className="flex flex-col w-1/2 p-5 bg-white rounded-lg h-5/6 ">
            <button
              className="place-self-end"
              onClick={closeModal}
            >
              <SquareX color='black' size={30} />
            </button>

            <div className='flex flex-col '>
              <h3 className="mt-2 font-serif text-4xl font-bold text-pink-600">{year}</h3>
              <div className='flex flex-row flex-wrap items-center justify-center pt-3 space-x-8 '>
                <img
                  src={image}
                  alt={"image"}
                  className="object-cover w-64 h-64 mb-4 rounded-lg lg:w-64 lg:h-full place-self-center"
                />
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDetail;



