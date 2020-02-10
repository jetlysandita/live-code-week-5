const jwt = require('jsonwebtoken')

function jwtSignIn(data){
  return jwt.sign(data, 'shhhhh')
}
function jwtVerify(data){
  return jwt.verify(data, 'shhhhh')
}

module.exports = {jwtSignIn,jwtVerify}