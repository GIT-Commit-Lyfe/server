const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
  hashPassword(password){
    return bcrypt.hashSync(password, salt)
  },
  verifyPassword(password, hashedPassword){
    return bcrypt.compareSync(password, hashedPassword)
  }
}