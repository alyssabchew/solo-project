import React from 'react';
import Food from './Food.jsx';

const FoodDisplay = props => {
  const Foods = [];

  console.log("food display props: ", props)

  for (const food of props.foods) {
    const nutrients = food.foodData.foodNutrients;
    let carbs, protein, fats, calories;
    for (let i = 0; i < nutrients.length; i++) {
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
    console.log("carbs: ", carbs)
    console.log("calories ", calories);
    // const carbs = nutrients.filter(nutrient => {
    //   console.log("carbs nutrient:", nutrient);
    //   return nutrient.name.indexOf('Carbohydrate') >= 0;
    // })[0].value;
    // const protein = nutrients.filter(nutrient => {
    //   return nutrient.name.indexOf('Protein') >= 0;
    // })[0].value;
    // const fats = nutrients.filter(nutrient => {
    //   return nutrient.name.indexOf('fat') >= 0;
    // })[0].value;
    // const calories = (carbs * 4) + (protein * 4) + (fats * 9);
    Foods.push(
      Food({
        ...food,
        totalFoods: props.totalFoods,
        // foodData: props.foodData,
        // foodId: props.foodId,
        // foodName: props.foodName
        nutrients,
        calories,
      })
    )
  }
  console.log(Foods);

  return (
    <div className="displayBox">
      <h5 id="header3">Foods</h5>
      {Foods}
    </div>
  )
}

export default FoodDisplay;