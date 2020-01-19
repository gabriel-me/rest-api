const express = require('express')
const cors = require('cors')

const database = require('./database/index')
const authRoute = require('./app/routes/authRouter')
const userRoute = require('./app/routes/userRouter')

const app = express()

database.connect()

app.use(cors())
app.use(express.json())

app.use(authRoute)
app.use(userRoute)

module.exports = app