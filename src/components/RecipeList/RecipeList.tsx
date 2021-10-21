import "./RecipeList.scss";

function RecipeList(props: any) {
  return <div className="recipeList">{props.children}</div>;
}

export default RecipeList;
