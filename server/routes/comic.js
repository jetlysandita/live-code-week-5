const express = require('express')
const router = express.Router()

const {Comic} = require('../models')
router.get("/",(req,res,next) => {
  Comic
    .findAll()
    .then(result => {
      return res.status(200).json(result)
    })
    .catch(next)
})

router.get("/:id",(req,res,next) => {
  Comic
    .findByPk(req.params.id)
    .then(result => {
      return res.status(200).json(result)
    })
    .catch(next)
})

router.put("/:id",(req,res,next) => {
  Comic
    .findByPk(req.params.id)
    .then(result => {
      return result
                .update({
                  title: req.body.title,
                  author : req.body.author,
                  imageUrl : req.body.imageUrl
                })
    })
    .catch(next)
})

module.exports = router