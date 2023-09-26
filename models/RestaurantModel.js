const mongoose = require('mongoose');
const RestaurantSchema = require('../schema/RestaurantSchema');

const RestaurantModel = mongoose.model('restaurants',RestaurantSchema);

module.exports = RestaurantModel;