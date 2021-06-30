'use strict';
const mongoose = require('mongoose');
const foodSchem=mongoose.Schema({
  type:String,
  price:String,
});
const foodModel=mongoose.model('food',foodSchem);
module.exports =foodModel;