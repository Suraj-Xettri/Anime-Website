import React, { useRef } from "react";
import { popular } from "../../anime-data/Data";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

const BodySecond = () => {

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const newScrollLeft = Math.max(scrollContainerRef.current.scrollLeft - 230, 0);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
      const newScrollLeft = Math.min(scrollContainerRef.current.scrollLeft + 230, maxScrollLeft);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex flex-col gap-8 mt-10 ml-[20px] lg:ml-[90px] pb-10 text-white">
      <h1 className="font-bold text-2xl md:text-4xl"> Recommended for you </h1>

      <FaChevronCircleLeft className="hidden md:block cursor-pointer absolute right-20 text-4xl" onClick={scrollLeft}/>
      <FaArrowCircleRight className="hidden md:block cursor-pointer absolute right-5 text-4xl" onClick={scrollRight}/>

      <div ref={scrollContainerRef} className="flex gap-8  md:gap-10 overflow-x-scroll custom-scrollbar mr-3 ">
        <div className="w-[300px]">
          <div className="w-[220px] h-[270px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[380px]">
            <img
              src="/next.png"
              alt=""
              className="w-full h-full object-cover rounded-md bg-red-200"
            />
          </div>
          <div className="flex w-full">
            <button className="flex-1 py-1 md:py-3 bg-[#B31B1B]">
              <p className="text-lg font-bold">
                Devil
                <span className="text-xs font-normal text-zinc-300">
                  (SUB/DUB)
                </span>
              </p>
              <p className="text-xs text-zinc-400">ep 10/12</p>
            </button>

            <button className="bg-[#FEB53C] p-3 font-bold">Watch Now</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-8">
            {popular.map((popular,i) => (
              <div key={i} className="rounded-xl">
                <div className="h-[200px] w-[180px] md:w-[220px] md:h-[280px]">
                  <img
                    src={popular.imageUrl}
                    alt=""
                    className="w-full h-full object-cover rounded-t bg-red-200"
                  />
                </div>
                <div className="flex w-full">
                  <button className="flex-1 rounded-bl  flex flex-col items-center py-1 bg-[#B31B1B]">
                    <p className="text-sm font-bold whitespace-nowrap w-[100px] overflow-hidden">{popular.animeName}</p>
                    <p className="text-[10px] text-zinc-400">ep {popular.arrivedEpisodes}/{popular.totalEpisodes}</p>
                  </button>

                  <button className="bg-[#FEB53C] rounded-br text-sm p-3 font-bold">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 mt-10">
            <div className=" rounded-2xl w-[150px] h-[70px] bg-[url('/next.png')] bg-no-repeat bg-cover bg-center ">
              <button className="h-full w-full backdrop-blur-[6px]">
                Season 1
              </button>
            </div>

            <div className="rounded-2xl w-[150px] h-[70px] bg-[url('/next.png')] bg-no-repeat bg-cover bg-center ">
              <button className="h-full w-full backdrop-blur-[6px]">
                Season 2
              </button>
            </div>

            <div className="rounded-2xl w-[150px] h-[70px] bg-[url('/next.png')] bg-no-repeat bg-cover bg-center ">
              <button className="h-full w-full backdrop-blur-[6px]">
                Season 3
              </button>
            </div>

            <div className="rounded-2xl w-[150px] h-[70px] bg-[url('/next.png')] bg-no-repeat bg-cover bg-center ">
              <button className="h-full w-full backdrop-blur-[6px]">
                Season 4
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default BodySecond;
