const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const passwordLib = require('./../libs/generatePasswordLib');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const validateInput = require('../libs/paramsValidationLib')
const check = require('../libs/checkLib')
const token = require('../libs/tokenLib')
const resettoken = require('../libs/resettoken')

const AuthModel = mongoose.model('Auth')

/* Models */
const UserModel = mongoose.model('User')
const RecoverModel = mongoose.model('Recover')
var nodemailer = require('nodemailer');



/* Get all user Details */
let getAllUser = (req, res) => {
        UserModel.find()
            .select(' -__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller: getAllUser', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No User Found', 'User Controller: getAllUser')
                    let apiResponse = response.generate(true, 'No User Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'All User Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } // end get all users

/* Get single user details */
let getSingleUser = (req, res) => {
        UserModel.findOne({ 'userId': req.params.userId })
            .select('-password -__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller: getSingleUser', 10)
                    let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                    res.send(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No User Found', 'User Controller:getSingleUser')
                    let apiResponse = response.generate(true, 'No User Found', 404, null)
                    res.send(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User Details Found', 200, result)
                    res.send(apiResponse)
                }
            })
    } // end get single user



let deleteUser = (req, res) => {
        console.log(req.body)
        for (let i = 0; i < req.body.userId.length; i++) {
            console.log(req.body.userId[i], 'is deleted')
            UserModel.findOneAndRemove({ 'userId': req.body.userId[i] }).exec((err, result) => {
                console.log(req.body.userId[i], 'is deleted')
            }); // end user model find and remove


            let apiResponse = response.generate(false, 'User details deleted', 200, 'deleted')
            res.send(apiResponse)


        }


    } // end delete user

let editUser = (req, res) => {

        let options = req.body;
        UserModel.updateOne({ 'userId': req.params.userId }, options).exec((err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'User Controller:editUser', 10)
                let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                logger.info('No User Found', 'User Controller: editUser')
                let apiResponse = response.generate(true, 'No User Found', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'User details edited', 200, result)
                res.send(apiResponse)
            }
        }); // end user model update


    } // end edit user


// start user signup function 

let signUpFunction = (req, res) => {

        let validateUserInput = () => {
                return new Promise((resolve, reject) => {
                    if (req.body.email) {
                        if (!validateInput.Email(req.body.email)) {
                            let apiResponse = response.generate(true, 'Email Does not met the requirement', 400, null)
                            reject(apiResponse)
                        } else if (check.isEmpty(req.body.password)) {
                            let apiResponse = response.generate(true, '"password" parameter is missing"', 400, null)
                            reject(apiResponse)
                        } else {
                            resolve(req)
                        }
                    } else {
                        logger.error('Field Missing During User Creation', 'userController: createUser()', 5)
                        let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                        reject(apiResponse)
                    }
                })
            } // end validate user input
        let createUser = () => {
                return new Promise((resolve, reject) => {
                    UserModel.findOne({ email: req.body.email })
                        .exec((err, retrievedUserDetails) => {
                            if (err) {
                                logger.error(err.message, 'userController: createUser', 10)
                                let apiResponse = response.generate(true, 'Failed To Create User', 500, null)
                                reject(apiResponse)
                            } else if (check.isEmpty(retrievedUserDetails)) {
                                console.log(req.body)
                                let newUser = new UserModel({
                                    userId: shortid.generate(),
                                    firstName: req.body.firstName,
                                    lastName: req.body.lastName || '',
                                    email: req.body.email.toLowerCase(),
                                    mobileNumber: req.body.mobileNumber,
                                    password: passwordLib.hashpassword(req.body.password),
                                    department: req.body.department,
                                    createdOn: time.now(),
                                    usertype: req.body.usertype
                                })
                                newUser.save((err, newUser) => {
                                    if (err) {
                                        console.log(err)
                                        logger.error(err.message, 'userController: createUser', 10)
                                        let apiResponse = response.generate(true, 'Failed to create new User', 500, null)
                                        reject(apiResponse)
                                    } else {
                                        let newUserObj = newUser.toObject();
                                        resolve(newUserObj)
                                    }
                                })
                            } else {
                                logger.error('User Cannot Be Created.User Already Present', 'userController: createUser', 4)
                                let apiResponse = response.generate(true, 'User Already Present With this Email', 403, null)
                                reject(apiResponse)
                            }
                        })
                })
            } // end create user function


        validateUserInput(req, res)
            .then(createUser)
            .then((resolve) => {
                delete resolve.password
                let apiResponse = response.generate(false, 'User created', 200, resolve)
                res.send(apiResponse)
            })
            .catch((err) => {
                console.log(err);
                res.send(err);
            })

    } // end user signup function 

