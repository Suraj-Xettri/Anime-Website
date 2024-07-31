import React from "react";

const BodyFinal = () => {
  const anime = [
    {
      name: "Naruto",
      image: "a.png",
    },
    {
      name: "Naruto",
      image: "b.png",
    },

    {
      name: "Naruto",
      image: "c.png",
    },

    {
      name: "Naruto",
      image: "d.png",
    },

    {
      name: "Naruto",
      image: "e.png",
    },

    {
      name: "Naruto",
      image: "f.png",
    },

    {
      name: "Naruto",
      image: "g.png",
    },

    {
      name: "Naruto",
      image: "h.png",
    },

    {
      name: "Naruto",
      image: "a.png",
    },
    ,
    {
      name: "Naruto",
      image: "g.png",
    },

    {
      name: "Naruto",
      image: "h.png",
    },

    {
      name: "Naruto",
      image: "a.png",
    },
  ];

  const top5Anime = anime.slice(0, 6);

  return (
    <div className="px-[90px] gap-8 text-white box-border w-full flex">
      <div className="flex-[3]  flex flex-col p-4 rounded-2xl bg-[#262C33]">
        <div className="flex gap-10 flex-wrap">
          {anime.map((anime, index) => (
            <div key={index} className="rounded-xl">
              <div className="w-[200px] h-[240px]">
                <img
                  src={anime.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className=" w-full rounded-b-xl py-1 bg-[#B31B1B]">
                  <p className="text-sm font-bold">{anime.name}</p>
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

      <div className="flex-1 p-4 box-border flex flex-col bg-[#262C33]">
        <h1 className="text-xl font-semibold">Most Popular</h1>

        <div className="flex flex-col mt-4 gap-8">
          {top5Anime.map((anime, index) => (
            <div key={anime} className="flex gap-4 items-center justify-center">
              <button className="border px-6 py-4">{index + 1}</button>

              <img
                src={anime.image}
                alt=""
                className="h-32 rounded-xl w-24 object-cover"
              />

              <div>
                <button className="bg-[#FEB53C] px-2 py-1 rounded-xl">
                  Sub/Dub
                </button>
                <p className="mt-2">ONE PIECE</p>
                <p className="text-zinc-400 text-sm">Ep 1776.Tv</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyFinal;
