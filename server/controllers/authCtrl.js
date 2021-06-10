const bcrypt = require('bcryptjs')

// mailOptions object
const mailOptions = {
  from: 'test@gmail.com',
  to: '',
  subject: 'Task complete, you are registered!',
  text: 'You are all set, head on back over to the app to track all your daily tasks!'
}

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const transporter = req.app.get('transporter')
    const {email, username, password} = req.body 
    const [checkEmail] = await db.auth.check_email(email)
    if(checkEmail) {
      return res.status(409).send('Email is taken')
    }
    const [checkUsername] = await db.auth.check_username(username)
    if(checkUsername) {
      return res.status(409).send('Username is taken.')
    }
    const salt = bcrypt.genSaltSync()
    const hash = bcrypt.hashSync(password, salt)
    const [user] = await db.auth.reg_user(email, username, hash)
    // transporter sendMail method
    const newMailOptions = {...mailOptions, to: email}
    transporter.sendMail(newMailOptions, (err, data) => {
      if(err) {
        console.log('error ' + err)
      }
      else {
        console.log('email sent successfully')
        console.log(data)
      }
    })
    // delete user.password
    req.session.user = user
    return res.status(201).send(req.session.user)

  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {username, password} = req.body
    const [user] = await db.auth.check_username(username)
    if(!user) {
      return res.status(403).send('Username or password is incorrect.')
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password)
      if(!isAuthenticated){
        return res.status(403).send('Username or password is incorrect.')
      }
      req.session.user = user
      return res.status(201).send(req.session.user)
  },
  getUser: (req, res) => {
    if(req.session.user){
      res.status(200).send(req.session.user)
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }
}