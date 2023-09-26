const mongoose = require('mongoose');
const ItemSchema = require('../schema/ItemSchema');

const ItemModel = mongoose.model('items',ItemSchema);
module.exports = ItemModel;