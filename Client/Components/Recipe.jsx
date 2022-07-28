import React from 'react';
// import FoodCreator from './FoodCreator.jsx';
// import FoodDisplay from './FoodDisplay.jsx';
import IngredientsList from './IngredientsList.jsx'
import getFoodData from '../api/getFoodData';

// each recipe needs it's own button to add a food
let val = '';
let newName = '';

const Recipe = props => {
  console.log("IN RECIPE")
  console.log(props);
  return (
  <div className="recipeBox">
    <h5>Recipe: {props.recipeName}</h5>
    <IngredientsList ingredientsList={props.ingredientsList} calories={props.calories}/>
    <form>
      <input type='text' onChange={(e) => { val = e.target.value }} />
      <button type="submit" onClick={(e) => {
        console.log(val);
        let foodData, nutrients, carbs, protein, fats, calories;
        getFoodData.foodSearch(val)
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
          props.addIngredient({recipeName: props.recipeName, ingredient: val, calories: cal});
        })
        .catch(err => {
          console.log('failed', err)
          return;
        });
        // props.addIngredient({recipeName: props.recipeName, ingredient: val, calories: ingrCals}); 
        e.preventDefault(); 
      }}>add ingredient</button>
    </form>
    <form>
      <button type="submit" onClick={(e) => {
        props.deleteRecipe(props.recipeName);
        console.log("DELETED");
        // console.log(e.target.parentNode.parentNode);
        e.target.parentNode.parentNode.style.display = 'none';
        e.preventDefault();
      }}>delete recipe</button>
    </form>
    <form>
      <input type='text' onChange={(e) => { newName = e.target.value }} />
      <button type="submit" onClick={(e) => {
        props.updateRecipeName({oldName: props.recipeName, newName});
        console.log("UPDATED");
        // console.log(e.target.parentNode.parentNode);
        // e.target.parentNode.parentNode.style.display = 'none';
        e.preventDefault();
      }}>update recipe name</button>
    </form>
    {/* <FoodCreator addFood={props.addFood} handleSearch={props.handleSearch} handleChange={props.handleChange} searchInput={props.searchInput}/> */}
    {/* <FoodDisplay foods={props.foods} totalFoods={props.totalFoods} /> */}
  </div>
)};

export default Recipe;