// start of login function 
let loginFunction = (req, res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("req body email is there");
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                            /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                            /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    logger.info('Login Failed Due To Invalid Password', 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Wrong Password.Login Failed', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    let createOtp = (resolveData) => {
        return new Promise((resolve, reject) => {
            var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var result = '';
            for (var i = 0; i < 6; i++) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            resolveData.otp = result;
            resolveData.otpTime = Date.now();
            UserModel.updateOne({ 'userId': resolveData.userId }, resolveData).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller:editUser', 10)
                    let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No User Found', 'User Controller: editUser')
                    let apiResponse = response.generate(true, 'No User Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User details edited', 200, resolveData)
                    resolve(apiResponse)
                }
            }); // end user model update
        })
    }

    generateEmail = (data) => {
        return new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'm2examalteration@gmail.com',
                    pass: 'noidea2021'
                }
            });
            const mailOptions = {
                from: 'm2examalteration@gmail.com', // sender address
                to: req.body.email, // list of receivers
                subject: `Otp for Exam alteration `, // Subject line
                html: `<img src="https://www.amrita.edu/sites/default/files/new-white-logo-with-school-name.jpg" style="width:300px"/><br><p style="font-size:14.5px;font-weight:600px">Hi ${data.data.firstName} ,  </p> <p style="font-size:12px"> <br>
             <p style="font-size:16px">Your otp is ${data.data.otp}</p><br><p style="font-size:10px">Otp valid for 5 mins</p>
            ` // plain text body
            };

            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    let apiResponse = response.generate(true, 'Message failed', 304, err)
                    console.log(err)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Message sent', 200, data)

                    resolve(apiResponse)
                }
            });

        })
    }


    findUser(req, res)
        .then(validatePassword)
        .then(createOtp)
        .then(generateEmail)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Password verified ! Otp required', 200, resolve)

            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);

            res.send(err)
        })
}

