// imports
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const nodemailer = require('nodemailer')
const session = require('express-session')
const path = require('path')


// ctrlrs
const authCtrl = require('./controllers/authCtrl')
const dailogCtrl = require('./controllers/dailogCtrl')
const monthlyCtrl = require('./controllers/monthlyCtrl')

// dotenv
const { 
  SERVER_PORT, 
  CONNECTION_STRING, 
  SESSION_SECRET, 
  EMAIL, 
  WORD, 
  OAUTH_CLIENTID, 
  OAUTH_CLIENT_SECRET, 
  OAUTH_REFRESH_TOKEN 
} = process.env

// app instance
const app = express()

// middleware
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
      maxAge: 1000 * 60 * 60 * 24
  }
}))

// set up transporter obj
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: EMAIL,
    pass: WORD,
    clientId: OAUTH_CLIENTID,
    clientSecret: OAUTH_CLIENT_SECRET,
    refreshToken: OAUTH_REFRESH_TOKEN
  }
})
// verify transporter, send back success is true
transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== transport is verified: ${success} ===`)
})

// db connection
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})
.then((db) => {
  app.set('db', db)
  app.set('transporter', transporter)
  app.listen(SERVER_PORT, ()=> {
    console.log(`server is listening on port: ${SERVER_PORT}`)
  })
})
.catch((err) => console.log(err))



// auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user', authCtrl.getUser)
app.get('/auth/logout', authCtrl.logout)

// daily log endpoints
app.get('/daily/', dailogCtrl.getDailyLog)
app.post('/daily', dailogCtrl.addDailyLog)
app.put('/daily/:daily_id', dailogCtrl.updateDailyLog)
app.delete('/daily/:daily_id', dailogCtrl.delDailyLog)

// monthly log endpoints
app.get('/monthly', monthlyCtrl.getMonthlyLog )

app.use(express.static(__dirname + '/../build'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})