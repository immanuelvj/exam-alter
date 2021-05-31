const jwt = require('jsonwebtoken')
const shortid = require('shortid')
var randomstring = require("randomstring");

const secretKey = randomstring.generate(15);


let generateToken = (data, cb) => {

  try {
    let claims = {
      jwtid: shortid.generate(),
      iat: Date.now(),
      exp: Math.floor(Date.now() / 1000) + (5 * 60),
      sub: 'authToken',
      iss: 'examadmin',
      data: data
    }
    let tokenDetails = {
      token: jwt.sign(claims, secretKey),
      tokenSecret : secretKey
    }
    cb(null, tokenDetails)
  } catch (err) {
    console.log(err)
    cb(err, null)
  }
}// end generate token 

let verifyClaim = (token,secretKey,cb) => {
  // verify a token symmetric
  jwt.verify(token, secretKey, function (err, decoded) {
    if(err){
      console.log("error while verify token");
      console.log(err);
      cb(err,null)
    }
    else{
      console.log("user verified");
      console.log(decoded);
      cb(null,decoded);
    }  
 
 
  });


}// end verify claim 




module.exports = {
  generateToken: generateToken,
  verifyToken :verifyClaim
}
