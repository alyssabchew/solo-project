const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/', recipeController.getRecipes, (req, res) => {
  res.status(200).json(res.locals.recipe);
})

router.post('/recipe', recipeController.addRecipe, (req, res) => {
  res.status(200).json(res.locals.recipe);
})

module.exports = router;