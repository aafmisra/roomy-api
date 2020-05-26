const mongoose = require('../db/connection');

const ReservationSchema = new mongoose.Schema({
  eventName: String,
  startDate: Date,
  endDate: Date,
  setUp: {
    type: Boolean,
    default: false,
  },
  breakDown: {
    type: Boolean,
    default: false,
  },
  details: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending',
  },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

module.exports = Reservation;
