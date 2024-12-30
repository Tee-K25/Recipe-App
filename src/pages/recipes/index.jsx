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
    </main>
  );
};

export default Recipes;
