const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib');

const UserModel = mongoose.model('User')

/* Models */
const scheduleModel = mongoose.model('Schedule')

const requestModel = mongoose.model('Request')


let createFunction = (req, res) => {

    let createData = () => {
        return new Promise((resolve, reject) => {

            let newData = new requestModel({
                reqId:shortid.generate(),
                scheduleId: req.body.scheduleId,
                Name: req.body.Name,
                Department: req.body.Department,
                HallNo: req.body.HallNo,
                Date: req.body.Date,
                examdate: req.body.examdate,
                userId: req.body.userId,
                Slot: req.body.Slot,
                senderId:req.body.senderId,
                senderName:req.body.senderName,
                senderDepartment:req.body.senderDepartment,
                receiverId:req.body.receiverId,
                receiverName:req.body.receiverName,
                receiverDepartment:req.body.receiverDepartment,
                status:req.body.status,
                level:req.body.level


            })
            newData.save((err, newUser) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'scheduleController: createData', 10)
                    let apiResponse = response.generate(true, 'Failed to create new Data', 500, null)
                    reject(apiResponse)
                } else {
                    let newUserObj = newUser.toObject();
                    resolve(newUserObj)
                }
            })

        })

    }// end create user function

    createData(req, res)
        

        .then((resolve) => {
            let apiResponse = response.generate(false, 'Data created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end user signup function 


let getAllData = (req, res) => {
    requestModel.find({'receiverId':req.body.userId,'level':'faculty'})

        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Schedule Controller: getAllData', 10)
                let apiResponse = response.generate(true, 'Failed To Find  Data', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Data Found', 'Schedule Controller: getAllData')
                let apiResponse = response.generate(true, 'No req Data Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All  Data req found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let getadminData = (req, res) => {
    requestModel.find({'level':'admin'})

        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Schedule Controller: getAllData', 10)
                let apiResponse = response.generate(true, 'Failed To Find  Data', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Data Found', 'Schedule Controller: getAllData')
                let apiResponse = response.generate(true, 'No req Data Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All  Data req found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users

let getstatusData = (req, res) => {
    requestModel.find({'userId':req.body.userId})

        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Schedule Controller: getAllData', 10)
                let apiResponse = response.generate(true, 'Failed To Find  Data', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Data Found', 'Schedule Controller: getAllData')
                let apiResponse = response.generate(true, 'No req Data Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All  Data req found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users


let editreq = (req, res) => {

    let options = req.body;
    requestModel.updateOne({ 'reqId': req.body.reqId }, options).exec((err, result) => {
        if (err) {
            console.log(err)
            logger.error(err.message, 'User Controller:editUser', 10)
            let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            logger.info('No User Found', 'User Controller: editUser')
            let apiResponse = response.generate(true, 'No Schedule Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, ' req edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update


}// end edit user




module.exports = {

    createFunction: createFunction,
    getAllData:getAllData,
    getadminData:getadminData,
    editreq:editreq,
    getstatusData:getstatusData

}