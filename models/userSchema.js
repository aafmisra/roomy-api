const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    isAdmin: {
        type: Boolean,
        default: false 
    },
    department: {
        type: String,
        enum: ['Education', 'Operations', 'Animal Care', 'Visitor Services', 'Veterinary']
    }
})