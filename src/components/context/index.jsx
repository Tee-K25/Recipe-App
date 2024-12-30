import React, { createContext, useEffect, useState } from "react";
import useFetch from "../data-fetching";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
const GlobalState = ({ children }) => {
  const navigate = useNavigate();

  const [searchParam, setSearchParam] = useState("");
  const [recipeList, setRecipeList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [recipeDetails, setDetails] = useState(null);
  const [favoriteList, setFavoriteList] = useState([]);

  function handleSubmit(event = null) {
    event.preventDefault();
    navigate("/recipes");

    setLoading(true);
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${searchParam}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! : ${res.status} - ${res.statusText}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log("Submitted search data ", data);
          setErrorMsg(null);
          setLoading(false);
          setRecipeList(data);
          setSearchParam("");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error:", error.message);
        setErrorMsg(error.message);
      });
  }

  function handleFavorite(currentRecipe) {
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex((item) => {
      return item.recipe_id === currentRecipe.recipe_id;
    });
    if (index === -1) {
      cpyFavoriteList.push(currentRecipe);
    } else {
      cpyFavoriteList.splice(index, 1);
    }
    setFavoriteList(cpyFavoriteList);
  }

  function removeFavorite(currentId) {
    let cpyFavoriteList = [...favoriteList];
    const index = cpyFavoriteList.findIndex((item) => {
      return item.recipe_id == currentId;
    });
    if (index !== -1) {
      cpyFavoriteList.splice(index, 1);
      setFavoriteList(cpyFavoriteList);
    }
  }
  // console.log("favoritelist", favoriteList);

  function randomRecipe(rList) {
    const randomNumber = Math.floor(Math.random() * rList.length);
    const thyRecipe = rList[randomNumber];
    fetch(`https://forkify-api.herokuapp.com/api/search?q=${thyRecipe}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! : ${res.status} - ${res.statusText}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          // console.log("Submitted search data ", data);
          setErrorMsg(null);
          setLoading(false);
          setRecipeList(data);
          // setSearchParam(thyRecipe);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Error:", error.message);
        setErrorMsg(error.message);
      });
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        recipeList,
        loading,
        setLoading,
        errorMsg,
        recipeDetails,
        setDetails,
        setErrorMsg,
        favoriteList,
        setFavoriteList,
        handleFavorite,
        removeFavorite,
        randomRecipe,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
