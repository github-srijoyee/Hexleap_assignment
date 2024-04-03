
import Head from "next/head";
import Image from "next/image";
import pic1 from "@/public/pic1.png";
import Carousel from "./carousel";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto px-4 py-20">
        <h1 className="font-sans font-bold text-xl lg:text-3xl underline decoration-[#738FFF] underline-offset-8">Sports</h1>
       <div className="md:flex pt-14 grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 gap-4 grid-cols-1 overflow-hidden">
        <div className=" p-6 bg-white dark:bg-[#3B3E47]
             border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
<img src="pic1.png" alt="" className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-105"/>
    <h1 className="mb-2 text-md font-semibold text-gray-900 pt-2 dark:text-white">
        Sacramento River Cats
    </h1>
    <div className=" p-2 bg-[#F7F7F8] dark:bg-[#292B32]
          rounded-md grid-cols-2 flex justify-between">
            <div>
            <p className=" font-extralight text-xs">
        Total Events
        </p>
        <p className=" font-medium text-sm pt-1">
        48 Events
        </p>
            </div>
            <div>
            <p className=" font-extralight text-xs">
        Sports
        </p>
        <p className=" font-medium text-sm pt-1">
        Baseball
        </p>
            </div>
            </div>
</div>
<div className="block p-6 bg-white dark:bg-[#3B3E47]
             border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
              <img src="pic2.png" alt="" className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-105" />
    <h1 className="mb-2 text-md pt-2 font-semibold text-gray-900 dark:text-white">
        Las Vegas Aviators
    </h1>
    <div className="block p-2 bg-[#F7F7F8] dark:bg-[#292B32]
          rounded-md grid-cols-2 flex justify-between">
            <div>
            <p className=" font-extralight text-xs">
        Total Events
        </p>
        <p className=" font-medium text-sm pt-1">
        28 Events
        </p>
            </div>
            <div>
            <p className=" font-extralight text-xs">
        Sports
        </p>
        <p className=" font-medium text-sm pt-1">
        Baseball
        </p>
            </div>
            </div>
</div>
<div className="block p-6 bg-white dark:bg-[#3B3E47]
             border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
<img src="pic3.png" alt="" className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-105"/>
    <h1 className="mb-2 text-md pt-2 font-semibold text-gray-900 dark:text-white">
        New Jersey Devils
    </h1>
    <div className=" p-2 bg-[#F7F7F8] dark:bg-[#292B32]
          rounded-md grid-cols-2 flex justify-between">
            <div>
            <p className=" font-extralight text-xs">
        Total Events
        </p>
        <p className=" font-medium text-sm pt-1">
        15 Events
        </p>
            </div>
            <div>
            <p className=" font-extralight text-xs">
        Sports
        </p>
        <p className=" font-medium text-sm pt-1">
        Ice Hockey
        </p>
            </div>
            </div>
</div>
<div className="block p-6 bg-white dark:bg-[#3B3E47]
             border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
<img src="pic2.png" alt="" className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-105"/>
    <h1 className="mb-2 text-md pt-2 font-semibold text-gray-900 dark:text-white">
        Las Vegas Aviators
    </h1>
    <div className="p-2 bg-[#F7F7F8] dark:bg-[#292B32]
          rounded-md grid-cols-2 flex justify-between">
            <div>
            <p className=" font-extralight text-xs">
        Total Events
        </p>
        <p className=" font-medium text-sm pt-1">
        28 Events
        </p>
            </div>
            <div>
            <p className=" font-extralight text-xs">
        Sports
        </p>
        <p className=" font-medium text-sm pt-1">
        Baseball
        </p>
            </div>
            </div>
</div>
<div className="block p-6 bg-white dark:bg-[#3B3E47]
             border border-gray-200 dark:border-gray-800 hover:shadow-lg hover:shadow-gray-400">
<img src="pic4.png" alt="" className="w-full h-auto relative z-0 transition-all duration-300 hover:scale-105"/>
    <h1 className="mb-2 text-lg font-bold text-gray-900 pt-2 dark:text-white">
        Advertisement title
    </h1>
    <div className="max-w-fit">
    <h5 className=" dark:text-white font-light text-sm flex w-full">
Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h5>
        <h5 className=" dark:text-white font-light text-sm flex w-full">
        Lorem ipsum dolor sit, amet consectetur dolor.
        </h5>
        <h5 className=" dark:text-white font-light text-sm flex w-full">
         amet consectetur, adipisicing elit. Ab, porro! amet ipsum
        </h5>
        <h5 className=" dark:text-white font-light text-sm flex w-full">
Lorem ipsum dolor sit amet consectetur.
        </h5>
        </div>
</div>
</div>
<div className="flex justify-center">
<button className="w-fit absolute mt-10 p-3 hover:scale-110 active:scale-100 text-white duration-200 bg-[#2C9CF0]">
  See More
  </button>
  </div>
  </div>
  <div className="container mx-auto px-4 py-20 bg-[#F9F8FF] dark:bg-[#18272A] mt-20">
<h1 className="text-3xl font-extrabold flex justify-center dark:text-white">Collection Spotlight</h1>
<p className="p-4 flex text-center lg:ps-24 lg:pe-24 dark:text-white">Discover extraordinary moments with our Spotlight Collection metatickets-exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
  

<div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
<Carousel/>

</div>

  </div>
  <div>
 <br />
 <br />
 <br />
    </div>    

</main>
  );
}
