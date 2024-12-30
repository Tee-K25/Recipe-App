import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";

const RecipeCardB = ({ item, handleFavorite }) => {
  const { favoriteList, recipeDetails } = useContext(GlobalContext);
  return (
    <div className="flex flex-col mt-3 p-2 bg-white/75  overflow-hidden w-full h-3/4  shadow-xl border-2 rounded-2xl  border-white">
      <div className="h-3/4  overflow-hidden flex justify-center items-center rounded-xl ">
        <img
          src={item.image_url}
          alt="image"
          className="w-full h-full object-cover transition-tranform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
      <div className="p-3 flex flex-col justify-center items-center">
        <span className="text-sm text-cyan-700 font-medium">
          <span className="text-sm text-cyan-800 font-bold tracking-wide">
            PUBLISHER:{" "}
          </span>
          {item.publisher}
        </span>
        <button
          className="py-3 px-5 mt-7 text-sm font-bold group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-brand1-dark uppercase tracking-wider rounded-md shadow-lg bg-brand1-dark text-white"
          onClick={handleFavorite}
        >
          "Add to favorites"
        </button>
      </div>
    </div>
  );
};

export default RecipeCardB;
