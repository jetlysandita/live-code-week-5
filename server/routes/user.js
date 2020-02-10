const express = require('express')
const router = express.Router()

const {User} = require('../models')
const {jwtSignIn} = require('../helpers/jwt')
router.post("/login",(req,res,next) => {
  User
    .findOne({
      where:{
        email:req.body.email,
        password:req.body.password
      }
    })
    .then(result => {
      if(result){
        const data = {
          id : result.id,
          email : result.email
        }
        return res.status(200).json(jwtSignIn(data))
      }else{
        next({status:400,message:"email/password wrong"})
      }
    })
    .catch(next)
})


router.post("/register",(req,res,next) => {
  User
    .create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
      }
    )
    .then(result => {
      return res.status(200).json(result)
    })
    .catch(next)
})


module.exports = router