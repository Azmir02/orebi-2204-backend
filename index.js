require('dotenv').config()

const express = require('express')
const app = express()
const connectDB = require('./config/dbConfig')
const routes = require('./routes')
var cors = require('cors')

// connect DB
connectDB()

// Init Middleware
app.use(cors())
app.use(express.json())
app.use(routes)





const Port = process.env.PORT || 8000

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})