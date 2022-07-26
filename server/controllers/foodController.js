const fs = require('fs');
const path = require('path');
const db = require('../models/foodModels');

const foodController = {};

foodController.getFoods = (req, res, next) => {
  return next();
}

module.exports = foodController;