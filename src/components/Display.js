import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Display = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fonction pour récupérer tous les ingrédients d'une recette
  const getAllIngredients = (recipe) => {
    const ingredients = [];
    for (let i = 1; i <= 25; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push(ingredient.toLowerCase());
      }
    }
    return ingredients;
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => {
        console.log(res.data.meals);
        setData(res.data.meals);
        setFilteredData(res.data.meals); // Initialise filteredData avec toutes les recettes
      });
  }, []);

  return (
    <>
      <input
        type="text"
        id="search-bar"
        required
        onChange={(e) => {
          e.preventDefault();
          const term = e.target.value.toLowerCase();
          setSearchTerm(term);

          if (term === "") {
            setFilteredData(data);
          } else {
            const filtered = data.filter((recipe) => {
              const ingredients = getAllIngredients(recipe);
              return ingredients.some((ing) => ing.includes(term));
            });
            setFilteredData(filtered);
          }
        }}
      />

      <div className="recipes">
        {filteredData &&
          filteredData.map((recipe, index) => (
            <Card key={index} recipe={recipe} />
          ))}
      </div>
    </>
  );
};

export default Display;
