const mongoose = require('mongoose');
const BillSchema = require('../schema/BillSchema');

const BillModel = mongoose.model("bills",BillSchema);

module.exports = BillModel;