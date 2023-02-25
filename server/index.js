const express= require('express')
const cors = require('cors')
const connect = require("./connect/connect.js")
const loginRoute = require('./routes/login.js')

const app = express()
app.use(cors())

app.use('/v1',loginRoute)


app.listen(5000,()=>console.log("App running on port 5000"))