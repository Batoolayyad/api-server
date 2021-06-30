'use strict';
const express = require('express');
const router = express.Router();
const clotheModel = require('../models/clothes');
const Interface = require('../models/data-collection-class');
const clothe = new Interface(clotheModel);
const validator = require('../middleware/validator');

router.get('/',getCloth);
router.get('/:id',getCloth);
router.post('/',validator,creatCloth);
router.put('/:id',validator,updateCloth);
router.delete('/:id',deleteCloth);

async function getCloth(req, res,next) {
  try {
    const response = await clothe.read(req.params.id);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function creatCloth(req, res,next) {
  try {
    const response = await clothe.create(req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function updateCloth(req, res,next) {
  try {
    const response = await clothe.update(req.params.id, req.body);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
async function deleteCloth(req, res,next) {
  try {
    const response = await clothe.delete(req.params.id);
    res.json(response);
  } catch (e) {
    next(e);
  }
}
module.exports = router;