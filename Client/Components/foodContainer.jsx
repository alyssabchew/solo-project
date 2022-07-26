import React from 'react';
import getFoodData from "../api/getFoodData";

const FoodContainer = props => {
  console.log("HI FOOD CONTAINER")
  return (
    <div className="container">
      <div className="innerBox">
      <h2 id="header">Foods!</h2>
      <div className="nutritionFacts">
        {/* {getFoodData("fried tofu")} */}
      </div>
      </div>
    </div>
  );
}

export default FoodContainer;