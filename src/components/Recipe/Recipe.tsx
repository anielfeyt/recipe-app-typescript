import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe as RecipeModel } from "../../recipe.model";

const RECIPES = [
  {
    id: "r1",
    title: "Butter Scones",
    ingredients: ["sugar", "2 eggs", "25ml milk", "pinch salt"],
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa id quia voluptates quisquam, sit tempore illo dignissimos corporis animi dolor nemo aliquam, maiores modi fuga vitae reiciendis! Molestias repellat, iusto, porro odit sapiente ad rem enim, vel quia amet ab nam minus quod nesciunt. Veniam quibusdam ipsa nemo excepturi.",
  },
  {
    id: "r2",
    title: "Pasta",
    ingredients: ["sugar", "2 eggs", "25ml milk", "pasta"],
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa id quia voluptates quisquam, sit tempore illo dignissimos corporis animi dolor nemo aliquam, maiores modi fuga vitae reiciendis! Molestias repellat, iusto, porro odit sapiente ad rem enim, vel quia amet ab nam minus quod nesciunt. Veniam quibusdam ipsa nemo excepturi.",
  },
  {
    id: "r3",
    title: "Chocolate Cake",
    ingredients: [
      "sugar",
      "2 eggs",
      "25ml milk",
      "pinch salt",
      "coco",
      "vanilla essence",
    ],
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa id quia voluptates quisquam, sit tempore illo dignissimos corporis animi dolor nemo aliquam, maiores modi fuga vitae reiciendis! Molestias repellat, iusto, porro odit sapiente ad rem enim, vel quia amet ab nam minus quod nesciunt. Veniam quibusdam ipsa nemo excepturi.",
  },
  {
    id: "r4",
    title: "Baguette",
    ingredients: ["2 eggs", "25ml milk", "pinch salt", "wheat flower"],
    instructions:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis culpa id quia voluptates quisquam, sit tempore illo dignissimos corporis animi dolor nemo aliquam, maiores modi fuga vitae reiciendis! Molestias repellat, iusto, porro odit sapiente ad rem enim, vel quia amet ab nam minus quod nesciunt. Veniam quibusdam ipsa nemo excepturi.",
  },
];

function Recipe() {
  let { rid }: any = useParams();
  const [recipe, setRecipe] = useState<RecipeModel>();

  useEffect(() => {
    if (RECIPES) {
      let recipeObj = RECIPES.find(({ id }) => id === rid);
      setRecipe(recipeObj);
    }
  }, [rid]);

  return (
    <div>
      <h1>{recipe && recipe.title}</h1>
      <div>
        <ul>{recipe && recipe.ingredients.map((ig) => <li>{ig}</li>)}</ul>
      </div>
      <p>{recipe && recipe.instructions}</p>
    </div>
  );
}

export default Recipe;
