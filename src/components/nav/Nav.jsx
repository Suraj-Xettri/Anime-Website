import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="fixed w-screen h-[60px] md:h-[80px] text-white bg-[#000000] flex items-center justify-between">
      <div className="flex ml-[20px] gap-3">
        <h1 className="font-bold text-xl whitespace-nowrap md:text-3xl">
          Anime Plex
        </h1>
        <input
          type="text"
          className="ml-3 rounded-md outline-none text-black hidden sm:flex sm:w-[250px] md:w-[404px] h-8 pl-4 font-bold bg-[#D9D9D9]"
          placeholder="Search.."
        />
        <button className="font-bold px-2 rounded-md sm:flex hidden items-center bg-[#B31B1B]">
          Upcoming Anime
        </button>
      </div>
      <div className="flex gap-2 md:gap-5 items-center md:mr-5">
        <FaUserCircle className="text-xl sm:text-3xl font-bold" />
        <GiHamburgerMenu className="text-xl sm:text-3xl font-bold" />

        <button className="px-2 font-bold rounded-md bg-[#B31B1B] mr-2">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Nav;
