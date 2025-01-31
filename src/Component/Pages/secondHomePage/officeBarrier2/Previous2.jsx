import React from 'react';
import CardDetail2 from './CardDetail2';
import Footer2 from '../Footer2';
import Navbar2 from '../Navbar2';

const Previous2 = () => {
  const cardData = [
    {
      title: 'Netflix',
      image: '/imageOTT/netflixs.jpg',
      link: 'https://www.netflix.com'
    },
    {
      title: 'Hotstar',
      image: '/imageOTT/hotstr.jpg',
      link: 'https://www.hotstar.com'
    },
    {
      title: 'YouTube',
      image: '/imageOTT/youtube.jpg',
      link: 'https://www.youtube.com'
    },
    {
      title: 'Disney+',
      image: '/imageOTT/disney+.jpg',
      link: 'https://www.disneyplus.com'
    },
    {
      title: 'Azoman Prime video',
      image: '/imageOTT/amazonprime.jpg',
      link: 'https://www.primevideo.com'
    },
    {
      title: 'ZEE5',
      image: '/imageOTT/zee.jpg',
      link: 'https://www.zee5.com'
    },
    {
      title: 'JioCinema',
      image: '/imageOTT/jiocinema.jpg',
      link: 'https://www.jiocinema.com'
    },
    {
      title: 'MX Player',
      image: '/imageOTT/mxplayer.jpg',
      link: 'https://www.mxplayer.in'
    },
    {
      title: 'Sony LIV',
      image: '/imageOTT/sonyliv.jpg',
      link: 'https://www.sonyliv.com'
    },
    {
      title: 'Eros Now',
      image: '/imageOTT/erosnow.jpg',
      link: 'https://www.erosnow.com'
    },
    {
      title: 'ALTBalaji',
      image: '/imageOTT/altbalaji.jpg',
      link: 'https://www.altt.co.in'
    },
    
   
  ];

  return (
    <>
    <Navbar2/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className='py-5 pt-10 text-center lg:pt-20'><h1 className='text-3xl font-extrabold'><span className='font-medium text-red-600'>Previous Members</span></h1></div>
        <div className="flex flex-wrap -mx-4 text-center lg:pb-20">
          {cardData.map((card, index) => (
            <CardDetail2
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
    <Footer2/>
    </>
  );
};

export default Previous2;

