import React, { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import RecipeList from "./components/RecipeList/RecipeList";
import { Recipe as RecipeModel } from "./recipe.model";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import AddRecipe from "./components/AddRecipe/AddRecipe";
import Recipe from "./components/Recipe/Recipe";

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

function App() {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);

  useEffect(() => {
    setRecipes(RECIPES);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact>
              <RecipeList>
                {recipes.map((recipe) => (
                  <RecipeCard recipe={recipe} />
                ))}
              </RecipeList>
            </Route>
            <Route path="/add" component={AddRecipe} />
            <Route path="/recipe/:rid" component={Recipe} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

/*  
  Navigation
  Recipe Component
  AddRecipe Component
  RecipeList Component
  DeleteRecipe function
  
*/
