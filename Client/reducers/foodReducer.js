import * as types from '../constants/actionTypes';
import getFoodData from "../api/getFoodData";

const initialState = {
  foods: [],
  totalFoods: 0,
  recipes: [],
  totalRecipes: 0,
};

// Food Object:
  // Food ID
  // calories
  // other nutrient info?

const foodReducer = (state = initialState, action) => {
  const foods = state.foods.slice();
  const recipes = state.recipes.slice();
  let totalFoods = state.totalFoods;
  let totalRecipes = state.totalRecipes;

  switch (action.type) {
    case types.ADD_RECIPE: {
      console.log(action.payload) 
      const newRecipe = {
        recipeName: action.payload,
        ingredientsList: [],
      }
      console.log(newRecipe);
      recipes.push(newRecipe);
      console.log("recipes after adding newRecipe: ", recipes);
      totalRecipes += 1;
      console.log(totalRecipes);
      return {
        ...state,
        recipes,
        totalRecipes
      };
    }
    case types.ADD_INGREDIENT: {
      console.log("add ingredient payload: ", action.payload)
      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].recipeName === action.payload.recipeName) {
          recipes[i].ingredientsList = recipes[i].ingredientsList.push(action.payload.ingredient)
        }
      }
      console.log(recipes);
      return {
        ...state,
        recipes,
      };
    }
    case types.ADD_FOOD: {
      console.log(action.payload)
      // let foodId = 0;
      // getFoodData.foodSearch(action.payload)
      // .then(response => {
      //   console.log(response);
      //   return response.json();
      // }).then(json => {
      //   console.log(json)
      //   foodId = json.foods[0].fdcId
      //   return foodId;
      // }).then(getFoodData.foodDetails)
      // .then(response => {
      //   console.log("ran both getFoodData functions!")
      //   console.log(response)
      //   return response.json();
      // }).then(data => {
      //   foodData = {...data};
      //   console.log("FOOD RESULTS ", foodData)
      //   const newFood = {
      //     foodId,
      //     foodName: action.payload,
      //     foodData,
      //   }

      //   foods.push(newFood);
      //   totalFoods += 1;
      //   console.log(foods);
      //   const newState = {
      //     ...state,
      //     foods,
      //     totalFoods,
      //     foodData
      //   };
      //   console.log(newState);
      //   return newState;
      // }).catch(ex => {
      //   console.log('parsing failed', ex)
      //   return;
      // });
      // console.log("FOOD RESULTS")
      console.log(action.payload['foodId'])
      const newFood = {
        foodId: action.payload['foodId'],
        foodName: action.payload['foodName'],
        foodData: action.payload['foodData'],
      }
      console.log(newFood);
      foods.push(newFood);
      console.log("foods after adding newFood: ", foods);
      totalFoods += 1;
      console.log(totalFoods);
      return {
        ...state,
        foods,
        totalFoods,
      };
    }

    // case SET_FOOD_NAME:
    //   {

    //   }

    default: {
      return state;
    }
  }
};

export default foodReducer;