let OtpVerify = (req, res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.userId) {
                console.log("req body email is there");
                console.log(req.body);
                UserModel.findOne({ userId: req.body.userId }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                            /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                            /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        logger.info('User Found', 'userController: findUser()', 10)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let verifyToken = (userDetails) => {
        return new Promise((resolve, reject) => {
            let diffInMilliSeconds = Math.abs(Date.now() - userDetails.otpTime) / 1000;
            let minutes = Math.floor(diffInMilliSeconds / 60) % 60;
            diffInMilliSeconds -= minutes * 60;
            console.log('minutes', minutes);
            console.log(time)
            if (req.body.otp == userDetails.otp) {
                if (minutes < 5) {
                    let apiResponse = response.generate(true, "Otp Verified", 200, null)
                    resolve(userDetails)
                } else {
                    let apiResponse = response.generate(true, "Otp Timeout", 400, null)
                    reject(apiResponse)
                }
            } else {
                let apiResponse = response.generate(true, "Otp Invalid", 400, null)
                reject(apiResponse)
            }
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    console.log(err.message, 'userController: saveToken', 10)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,

                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    findUser(req, res)
        .then(verifyToken)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Otp Verified', 200, resolve)

            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);

            res.send(err)
        })

}

let adminloginFunction = (req, res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("req body email is there");
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve User Data', 'userController: findUser()', 10)
                            /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                            /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        logger.error('No User Found', 'userController: findUser()', 7)
                        let apiResponse = response.generate(true, 'No User Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        logger.info('User Found', 'userController: findUser()', 10)
                        if (userDetails.usertype == 'admin') {
                            resolve(userDetails)
                        } else {
                            let apiResponse = response.generate(true, 'Unauthorized access', 404, null)
                            console.log(userDetails)
                            reject(apiResponse)
                        }
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }
    let validatePassword = (retrievedUserDetails) => {
        console.log("validatePassword");
        return new Promise((resolve, reject) => {
            passwordLib.comparePassword(req.body.password, retrievedUserDetails.password, (err, isMatch) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Login Failed', 500, null)
                    reject(apiResponse)
                } else if (isMatch) {
                    let retrievedUserDetailsObj = retrievedUserDetails.toObject()
                    delete retrievedUserDetailsObj.password
                    delete retrievedUserDetailsObj._id
                    delete retrievedUserDetailsObj.__v
                    delete retrievedUserDetailsObj.createdOn
                    delete retrievedUserDetailsObj.modifiedOn
                    resolve(retrievedUserDetailsObj)
                } else {
                    logger.info('Login Failed Due To Invalid Password', 'userController: validatePassword()', 10)
                    let apiResponse = response.generate(true, 'Wrong Password.Login Failed', 400, null)
                    reject(apiResponse)
                }
            })
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            token.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            AuthModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    console.log(err.message, 'userController: saveToken', 10)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new AuthModel({
                        userId: tokenDetails.userId,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    findUser(req, res)
        .then(validatePassword)
        .then(generateToken)
        .then(saveToken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Login Successful', 200, resolve)

            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);

            res.send(err)
        })
}



// end of the login function 


/**
 * function to logout user.
 * auth params: userId.
 */
let logout = (req, res) => {
        AuthModel.findOneAndRemove({ userId: req.user.userId }, (err, result) => {
            if (err) {
                console.log(err)
                logger.error(err.message, 'user Controller: logout', 10)
                let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                let apiResponse = response.generate(true, 'Already Logged Out or Invalid UserId', 404, null)
                res.send(apiResponse)
            } else {
                let apiResponse = response.generate(false, 'Logged Out Successfully', 200, null)
                res.send(apiResponse)
            }
        })
    } // end of the logout function.
geneateRecover = (req, res) => {
    let findUser = () => {
        console.log("findUser");
        return new Promise((resolve, reject) => {
            if (req.body.email) {
                console.log("req body email is there");
                console.log(req.body);
                UserModel.findOne({ email: req.body.email }, (err, userDetails) => {
                    /* handle the error here if the User is not found */
                    if (err) {
                        console.log(err)
                        logger.error('Failed To Retrieve Admin Data', 'adminController: findAdmin()', 10)
                            /* generate the error message and the api response message here */
                        let apiResponse = response.generate(true, 'Failed To Find User Details', 500, null)
                        reject(apiResponse)
                            /* if Company Details is not found */
                    } else if (check.isEmpty(userDetails)) {
                        /* generate the response and the console error message here */
                        logger.info('No admin Found', 'adminController: findAdmin()', 7)
                        let apiResponse = response.generate(true, 'No  Details Found', 404, null)
                        reject(apiResponse)
                    } else {
                        /* prepare the message and the api response here */
                        logger.info('admin Found', 'adminController: findUser()', 10)

                        let apiResponse = response.generate(true, 'Admin Logged In', 404, null)
                        resolve(userDetails)
                    }
                });

            } else {
                let apiResponse = response.generate(true, '"email" parameter is missing', 400, null)
                reject(apiResponse)
            }
        })
    }

    let generateToken = (userDetails) => {
        console.log("generate token");
        return new Promise((resolve, reject) => {
            resettoken.generateToken(userDetails, (err, tokenDetails) => {
                if (err) {
                    console.log(err)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else {
                    tokenDetails.userId = userDetails.userId
                    tokenDetails.userDetails = userDetails
                    resolve(tokenDetails)
                }
            })
        })
    }
    let saveToken = (tokenDetails) => {
        console.log("save token");
        return new Promise((resolve, reject) => {
            RecoverModel.findOne({ userId: tokenDetails.userId }, (err, retrievedTokenDetails) => {
                if (err) {
                    console.log(err.message, 'userController: saveToken', 10)
                    let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(retrievedTokenDetails)) {
                    let newAuthToken = new RecoverModel({
                        userId: tokenDetails.userId,
                        email: tokenDetails.userDetails.email,
                        authToken: tokenDetails.token,
                        tokenSecret: tokenDetails.tokenSecret,
                        tokenGenerationTime: time.now()
                    })
                    newAuthToken.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                } else {
                    retrievedTokenDetails.authToken = tokenDetails.token
                    retrievedTokenDetails.tokenSecret = tokenDetails.tokenSecret
                    retrievedTokenDetails.tokenGenerationTime = time.now()
                    retrievedTokenDetails.save((err, newTokenDetails) => {
                        if (err) {
                            console.log(err)
                            logger.error(err.message, 'userController: saveToken', 10)
                            let apiResponse = response.generate(true, 'Failed To Generate Token', 500, null)
                            reject(apiResponse)
                        } else {
                            let responseBody = {
                                authToken: newTokenDetails.authToken,
                                userDetails: tokenDetails.userDetails
                            }
                            resolve(responseBody)
                        }
                    })
                }
            })
        })
    }

    generateEmail = (data) => {
        return new Promise((resolve, reject) => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'm2examalteration@gmail.com',
                    pass: 'noidea2021'
                }
            });
            const mailOptions = {
                from: 'm2examalteration@gmail.com', // sender address
                to: req.body.email, // list of receivers
                subject: `Exam alteration Password change request`, // Subject line
                html: `<img src="https://www.amrita.edu/sites/default/files/new-white-logo-with-school-name.jpg" style="width:300px"/><br><p style="font-size:14.5px;font-weight:600px">Hi ${data.userDetails.firstName} ,  </p> <p style="font-size:12px">Greetings from exam alteration admin ! </p> <p style="font-size:12px;margin:0px">This is in regards that you have requested for password change  </p><br>
             <p style="font-size:16px">Click <a style="font-size:16px" href="http://localhost:4200/passwordChange/${data.userDetails.userId}/${data.authToken}">Reset password Link</a></p>
            ` // plain text body
            };

            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    let apiResponse = response.generate(true, 'Message failed', 304, err)
                    console.log(err)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Message sent', 200, null)

                    resolve(apiResponse)
                }
            });

        })
    }

    findUser(req, res)
        .then(generateToken)
        .then(saveToken)
        .then(generateEmail)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Email Successful', 200, resolve)


            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);

            res.send(err)
        })
}

