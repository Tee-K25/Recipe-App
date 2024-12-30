import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../components/context";
import RecipeCard from "../../components/card";

const Recipes = () => {
  const { recipeList, loading, errorMsg } = useContext(GlobalContext);

  return (
    <main className="bg-white min-h-screen  flex flex-wrap gap-2 py-6 px-3 justify-center ">
      {loading && <div>Loading...</div>}
      {!loading && errorMsg && <div>Error:{errorMsg}</div>}
      {!loading &&
        !errorMsg &&
        recipeList?.recipes.map((item, index) => (
          <RecipeCard key={index} item={item} />
        ))}
      {!loading && !errorMsg && !recipeList && (
        <div className="flex justify-center py-11 text-center  tracking-wider text-5xl font-cartoon font-bold  text-brand1-dark">
          <h3>Search or browse a recipe</h3>
        </div>
      )}
    </main>
  );
};

export default Recipes;
