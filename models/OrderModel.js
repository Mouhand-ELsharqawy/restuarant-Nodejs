const mongoose = require('mongoose');
const OrderSchema = require('../schema/OrderSchema');

const OrderModel = mongoose.model('orders',OrderSchema);

module.exports = OrderModel;