import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../components/context";
import searchQueries from "../../components/data-fetching";

const Home = () => {
  const { randomRecipe } = useContext(GlobalContext);
  return (
    <div className="flex flex-col justify-center p-10 h-96 gap-8 mt-14 w-1/2 ">
      <div className="flex flex-col gap-2">
        <h1 className="font-cartoon font-medium text-brand1-dark text-6xl">
          The Secret Ingredient?
        </h1>
        <h2 className="font-cartoon font-normal   text-black text-4xl">
          It's our App
        </h2>
      </div>
      <div>
        <h3 className="font-poppins text-brand1-dark  text-xl">
          Unlock endless recipes, smart cooking tips, and meal ideas tailored
          just for you. Your next favorite dish is just a tap away!
        </h3>
      </div>
      <Link to={"/recipes"}>
        <button
          onClick={() => randomRecipe(searchQueries)}
          className=" group transition-transform duration-300 ease-in-out hover:scale-105 animate-pulse hover:animate-none tracking-wider uppercase px-3 py-2 shadow-lg text-center bg-black font-poppins text-sm font-semibold text-white  rounded-xl w-24"
        >
          Browse
        </button>
      </Link>
    </div>
  );
};

export default Home;
