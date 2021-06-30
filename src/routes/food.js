'use strict';
const express = require('express');
const router = express.Router();
const validator = require('../middleware/validator');
const foodModel = require('../models/food');
const Interface = require('../models/data-collection-class');
const food = new Interface(foodModel);

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', validator, creatFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res,next) {
  try {
    const response = await food.read(req.params.id);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function creatFood(req, res,next) {
  try {
    const response = await food.create(req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function updateFood(req, res,next) {
  try {
    const response = await food.update(req.params.id, req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function deleteFood(req, res,next) {
  try {
    const response = await food.delete(req.params.id);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
module.exports = router;