export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string;
}

export interface RecipeProps {
  recipe: {
    id: string;
    title: string;
    ingredients: string[];
    instructions: string;
  };
}
