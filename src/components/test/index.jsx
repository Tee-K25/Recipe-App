import React from "react";
import useFetch from "../data-fetching";

const Testing = () => {
  const url = "https://forkify-api.herokuapp.com/api/search?q=pizza";
  const { data, loading, error } = useFetch(url);
  return <div>Testing...</div>;
};

export default Testing;
