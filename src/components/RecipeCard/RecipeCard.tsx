import React from "react";
import { RecipeProps } from "../../recipe.model";

import "./RecipeCard.scss";

function RecipeCard({ recipe }: RecipeProps) {
  const recipeStr = recipe.ingredients.join(` | `);

  return (
    <a className="recipeCard" href={`/recipe/${recipe.id}`}>
      <div>
        <h2>{recipe.title}</h2>
        <p>{recipeStr}</p>
      </div>
    </a>
  );
}

export default RecipeCard;
