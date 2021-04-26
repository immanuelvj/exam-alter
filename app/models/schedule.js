'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let scheduleSchema = new Schema({
 
  Name: {
    type: String,
    default: ''
  },
  Department: {
    type: String,
    default: ''
  },
  HallNo: {
    type: String,
    default: ''
  },
  Date: {
    type: String,
    default: ''
  }
  

})


mongoose.model('Schedule', scheduleSchema);