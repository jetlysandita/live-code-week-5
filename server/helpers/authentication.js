const {jwtVerify} = require('./jwt')
function auth (req,res,next){
  if(req.headers.token){
    let token = jwtVerify(req.headers.token)
    req.user = token
    next()
  }else{
    next({status:400,message:"invalid token"})
  }
}

module.exports = auth