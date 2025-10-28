import React, { useState } from "react";
import "../assets/Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const Card = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="card">
      <li className="recipes-info">
        <h4>{recipe.strMeal}</h4>
        <h5>
          <span>Origin :</span> {recipe.strArea}
        </h5>
        <img src={recipe.strMealThumb} alt={"photo " + recipe.strMeal} />
      </li>
      <div className="recipes-content">
        <p className={isExpanded ? "expanded" : "collapsed"}>
          {recipe.strInstructions}
        </p>
        {/* L'icône en dehors du paragraphe */}
        {recipe.strInstructions.length > 300 && (
          <FontAwesomeIcon
            icon={isExpanded ? faCaretUp : faCaretDown}
            className="expand-icon"
            onClick={toggleExpand}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
