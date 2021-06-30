'use strict';
const mongoose = require('mongoose');

const clotheSchem=mongoose.Schema({
  type:String,
  price:String,
});
const clotheModel=mongoose.model('clothe',clotheSchem);
module.exports =clotheModel;