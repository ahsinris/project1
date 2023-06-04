const express = require('express')
const app = express()
require('dotenv').config()

const baseRoute = require('./routes/base.route')
const tutorRoute = require('./routes/tutor.route')

app.use(baseRoute)
app.use(tutorRoute)

app.listen(process.env.PORT, () => {
    console.log("Application running at ", process.env.PORT)
})