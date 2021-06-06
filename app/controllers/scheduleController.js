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

    let checkData = () =>{
        return new Promise((resolve,reject)=>{

            scheduleModel.find({'HallNo':req.body.HallNo,'examdate':req.body.examdate,'Slot':req.body.Slot})
       
        .exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'Schedule Controller: getAllData', 10)
                let apiResponse = response.generate(true, 'Failed To Find  Data', 500, null)
                resolve(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No Data Found', 'Schedule Controller: getAllData')
                let apiResponse = response.generate(true, 'No Schedule Data Found', 404, null)
                resolve(apiResponse)
            } else {
                let apiResponse = response.generate(false, `Schedule already found for the Hall ${req.body.HallNo}`, 404, result)
                reject(apiResponse)
            }
        })


        })
    }

    let createData = (emptydata) => {
        return new Promise((resolve, reject) => {
            
                        let newData = new scheduleModel({
                            scheduleId: shortid.generate(),
                            Name:req.body.Name,
                            Department:req.body.Department,
                            HallNo:req.body.HallNo,
                            Date:req.body.Date,
                            examdate:req.body.examdate,
                            userId:req.body.userId,
                            Slot:req.body.Slot,

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

    checkData(req,res)
    .then(createData)
    
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Data created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end user signup function 



let editschedule = (req, res) => {

    let options = req.body;
    scheduleModel.updateOne({ 'scheduleId': req.body.scheduleId }, options).exec((err, result) => {
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
            let apiResponse = response.generate(false, 'Schedule details edited', 200, result)
            res.send(apiResponse)
        }
    });// end user model update


}// end edit user



let deleteSchedule = (req, res) => {
    
    for(let i = 0;i < req.body.scheduleId.length;i++){

    scheduleModel.findOneAndRemove({ 'scheduleId': req.body.scheduleId[i] }).exec((err, result) => {
    
    });// end user model find and remove

    
    let apiResponse = response.generate(false, 'Schedule details deleted', 200,'deleted')
    res.send(apiResponse)

    }
}


module.exports = {

    createFunction: createFunction,
    getAllData: getAllData,
    editschedule,editschedule,
    deleteSchedule,deleteSchedule

}