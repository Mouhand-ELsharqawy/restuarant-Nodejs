const mongoose = require('mongoose');
const CustomerSchema = require('../schema/CustomerSchema');

const CustomerModel = mongoose.model('customers',CustomerSchema);

module.exports = CustomerModel;