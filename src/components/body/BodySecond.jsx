import React from "react";

const BodySecond = () => {
  return (
    <div className="flex flex-col gap-8 mt-10 ml-[90px] pb-10 text-white">
      <h1 className="font-bold text-4xl"> Recommended for you </h1>

      <div className="flex gap-10">
        <div className="w-[300px]">
          <div className="w-[300px] h-[380px]">
            <img
              src="/next.png"
              alt=""
              className="w-full h-full object-cover rounded-md bg-red-200"
            />
          </div>
          <div className="flex w-full">
            <button className="flex-1 py-3 bg-[#B31B1B]">
              <p className="text-lg font-bold">
                Devil{" "}
                <span className="text-xs font-normal text-zinc-300">
                  {" "}
                  (SUB/DUB){" "}
                </span>{" "}
              </p>
              <p className="text-xs text-zinc-400">ep 10/12</p>
            </button>

            <button className="bg-[#FEB53C] p-3 font-bold">Watch Now</button>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-14">
            <div className="rounded-xl">
              <div className="w-[220px] h-[280px]">
                <img
                  src="/one.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className="flex-1 py-3 bg-[#B31B1B]">
                  <p className="text-sm font-bold">Devil</p>
                  <p className="text-[10px] text-zinc-400">ep 10/12</p>
                </button>

                <button className="bg-[#FEB53C] text-sm p-3 font-bold">
                  Watch Now
                </button>
              </div>
            </div>

            <div className="rounded-xl">
              <div className="w-[220px] h-[280px]">
                <img
                  src="/two.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className="flex-1 py-3 bg-[#B31B1B]">
                  <p className="text-sm font-bold">Devil</p>
                  <p className="text-[10px] text-zinc-400">ep 10/12</p>
                </button>

                <button className="bg-[#FEB53C] text-sm p-3 font-bold">
                  Watch Now
                </button>
              </div>
            </div>

            <div className="rounded-xl">
              <div className="w-[220px] h-[280px]">
                <img
                  src="/three.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className="flex-1 py-3 bg-[#B31B1B]">
                  <p className="text-sm font-bold">Devil</p>
                  <p className="text-[10px] text-zinc-400">ep 10/12</p>
                </button>

                <button className="bg-[#FEB53C] text-sm p-3 font-bold">
                  Watch Now
                </button>
              </div>
            </div>
            <div className="">
              <div className="w-[220px] h-[280px]">
                <img
                  src="/next.png"
                  alt=""
                  className="w-full h-full object-cover rounded-md bg-red-200"
                />
              </div>
              <div className="flex w-full">
                <button className="flex-1 py-3 bg-[#B31B1B]">
                  <p className="text-sm font-bold">Devil</p>
                  <p className="text-[10px] text-zinc-400">ep 10/12</p>
                </button>

                <button className="bg-[#FEB53C] text-sm p-3 font-bold">
                  Watch Now
                </button>
              </div>
            </div>
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
