const express = require('express')
const router = express.Router()

const user = require('./user')
const comic = require('./comic')
const auth = require('../helpers/authentication')

router.use('/',user)
router.use(auth)
router.use('/comics',comic)

module.exports = router