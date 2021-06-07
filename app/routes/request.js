const express = require('express');
const router = express.Router();
const requestController = require("./../../app/controllers/requestController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/request`;

    app.post(`${baseUrl}/create`, requestController.createFunction);

    app.post(`${baseUrl}/getreq`, requestController.getAllData);
    app.post(`${baseUrl}/getadminreq`, requestController.getadminData);
    app.post(`${baseUrl}/getstatusreq`, requestController.getstatusData);
    
    app.post(`${baseUrl}/editreq`, requestController.editreq);
    
    


}
