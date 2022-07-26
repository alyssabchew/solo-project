import * as types from '../constants/actionTypes';
import getFoodData from "../api/getFoodData";

const initialState = {
  foodId: 0,
  foodName: 'tofu',
  foods: [],
  calories: 0
};

// Food Object:
  // Food ID
  // calories
  // other nutrient info?

const foodReducer = (state = initialState, action) => {

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
      return {
        ...state,
        foodName: action.payload,
        foodId, 
      };
    }

    default: {
      return state;
    }
  }
};

export default foodReducer;
