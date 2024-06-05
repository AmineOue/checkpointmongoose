const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('Database Connected'))
    .catch((err)=> console.log(err))

app.use('api', require('./routes/personRoutes'))
const PORT = process.env.PORT

app.listen(PORT, ()=>console.log('System is listening on ', PORT))