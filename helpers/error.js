function sequelizeUniqueErrorMessage(err){
  let messages = []
  for (const error of err.errors) {
    messages.push(error.messages+".")
  }

  return messages.join(" ")
}


module.exports = {
  sequelizeUniqueErrorMessage
}