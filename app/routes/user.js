const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")
const auth = require('./../middlewares/auth')
const Recoverauth = require('../middlewares/ResetAuth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;


    app.post(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);

    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized, userController.getSingleUser);

    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    app.post(`${baseUrl}/login`, userController.loginFunction);

    app.post(`${baseUrl}/otplogin`, userController.OtpVerify);

    app.post(`${baseUrl}/adminlogin`, userController.adminloginFunction);

    app.put(`${baseUrl}/:userId/edit`, userController.editUser);

    app.post(`${baseUrl}/delete`, auth.isAuthorized, userController.deleteUser);

    app.post(`${baseUrl}/recoverpassword`, userController.geneateRecover)

    app.post(`${baseUrl}/resetPassword`, Recoverauth.isAuthorized, userController.changepassword)

    app.post(`${baseUrl}/logout`, auth.isAuthorized, userController.logout);

}