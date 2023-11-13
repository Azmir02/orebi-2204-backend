const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postCode: {
        type: String,
        require: true
    },
    country: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('User', userSchema);