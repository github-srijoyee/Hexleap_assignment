"use client";
import React, { useState, useEffect } from 'react';
import useClient from "next/client";

const Carousel: React.FC = () => {
  useClient; // Mark this component as a client-side component

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);

    return () => {
      window.removeEventListener('resize', checkMobileView);
    };
  }, []);

  const carouselItems = [
    {
      imageSrc: 'pic5.png',
      title: 'Las Vegas Aviators',
      time: 'Oct 15 | SUN | 4:30 PM',
      location: 'Las Vegas Ballpark, Las Vegas, Nevada',
      buttonLabel: 'Take Flight Collection'
    },
    {
      imageSrc: 'pic6.png',
      title: 'Sacramento River Cats',
      time: 'Oct 15 | SUN | 4:30 PM',
      location: 'Sutter Health Park, Sacramento, California',
      buttonLabel: 'Orange Collection'
    },
    {
        imageSrc: 'pic5.png',
        title: 'Las Vegas Aviators',
        time: 'Oct 15 | SUN | 4:30 PM',
        location: 'Las Vegas Ballpark, Las Vegas, Nevada',
        buttonLabel: 'Take Flight Collection'
      },
      {
        imageSrc: 'pic6.png',
        title: 'Sacramento River Cats',
        time: 'Oct 15 | SUN | 4:30 PM',
        location: 'Sutter Health Park, Sacramento, California',
        buttonLabel: 'Orange Collection'
      },
      {
        imageSrc: 'pic5.png',
        title: 'Las Vegas Aviators',
        time: 'Oct 15 | SUN | 4:30 PM',
        location: 'Las Vegas Ballpark, Las Vegas, Nevada',
        buttonLabel: 'Take Flight Collection'
      },
      {
        imageSrc: 'pic6.png',
        title: 'Sacramento River Cats',
        time: 'Oct 15 | SUN | 4:30 PM',
        location: 'Sutter Health Park, Sacramento, California',
        buttonLabel: 'Orange Collection'
      },
  ];

  const showSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
    <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
      <div className="container flex justify-center items-center">
        <div className={`relative h-auto overflow-hidden rounded-lg md:h-auto w-3/4 items-center grid grid-cols-1 lg:grid-cols-3 gap-3 pt-10 ${isMobileView ? 'sm:grid-cols-1' : ''}`}>
          {carouselItems.map((item, index) => (
            <div key={index} className={`${isMobileView ? (index === currentSlide ? 'block' : 'hidden') : ''} ${!isMobileView ? (index >= currentSlide && index < currentSlide + 3 ? 'block' : 'hidden') : ''} duration-700 ease-in-out`} data-carousel-item>
              <div className="block p-6 bg-white dark:bg-[#3B3E47] border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
                <img
                  src={item.imageSrc}
                  className="block object-cover w-full relative z-0 transition-all duration-300 hover:scale-105 h-100"
                />
              </div>
              <div className="translate-y-[-2px] relative">
                <div className="w-[20px] h-[20px] bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#18272A]  absolute translate-x-[-12px] top-[-8px]  rounded-full"></div>
                <div className="w-[20px] h-[20px] bg-gradient-to-r from-[#F9F8FF] to-[#F3F9FF] dark:bg-gradient-to-r dark:from-[#18282A] dark:to-[#18272A]  absolute translate-x-[12px] right-0 top-[-8px] rounded-full"></div>
              </div>
              <hr className="border-dashed border-gray-700"/>
              <div className="block p-6 bg-white dark:bg-[#3B3E47] hover:shadow-lg hover:shadow-gray-400">
                <h1 className="mb-2 text-md pt-2 font-semibold text-gray-900 dark:text-white flex justify-center">{item.title}</h1>
                <h1 className="mb-2 text-md pt-2 font-light text-gray-900 dark:text-white flex justify-center">{item.time}</h1>
                <p className=" font-extralight text-md flex justify-center justify-items-center">{item.location}</p>
                <button className="bg-black mt-3 p-2 w-full text-sm font-light text-white">{item.buttonLabel}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" onClick={prevSlide} data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ring-4 group-focus:ring-4 group-focus:ring-blue-600 dark:group-focus:ring-blue-600 group-focus:outline-none">
          <svg className="w-4 h-4 dark:text-blue-600 text-blue-600 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button type="button" onClick={isMobileView ? nextSlide : nextSlide} className="absolute top-0 end-0 z-30 flex items-center text-blue-700 justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 ring-4 group-focus:ring-4 group-focus:ring-blue-600 dark:group-focus:ring-blue-600 group-focus:outline-none">
          <svg className="w-4 h-4 dark:text-blue-600 text-blue-600 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>

      {/* Slide indicators */}
 
    </div>
         <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse">
         {carouselItems.map((_, index) => (
           <button
             key={index}
             type="button"
             className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-300'}`}
             aria-current={index === currentSlide ? 'true' : 'false'}
             aria-label={`Slide ${index + 1}`}
             data-carousel-slide-to={index}
             onClick={() => showSlide(index)}
           ></button>
         ))}
       </div>
       </>
  );
};

export default Carousel;
