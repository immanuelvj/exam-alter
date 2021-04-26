const express = require('express');
const router = express.Router();
const scheduleController = require("./../../app/controllers/scheduleController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/schedule`;


    app.get(`${baseUrl}/view/all`, scheduleController.getAllData);

    app.post(`${baseUrl}/create`, scheduleController.createFunction);

}
