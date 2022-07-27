import React from 'react';
import Food from './Food.jsx';

const FoodDisplay = props => {
  const Foods = [];

  console.log("props.foods: ", props.foods)

  for (const food of props.foods) {
    Foods.push(
      Food({
        ...food,
        totalFoods: props.totalFoods,
        foodData: props.foodData
      })
    )
  }
  console.log(Foods);

  return (
    <div className="displayBox">
      <h5>Foods</h5>
      {Foods}
    </div>
  )
}

export default FoodDisplay;