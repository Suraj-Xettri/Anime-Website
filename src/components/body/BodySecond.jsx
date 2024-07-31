import React from "react";

const BodySecond = () => {
  return (
    <div className="flex flex-col gap-8 mt-10 ml-[90px] text-white">
      <h1 className="font-bold text-4xl"> Recommended for you </h1>

      <div className="flex">
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

        <div>
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
                  Devil
                  <span className="text-xs font-normal text-zinc-300">
                    {"(SUB/DUB)"}
                  </span>
                </p>
                <p className="text-xs text-zinc-400">ep 10/12</p>
              </button>

              <button className="bg-[#FEB53C] p-3 font-bold">Watch Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodySecond;
