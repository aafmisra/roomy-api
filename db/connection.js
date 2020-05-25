const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/roomy');

module.exports = mongoose;