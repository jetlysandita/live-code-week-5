const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const routes = require('./routes')
const errorHandler = require('./helpers/errorHandler')
if(process.env.NODE_ENV === 'development'){
  require('dotenv').config()
}
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',routes)
app.use(errorHandler)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))