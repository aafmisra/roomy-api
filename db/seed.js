const Room = require('../models/roomSchema');
const seedData = require('./seeds.json');

Room.remove({})
    .then(() => {
        return Room.collection.insert(seedData);
    })
    .then(() => {
        process.exit();
    });