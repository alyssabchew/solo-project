// import actionType constants
import * as types from '../constants/actionTypes';

export const addFoodActionCreator = foodId => ({
  type: types.ADD_FOOD,
  payload: foodId,
});