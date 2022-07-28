const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/', recipeController.getRecipes, (req, res) => {
  res.status(200).json(res.locals.recipes);
})

router.post('/', recipeController.addRecipe, (req, res) => {
  res.status(200).json(res.locals.recipe);
})

router.delete('/', recipeController.deleteRecipe, (req, res) => {
  res.status(200);
})

module.exports = router;