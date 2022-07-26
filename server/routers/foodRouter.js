const express = require('express');
const foodController = require('../controllers/foodController');
const router = express.Router();

router.get('/', foodController.getFoods, (req, res) => {
  res.status(200).json(res.locals.food);
})

module.exports = router;