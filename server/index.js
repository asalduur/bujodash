// imports
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

// ctrlrs
const authCtrl = require('./controllers/authCtrl')
// const dailogCtrl = require('./controllers/dailogCtrl')
// const tasconCtrl = require('./controllers/taskIconCtrl')

// dotenv
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

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

// db connection
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then((db) => {
    app.set('db', db)
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
