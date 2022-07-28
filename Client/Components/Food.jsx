import React from 'react';

const Food = props => (
  <div className="foodBox">
    <h5 id="header6">Food: {props.foodName}</h5>
    <h5 id="header6">ID: {props.foodId}</h5>
    <h5 id="header6">Brand Name: {props.foodData.brandName}</h5>
    <h5 id="header6">Serving Size: {props.foodData.servingSize} {props.foodData.servingSizeUnit}</h5>
    <h5 id="header6">Calories: {props.calories ? props.calories : "not found"}</h5>
    {/* <h5>Nutrients: {props.nutrients}</h5> */}
  </div>
);

export default Food;