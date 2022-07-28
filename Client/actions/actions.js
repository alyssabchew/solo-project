// import actionType constants
import * as types from '../constants/actionTypes';

export const addFoodActionCreator = food => ({
  type: types.ADD_FOOD,
  payload: food,
});

export const fetchRecipesActionCreator = dispatch => {
  fetch('/recipe')
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: types.FETCH_RECIPES,
      payload: data.recipes,
    })
    return;
  })
  .catch(err=> {
    console.log(err);
  })
};

export const addRecipeActionCreator = (dispatch, recipeInfo) => {
  // type: types.ADD_RECIPE,
  // payload: recipeName,
  fetch("/recipe", {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ recipe: recipeInfo })
   })
   .then(res => {
    console.log('in fetch post recipe call')
    console.log(res);
    return res.json();
   })
   .then(data => {
    console.log(data);
     dispatch({
       type: types.ADD_RECIPE,
       payload: data.recipename,
     })
   })
   .catch(err =>{
     console.log(err);
   })
};

export const deleteRecipeActionCreator = (dispatch, recipeInfo) => {
  fetch("/recipe", {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ recipe: recipeInfo })
  })
  .then(res => {
   console.log('in fetch delete recipe call')
   console.log(res);
   return res.json();
  })
  .then(data => {
   console.log(data);
    dispatch({
      type: types.DELETE_RECIPE,
      payload: data.recipename,
    })
  })
  .catch(err =>{
    console.log(err);
  })
}

export const updateRecipeNameActionCreator = (dispatch, recipeInfo) => {
  // type: types.ADD_RECIPE,
  // payload: recipeName,
  fetch("/recipe", {
     method: 'PATCH',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({ recipe: recipeInfo })
   })
   .then(res => {
    console.log('in fetch patch recipe call')
    console.log(res);
    return res.json();
   })
   .then(data => {
    console.log(data);
     dispatch({
       type: types.UPDATE_RECIPE_NAME,
       payload: data,
     })
   })
   .catch(err =>{
     console.log(err);
   })
};

export const addIngredientActionCreator = recipeName => ({
  type: types.ADD_INGREDIENT,
  payload: recipeName,
});