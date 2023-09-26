const mongoose = require('mongoose');
const ManagerSchema = require('../schema/ManagerSchema');

const ManagerModel = mongoose.model('managers',ManagerSchema);

module.exports = ManagerModel;