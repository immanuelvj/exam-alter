const express = require('express');
const router = express.Router();
const requestController = require("./../../app/controllers/requestController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/request`;

    app.post(`${baseUrl}/create`, auth.isAuthorized ,requestController.createFunction);

    app.post(`${baseUrl}/getreq`,auth.isAuthorized , requestController.getAllData);
    app.post(`${baseUrl}/getadminreq`,auth.isAuthorized ,requestController.getadminData);
    app.post(`${baseUrl}/getstatusreq`,auth.isAuthorized , requestController.getstatusData);
    
    app.post(`${baseUrl}/editreq`, auth.isAuthorized ,requestController.editreq);
    
    


}
