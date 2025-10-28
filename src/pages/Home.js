import React from "react";
import "../assets/Home.scss";
import Recipes from "../components/Recipes";
import Display from "../components/Display";
const Home = ({ recipe }) => {
  return (
    <div>
      <h1>Meal App</h1>
      <Display />

      <Recipes />
    </div>
  );
};

export default Home;
