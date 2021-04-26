const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const AuthModel = mongoose.model('Auth')

/* Models */
const scheduleModel = mongoose.model('Schedule')


/* Get all user Details */
let getAllData = (req, res) => {
    scheduleModel.find()
       
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Schedule Controller: getAllData', 10)
                let apiResponse = response.generate(true, 'Failed To Find  Data', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Data Found', 'Schedule Controller: getAllData')
                let apiResponse = response.generate(true, 'No Schedule Data Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'All Schedule Data Found', 200, result)
                res.send(apiResponse)
            }
        })
}// end get all users


 

let createFunction = (req, res) => {

    let createData = () => {
        return new Promise((resolve, reject) => {
            
                        let newData = new scheduleModel({
                            Name:req.body.Name,
                            Department:req.body.Department,
                            HallNo:req.body.HallNo,
                            Date:req.body.Date
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



module.exports = {

    createFunction: createFunction,
    getAllData: getAllData,

}// end exports