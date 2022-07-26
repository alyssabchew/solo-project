const fs = require('fs');
const path = require('path');
const db = require('../models/foodModels');

const foodController = {};

foodController.getFoods = (req, res, next) => {
  console.log('get foods in foodController')
  return next();
}

module.exports = foodController;