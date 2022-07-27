// import actionType constants
import * as types from '../constants/actionTypes';

export const addFoodActionCreator = food => ({
  type: types.ADD_FOOD,
  payload: food,
});

export const addRecipeActionCreator = recipeName => ({
  type: types.ADD_RECIPE,
  payload: recipeName,
});