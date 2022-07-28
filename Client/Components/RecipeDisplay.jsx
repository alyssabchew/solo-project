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
        addFood: props.addFood,
        deleteRecipe: props.deleteRecipe,
        updateRecipeName: props.updateRecipeName,
        removeIngredient: props.removeIngredient,
      })
    )
  }
  console.log(Recipes);

  return (
    <div className="displayBox">
      <h5 id="header3">Recipes</h5>
      {Recipes}
    </div>
  )
}

export default RecipeDisplay;