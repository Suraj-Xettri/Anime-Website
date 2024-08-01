import React from "react";
import { newly } from "../../anime-data/Data";

const BodyFinal = () => {
  const anime = newly

  const top5Anime = anime.slice(0, 6);

  return (
    <div className="md:px-[20px] lg:gap-8 gap-4 text-white box-border w-full flex flex-col md:flex-row">
      <div className="flex-[3] flex flex-col md:p-4 rounded-md md:bg-[#262C33]">
        <div className="flex gap-3 flex-wrap justify-center items-center">
          {anime.map((anime, index) => (
            <div key={index} className="md:rounded-t-sm">
              <div className="w-[140px] h-[150px] md:w-[190px] md:h-[240px]">
                <img
                  src={anime.imageUrl}
                  alt=""
                  className="w-full h-full object-cover rounded-t-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className=" flex flex-col items-center justify-center w-full rounded-b-xl py-1 bg-[#B31B1B]">
                  <p className="text-xs font-bold whitespace-nowrap w-[100px] md:w-[150px] overflow-hidden">{anime.name}</p>
                  <p className="text-[10px] text-zinc-400">ep 10/12</p>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex justify-end mr-4" >
          <button className="rounded-xl text-end bg-[#B31B1B] text-black px-8 font-semibold py-1">
            Next
          </button>
        </div>
      </div>

      <div className="flex-1 p-2 lg:p-4 box-border rounded-xl flex flex-col bg-[#262C33]">
        <h1 className="text-xl font-semibold">Most Popular</h1>

        <div className="flex flex-col mt-4 gap-8">
          {top5Anime.map((anime, index) => (
            <div key={index} className="flex  gap-2 lg:gap-4 items-center">
              <button className="px-2 border hidden xl:flex md:px-6 md:py-4">{index + 1}</button>

              <img
                src={anime.imageUrl}
                alt=""
                className="h-24 w-16 md:h-32 rounded-xl md:w-24 object-cover"
              />

              <div>
                <button className="bg-[#FEB53C] px-1 md:px-2 md:py-1 rounded-xl text-[12px]">
                  Sub/Dub
                </button>
                <p className="mt-2 text-xs xl:text-xl">ONE PIECE</p>
                <p className="text-zinc-400 text-[12px] lg:text-sm">Ep 1776.Tv</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyFinal;
