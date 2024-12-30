import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ item }) => {
  return (
    <div className="flex flex-col bg-white/75  overflow-hidden w-80 shadow-xl border-2 rounded-2xl gap-3 border-white">
      <div className="h-40 overflow-hidden flex justify-center items-center rounded-xl ">
        <img
          src={item.image_url}
          alt="image"
          className="w-full object-cover transition-tranform hover:scale-105 duration-300 ease-in-out"
        />
      </div>
      <div className="p-3">
        <span className="text-sm text-cyan-700 font-medium">
          {item.publisher}
        </span>
        <h3 className=" text-xl font-bold truncate">{item.title}</h3>
        <Link
          to={`/detail/${item.recipe_id}`}
          className="p-1 px-3 mt-5 text-sm font-medium tracking-wider inline-block rounded-md shadow-lg bg-brand1-dark text-white"
        >
          Info
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
