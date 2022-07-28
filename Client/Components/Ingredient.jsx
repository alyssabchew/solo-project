import React from 'react';

const Ingredient = props => {
  console.log("IN INGREDIENT")
  console.log(props)
  return (
  <div>
    {/* <p>{props.ingredient}, calories: {props.calories}</p> */}
    <p>{props.ingredient}</p>
  </div>
  )
}

export default Ingredient;