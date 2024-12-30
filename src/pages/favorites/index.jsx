import React, { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeCard from "../../components/card";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { loading, errorMsg, favoriteList, removeFavorite } =
    useContext(GlobalContext);
  return (
    <main className="bg-white min-h-screen flex flex-wrap gap-4 py-6 px-3 justify-center ">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item, index) => {
          return (
            <div
              key={index}
              className="  bg-brand1-default w-80 h-[330px] border-2 border-white rounded-2xl overflow-hidden"
            >
              <div className="  flex justify-center items-center rounded-xl group w-full h-40  overflow-hidden">
                <img
                  src={item.image_url}
                  alt="image"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-3 justify-between items-center mt-5 p-2">
                <h3 className="truncate py-1 px-2 w-full text-center text-md font-poppins text-cyan-800 font-semibold">
                  {item.title}
                </h3>

                <Link
                  to={`/detail/${item.recipe_id}`}
                  className=" hover:shadow-brand1-dark hover:shadow-md ease-in-out duration-300 mt-1 bg-brand1-dark py-1 px-1 inline-block w-[20%] rounded-md text-center tracking-wide text-sm text-white font-poppins font-normal "
                >
                  Info
                </Link>

                <button
                  onClick={() => removeFavorite(item.recipe_id)}
                  className=" hover:shadow-brand1-dark hover:shadow-md ease-in-out duration-300 mt-1 bg-brand1-dark py-1 px-2 rounded-md tracking-wide text-sm text-white font-poppins font-normal "
                >
                  Remove from favorites
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="flex justify-center py-11 text-center  tracking-wider text-5xl font-cartoon font-bold  text-brand1-dark">
          <h3>Selected favorites will appear here</h3>
        </div>
      )}
    </main>
  );
};

export default Favorites;
