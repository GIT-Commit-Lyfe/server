const { sequelizeUniqueErrorMessage } = require("../helpers/error")

module.exports = (err, req, res, next) => {


  console.log(JSON.stringify(err, null, 2))
  console.log(err.message)

  let errorCode, errorMessage;

  if(err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError'){

    errorCode = 401
    errorMessage = "Failed to authenticate"
    //console.log(err.message)

  }
  else if (err.name === 'SequelizeUniqueConstraintError') {
    errorMessage =  sequelizeUniqueErrorMessage(err)
    errorCode = 400
  }
  else if (err.name === 'SequelizeDatabaseError'){
    errorMessage = err.message
    errorCode = 400
  }
  else{
    // handle error that manually thrown
    errorCode = err.code || 500
    errorMessage = err.msg || "Internal Server Error"

    //print stack if error from node
    err.name && console.log(err.stack)
    
  }

  res.status(errorCode).json({
    code : errorCode,
    message : errorMessage
  })  
}