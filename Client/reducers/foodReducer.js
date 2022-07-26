import * as types from '../constants/actionTypes';
import getFoodData from "../api/getFoodData";

const initialState = {
  foods: [],
  totalFoods: 0,
};

// Food Object:
  // Food ID
  // calories
  // other nutrient info?

const foodReducer = (state = initialState, action) => {
  const foods = state.foods.slice();
  let totalFoods = state.totalFoods;

  switch (action.type) {
    case types.ADD_FOOD: {
      let foodId = 0;
      getFoodData.foodSearch(action.payload)
      .then(res => {
        console.log(res)
        return res.json();
      }).then(res => {
        foodId = res.foods[0].fdcId;
        console.log(foodId);
        getFoodData.foodDetails(foodId);
      }).then(res => {
        return res.json();
      }).then(data => {
        this.setState({
          foodInfo: data,
        })
      }).catch(err => {
        console.log(err);
      });
      console.log(foodId)
      const newFood = {
        foodId,
        foodName: action.payload,
      }

      foods.push(newFood);
      totalFoods += 1;

      return {
        ...state,
        foods,
        totalFoods,
      };
    }

    default: {
      return state;
    }
  }
};

export default foodReducer;
