const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const middleware = require('./utils/middleware')
const notesRouter = require('./controllers/blogs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const mongoUrl = process.env.MONGODB_URI
mongoose.connect(mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())

//app.use(express.static('build'))
app.use(middleware.logger)

app.use('/api/blogs', notesRouter)

//app.use(middleware.error)

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})