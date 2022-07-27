import * as types from '../constants/actionTypes';
import getFoodData from "../api/getFoodData";

const initialState = {
  foods: [],
  totalFoods: 0,
  foodData: {},
};

// Food Object:
  // Food ID
  // calories
  // other nutrient info?

const foodReducer = (state = initialState, action) => {
  const foods = state.foods.slice();
  let totalFoods = state.totalFoods;
  let foodData = {};

  switch (action.type) {
    case types.ADD_FOOD: {
      let foodId = 0;
      getFoodData.foodSearch(action.payload)
      .then(response => {
        console.log(response);
        return response.json();
      }).then(json => {
        console.log(json)
        foodId = json.foods[0].fdcId
        return foodId;
      }).then(getFoodData.foodDetails)
      .then(response => {
        console.log("ran both getFoodData functions!")
        console.log(response)
        return response.json();
      }).then(data => {
        foodData = {...data};
        console.log("FOOD RESULTS ", foodData)
        const newFood = {
          foodId,
          foodName: action.payload,
          foodData,
        }

        foods.push(newFood);
        totalFoods += 1;
        console.log(foods);
        return {
          ...state,
          foods,
          totalFoods,
          foodData
        };
      }).catch(ex => {
        console.log('parsing failed', ex)
      });
      // console.log("FOOD RESULTS")

      // const newFood = {
      //   foodId,
      //   foodName: action.payload,
      //   foodData,
      // }

      // foods.push(newFood);
      // totalFoods += 1;

      // return {
      //   ...state,
      //   foods,
      //   totalFoods,
      //   foodData
      // };
    }

    default: {
      return state;
    }
  }
};

export default foodReducer;
