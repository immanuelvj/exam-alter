const express = require('express');
const router = express.Router();
const scheduleController = require("./../../app/controllers/scheduleController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/schedule`;


    app.post(`${baseUrl}/view/all`,auth.isAuthorized ,  scheduleController.getAllData);

    app.post(`${baseUrl}/create`,auth.isAuthorized , scheduleController.createFunction);

    app.post(`${baseUrl}/edit`, auth.isAuthorized ,scheduleController.editschedule);
    
    app.post(`${baseUrl}/delete`,auth.isAuthorized , scheduleController.deleteSchedule);

    app.post(`${baseUrl}/user`,auth.isAuthorized , scheduleController.getUserData)
    
    app.post(`${baseUrl}/freeuser`,auth.isAuthorized , scheduleController.getfreeUser)

}
