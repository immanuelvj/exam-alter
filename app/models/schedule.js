'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let scheduleSchema = new Schema({
 scheduleId:{
   type:String
 },
  Name: {
    type: String,
    default: ''
  },
  userId:{
    type:String,
    default:''
  },
  Slot:{
    type:String
  },
  examdate:{
    type:String
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