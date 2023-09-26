const mongoose = require('mongoose');
const CashierSchema = require('../schema/CashierSchema');

const CashierModel = mongoose.model("cashiers",CashierSchema);
module.exports = CashierModel;