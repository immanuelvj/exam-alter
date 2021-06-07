'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let requestSchema = new Schema({
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
  },
  senderId:{
      type:String
  },
  senderName:{
      type:String
  },
  senderDepartment:{
      type:String
  },
  receiverId:{
      type:String
  },
  receiverName:{
      type:String
  },
  receiverDepartment:{
      type:String
  },
  status:{
      type:String
  },
  level:{
    type:String
  },
  reqId:{
    type:String
  }

  

})


mongoose.model('Request', requestSchema);