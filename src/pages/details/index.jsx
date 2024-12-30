import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";
import RecipeCardB from "../../components/card/indexb";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetails,
    setDetails,
    loading,
    setLoading,
    errorMsg,
    setErrorMsg,
    favoriteList,
    handleFavorite,
  } = useContext(GlobalContext);

  function getRecipeDetails() {
    setLoading(true);
    fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTPS error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          // console.log("Data:", data);
          setDetails(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        setLoading(false);
        setErrorMsg(error.message);
        console.log("Caught error:", error.message);
      });
  }

  useEffect(() => {
    getRecipeDetails();
  }, [id]);

  return (
    <div>
      {recipeDetails ? (
        <main className="bg-white overflow-hidden  grid grid-cols-2 justify-items-center items-start">
          <div className="mt-3 p-5 h-[600px] rounded-xl group w-full ">
            <div className="w-full h-1/2 rounded-lg overflow-hidden group">
              <img
                src={recipeDetails?.recipe?.image_url}
                alt="recipe image"
                className="w-full h-full object-cover block hover:scale-105 duration-300"
              />
            </div>
            <div className="flex justify-center items-center p-4 text-cyan-700 font-poppins text-sm">
              <span className="text-cyan-800 text-md font-poppins font-semibold tracking-wide">
                Publisher
              </span>
              : {recipeDetails?.recipe?.publisher}
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleFavorite(recipeDetails?.recipe)}
                className="  py-3 px-5 mt-7 text-sm font-bold group transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-brand1-dark uppercase tracking-wider rounded-md shadow-lg bg-brand1-dark text-white"
              >
                {favoriteList &&
                favoriteList.length > 0 &&
                favoriteList.findIndex((item) => {
                  return item.recipe_id === recipeDetails?.recipe?.recipe_id;
                }) !== -1
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </button>
            </div>
          </div>
          {/* Will have publisher and wide btn add to fav */}
          <div className="mt-3 ">
            <h2 className="font-bold text-cyan-900 text-3xl py-3 font-poppins ">
              {recipeDetails?.recipe?.title}
            </h2>

            <div>
              <h1 className=" px-5 py-2 font-poppins text-cyan-900  font-semibold text-xl tracking-tighter">
                Ingredients
              </h1>
              <ul className="px-5 font-poppins text-md tracking-normal">
                {recipeDetails?.recipe?.ingredients.length > 0
                  ? recipeDetails?.recipe?.ingredients.map((item, index) => {
                      return (
                        <li className="list-disc" key={index}>
                          {item}
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
};

export default Details;
