const fs = require('fs');
const path = require('path');
const db = require('../models/recipeModels');

const recipeController = {};

recipeController.getRecipes = (req, res, next) => {
  console.log('get recipes in recipeController')
  return next();
}

recipeController.addRecipe = async (req, res, next) => {
  console.log("ADD RECIPE RECIPE CONTROLLER")
  const recipe = req.body;
  console.log(recipe)
  const recipeAdder = `INSERT INTO recipes (recipe) VALUES ($1) RETURNING *`
   try{
     const params = [recipe];
     const result = await db.query(recipeAdder, params);
     console.log(result);
     res.locals.recipe = result.rows[0];
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

module.exports = recipeController;