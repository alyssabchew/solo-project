const fs = require('fs');
const path = require('path');
const db = require('../models/recipeModels');

const recipeController = {};

recipeController.getRecipes = async (req, res, next) => {
  console.log('get recipes in recipeController')
  const recipeGetter = `SELECT * FROM recipes`
  try {
    const recipes = await db.query(recipeGetter);
    res.locals.recipes = recipes.rows;
    return next();
  } catch (err) {
    return next({
      log: `recipeController.getRecipes: ERROR: ${err}`,
      message: { err: 'Couldn\'t get recipes, check server logs' },
    });
  }
}

recipeController.addRecipe = async (req, res, next) => {
  console.log("ADD RECIPE RECIPE CONTROLLER")
  console.log("path: ", __dirname);
  console.log("req.body: ", req.body)
  // const { recipeName, ingredientsList, calories } = req.body;
  // console.log("recipe name: ", recipeName);
  // console.log("ingredients: ", ingredientsList);
  // console.log("calories: ", calories);
  const recipeName = req.body.recipe;
  let calories = 0;
  const recipeAdder = `INSERT INTO recipes (recipeName, calories) VALUES ($1, $2) RETURNING *`
  // const ingredientAdder = `INSERT INTO ingredients (ingredientId, recipeName, ingredientName, ingredientCalories) VALUES ($1, $2, $3, $4)`
   try{
     const recipeParams = [recipeName, calories];
     const result = await db.query(recipeAdder, recipeParams);
     console.log("THIS IS THE QUERY RESULT: ", result);
     res.locals.recipe = result.rows[0];
    //  for (let i = 0; i < ingredientsList.length; i++) {
    //   console.log(ingredientsList[i]);
    //   const { ingredientId, ingredientName, ingredientCalories } = ingredientsList[i]
    //   const ingredientParams = [ingredientId, recipeName, ingredientName, ingredientCalories];
    //   const ingredient = await db.query(ingredientAdder, ingredientParams);
    //   console.log(ingredient);
    //  }
     return next();
   }
   catch (err) {
     next(
       {
         log: `recipeController.addRecipe: ERROR: ${err}`,
         message: { err: 'Couldn\'t add entry, check server logs' },
       }
     )
   }
}

recipeController.deleteRecipe = async(req, res, next) => {
  console.log("DELETE RECIPE RECIPE CONTROLLER")
  console.log("req.body: ", req.body)
  const recipeName = req.body.recipe;
  const recipeDeleter = `DELETE FROM recipes WHERE recipename=$1`
  try{
    const recipeParams = [recipeName];
    const result = await db.query(recipeDeleter, recipeParams);
    console.log("THIS IS THE QUERY RESULT: ", result);
    return next();
  }
  catch (err) {
    next(
      {
        log: `recipeController.deleteRecipe: ERROR: ${err}`,
        message: { err: 'Couldn\'t delete entry, check server logs' },
      }
    )
  }
}

module.exports = recipeController;