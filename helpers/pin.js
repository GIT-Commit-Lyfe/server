 
function generatePIN(numString){

  if(!numString){
    return generatePIN(generateRandom())
  }
  else if ( numString.length < 6) {
    numString = numString + generateRandom()
    return generatePIN(numString)
  }
  else {
    return numString
  }
}

function generateRandom(){
  return Math.floor(Math.random() * Math.floor(10)) + ""
}

module.exports = {
  generatePIN
}