changepassword = (req, res) => {
    updateuser = () => {
        return new Promise((resolve, reject) => {
            req.body.password = passwordLib.hashpassword(req.body.password)
            let options = req.body;
            UserModel.update({ 'userId': req.body.userId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'User Controller:editUser', 10)
                    let apiResponse = response.generate(true, 'Failed To edit user details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No User Found', 'User Controller: editUser')
                    let apiResponse = response.generate(true, 'No User Found', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'User details edited', 200, result)
                    resolve(apiResponse)
                }
            }); // end user model update

        })
    }
    deletetoken = () => {
        return new Promise((resolve, reject) => {
            RecoverModel.findOneAndRemove({ userId: req.body.userId }, (err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'user Controller: logout', 10)
                    let apiResponse = response.generate(true, `error occurred: ${err.message}`, 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    let apiResponse = response.generate(true, 'Already Deleted ', 404, null)
                    reject(apiResponse)
                } else {
                    let apiResponse = response.generate(false, 'Deleted Successfully', 200, null)
                    resolve(apiResponse)
                }
            })
        })
    }

    updateuser(req, res)
        .then(deletetoken)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'changed Successful', 200, resolve)


            res.send(apiResponse)
        })
        .catch((err) => {
            console.log("errorhandler");
            console.log(err);

            res.send(err)
        })
}


module.exports = {

        signUpFunction: signUpFunction,
        getAllUser: getAllUser,
        editUser: editUser,
        deleteUser: deleteUser,
        getSingleUser: getSingleUser,
        loginFunction: loginFunction,
        geneateRecover: geneateRecover,
        changepassword: changepassword,
        logout: logout,
        adminloginFunction: adminloginFunction,
        OtpVerify: OtpVerify

    } // end exports