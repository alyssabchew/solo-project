import React from 'react';
import getFoodData from '../api/getFoodData';

const Ingredient = props => {
  console.log("IN INGREDIENT")
  console.log(props)
  return (
  <div id="ingredients">
    {/* <p>{props.ingredient}, calories: {props.calories}</p> */}
    <p id="ingredients">{props.ingredient}
    <button id="recipeButton" onClick={(e) => {
      e.target.parentNode.style.display = 'none'; 
      let foodData, nutrients, carbs, protein, fats, calories;
        getFoodData.foodSearch(props.ingredient)
        .then(response => {
          console.log("food search result")
          console.log(response);
          return response.json();
        }).then(json => {
          console.log("json result")
          console.log(json)
          console.log(json.foods[0].fdcId)
          return json.foods[0].fdcId;
        }).then(getFoodData.foodDetails)
        .then(response => {
          console.log("ran both getFoodData functions in ingredients list!")
          console.log(response)
          return response.json();
        }).then(data => {
          console.log("data for foodData", data);
          foodData = {...data};
          nutrients = foodData.foodNutrients;
          return nutrients;
        }).then(nutrients => {
          for (let i = 0; i < nutrients.length; i++) {
            console.log(nutrients[i])
            if (nutrients[i].nutrient.nutrientName) {
              if (nutrients[i].nutrient.nutrientName.includes('Carb')) {
                carbs = nutrients[i].value;
              } else if (nutrients[i].nutrient.nutrientName.includes('Energy')) {
                calories = nutrients[i].value;
              } else if (nutrients[i].nutrient.nutrientName.includes('Protein')) {
                protein = nutrients[i].value;
              } else if (nutrients[i].nutrient.nutrientName.includes('Fat')) {
                fats = nutrients[i].value;
              } 
            } else if (nutrients[i].nutrient.name) {
              if (nutrients[i].nutrient.name.includes('Carb')) {
                carbs = nutrients[i].amount;
              } else if (nutrients[i].nutrient.name.includes('Energy')) {
                calories = nutrients[i].amount;
              } else if (nutrients[i].nutrient.name.includes('Protein')) {
                protein = nutrients[i].amount;
              } else if (nutrients[i].nutrient.name.includes('Fat')) {
                fats = nutrients[i].amount;
              } 
            }
          }
        return calories;
        }).then(cal => {
          props.removeIngredient({recipeName: props.recipeName, ingredient: props.ingredient, calories: cal}); 
        })
        .catch(err => {
          console.log('failed', err)
          return;
        });
      // props.removeIngredient({recipeName: props.recipeName, ingredient: props.ingredient, calories: props.calories}); 
      e.preventDefault(); 
    }}> remove {props.ingredient} from recipe</button>
    </p>
    <br />
  </div>
  )
}

export default Ingredient;