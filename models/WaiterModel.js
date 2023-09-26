const mongoose = require('mongoose');
const WaiterSchema = require('../schema/WaiterSchema')

const WaiterrModel = mongoose.model('waiters',WaiterSchema);

module.exports = WaiterrModel;