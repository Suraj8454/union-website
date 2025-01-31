import React from 'react';
import CardDetail from './CardDetail2';
import Footer2 from '../Footer2';
import Navbar2 from '../Navbar2';

const Current2 = () => {
  const cardData = [
    {
      title: 'Sharad',
      image: '/imageOTT/netflixs.jpg',
      link: 'https://www.netflix.com'
    },
    {
      title: 'Gopal',
      image: '/imageOTT/hotstr.jpg',
      link: 'https://www.hotstar.com'
    },
    {
      title: 'Bhole',
      image: '/imageOTT/amazonprime.jpg',
      link: 'https://www.primevideo.com'
    },
    {
      title: 'Ranveer',
      image: '/imageOTT/zee.jpg',
      link: 'https://www.zee5.com'
    },



  ];

  return (
    <>
      <Navbar2/>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className='py-5 pt-10 text-center lg:pt-20'><h1 className='text-3xl font-extrabold'><span className='font-medium text-red-600'>Current Members</span></h1></div>
          <div className="flex flex-wrap -mx-4 text-center lg:pb-20">
            {cardData.map((card, index) => (
              <CardDetail
                key={index}
                title={card.title}
                introduction={card.introduction}
                country={card.country}
                subscriber={card.subscriber}
                worth={card.worth}
                adress={card.adress}
                contact={card.contact}
                email={card.email}
                imdb={card.imdb}
                cineguru={card.cineguru}
                image={card.image}
                link={card.link}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default Current2;

