import * as types from '../constants/actionTypes';

const initialState = {
  foodId: 0,
  calories: 0
};

// Food Object:
  // Food ID
  // calories
  // other nutrient info?

const foodReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.ADD_FOOD: {
      return {
        ...state,
        foodId: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default foodReducer;
