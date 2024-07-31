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

  return (
    <div className="px-[90px] gap-8 text-white box-border w-full flex">
      <div className="flex-[3] flex gap-10 flex-wrap p-8 rounded-2xl bg-[#262C33]">
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

      <div className="flex-1 flex flex-col bg-[#262C33]">
        <h1>Most Popular</h1>

        <div>
            <button>1</button>

            <img src="" alt="" />

            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default BodyFinal;
