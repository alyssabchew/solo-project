import React from 'react';
import Recipe from './Recipe.jsx';

const RecipeDisplay = props => {
  const Recipes = [];
  console.log(props.recipes);
  console.log(props);
  for (const recipe of props.recipes) {
    Recipes.push(
      Recipe({
        ...recipe,
        addIngredient: props.addIngredient,
        deleteRecipe: props.deleteRecipe,
        updateRecipeName: props.updateRecipeName,
      })
    )
  }
  console.log(Recipes);

  return (
    <div className="displayBox">
      <h5>Recipes</h5>
      {Recipes}
    </div>
  )
}

export default RecipeDisplay;