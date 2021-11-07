'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let userSchema = new Schema({
    userId: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    usertype: {
        type: String,
        default: 'faculty'
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    mobileNumber: {
        type: Number,
        default: 0
    },
    department: {
        type: String
    },
    createdOn: {
        type: Date,
        default: ""
    },
    otp: {
        type: String
    },
    otpTime: {
        type: Date
    }


})


mongoose.model('User', userSchema);