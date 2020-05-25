const mongoose = require('../db/connection');

const RoomSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;