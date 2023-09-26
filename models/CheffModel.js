const mongoose = require('mongoose');
const CheffSchema = require('../schema/Cheffschema');

const CheffModel = mongoose.model('cheffs',CheffSchema);

module.exports = CheffModel;