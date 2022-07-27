import React from 'react';

const Food = props => (
  <div className="foodBox">
    <h5>Food: {props.foodName}</h5>
    <h5>ID: {props.foodId}</h5>
    <h5>Brand Name: {props.foodData.brandName}</h5>
    <h5>Serving Size: {props.foodData.servingSize} {props.foodData.servingSizeUnit}</h5>
    <h5>Calories: {props.calories ? props.calories : "not found"}</h5>
    {/* <h5>Nutrients: {props.nutrients}</h5> */}
  </div>
);

export default Food;