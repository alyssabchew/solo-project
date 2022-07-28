import React from 'react';
import Ingredient from './Ingredient.jsx';
import getFoodData from '../api/getFoodData';

const IngredientsList = props => {
  const Ingredients = [];
  console.log("IN INGREDIENTS LIST")
  console.log(props.ingredientsList);
  console.log(props);
  let totalCalories = 0;
  for (const ingredient of props.ingredientsList) {
    // let foodData, nutrients, carbs, protein, fats, calories;
    // getFoodData.foodSearch(ingredient)
    // .then(response => {
    //   console.log("food search result")
    //   console.log(response);
    //   return response.json();
    // }).then(json => {
    //   console.log("json result")
    //   console.log(json)
    //   console.log(json.foods[0].fdcId)
    //   return json.foods[0].fdcId;
    // }).then(getFoodData.foodDetails)
    // .then(response => {
    //   console.log("ran both getFoodData functions in ingredients list!")
    //   console.log(response)
    //   return response.json();
    // }).then(data => {
    //   console.log("data for foodData", data);
    //   foodData = {...data};
    //   nutrients = foodData.foodNutrients;
    //   return nutrients;
    // }).then(nutrients => {
    //   for (let i = 0; i < nutrients.length; i++) {
    //     if (nutrients[i].nutrient.nutrientName) {
    //       if (nutrients[i].nutrient.nutrientName.includes('Carb')) {
    //         carbs = nutrients[i].value;
    //       } else if (nutrients[i].nutrient.nutrientName.includes('Energy')) {
    //         calories = nutrients[i].value;
    //       } else if (nutrients[i].nutrient.nutrientName.includes('Protein')) {
    //         protein = nutrients[i].value;
    //       } else if (nutrients[i].nutrient.nutrientName.includes('Fat')) {
    //         fats = nutrients[i].value;
    //       } 
    //     } else if (nutrients[i].nutrient.name) {
    //       if (nutrients[i].nutrient.name.includes('Carb')) {
    //         carbs = nutrients[i].amount;
    //       } else if (nutrients[i].nutrient.name.includes('Energy')) {
    //         calories = nutrients[i].amount;
    //       } else if (nutrients[i].nutrient.name.includes('Protein')) {
    //         protein = nutrients[i].amount;
    //       } else if (nutrients[i].nutrient.name.includes('Fat')) {
    //         fats = nutrients[i].amount;
    //       } 
    //     }
    //   }
    //  return calories;
    // }).then(cal => {
    //   totalCalories += cal;
    //   console.log("total calories: ", totalCalories)
    // })
    // .catch(err => {
    //   console.log('failed', err)
    //   return;
    // });
    // console.log(calories)
    Ingredients.push(
      Ingredient({
        ingredient,
        calories: props.calories,
        removeIngredient: props.removeIngredient,
        recipeName: props.recipeName,
      })
    );
  }
  
  return (
    <div className="displayBox">
      <h5>Ingredients List: </h5>
      {Ingredients}
      <h5>Calories: {props.calories}</h5>
    </div>
  )
}

export default IngredientsList;