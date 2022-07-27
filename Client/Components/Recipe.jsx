import React from 'react';
import FoodCreator from './FoodCreator.jsx';
import FoodDisplay from './FoodDisplay.jsx';

// each recipe needs it's own button to add a food
let val = '';

const Recipe = props => (
  <div className="recipeBox">
    <h5>Recipe: {props.recipeName}</h5>
    <h5>Ingredients List: {props.ingredientList}</h5>
    <form>
      <input type='text' onChange={(e) => { val = e.target.value }} />
      <button type="submit" onClick={(e) => {props.addIngredient({recipeName: props.recipeName, ingredient: val}); e.preventDefault(); }}>add ingredient</button>
    </form>
    <p></p>
    {/* <FoodCreator addFood={props.addFood} handleSearch={props.handleSearch} handleChange={props.handleChange} searchInput={props.searchInput}/> */}
    {/* <FoodDisplay foods={props.foods} totalFoods={props.totalFoods} /> */}
  </div>
);

export default Recipe;