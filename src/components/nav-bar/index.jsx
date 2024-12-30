import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../context";
const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="grid grid-cols-3 px-8 py-4  bg-brand1-light ">
      <img
        src="./assets/icons8-cooking-book-50.png"
        className="w-10 h-10 cursor-pointer"
        alt="recipe icon"
      />
      <ul className="flex gap-10 justify-center items-center font-poppins text-lg text-black font-normal">
        <NavLink to={"/"}>
          <li className="relative py-1  cursor-pointer group ">
            Home
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-brand1-dark transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
        </NavLink>
        <NavLink to={"/recipes"}>
          <li className="relative py-1  cursor-pointer group">
            Recipes
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-brand1-dark transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
        </NavLink>
        <NavLink to={"/favorites"}>
          <li className="relative py-1 cursor-pointer group">
            Favorites
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-brand1-dark transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
          </li>
        </NavLink>
      </ul>
      {/* <img
        className="hidden justify-self-end h-[50px] w-[50px]"
        src="./assets/icons8-search-64.png"
        alt=""
      /> */}
      <form onSubmit={handleSubmit} className="justify-self-end ">
        <input
          type="text"
          placeholder="Search recipe..."
          className="w-96 bg-white/75 p-3 px-8 rounded-full outline-none  shadow-lg shadow-red-100 focus:shadow-red-200 "
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
        />
      </form>
    </nav>
  );
};

export default NavBar;
