/* response generation library for api */
let generate = (err, message, status, data) => {
    
    return {
      error: err,
      message: message,
      status: status,
      data: data
    }
  }
  
  module.exports = {
    generate: generate
  }
  