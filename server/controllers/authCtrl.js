const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body 
        const [result] = await db.auth.check_username(username)
        if(result) {
            return res.status(409).send('Username is taken.')
        }

        const salt = bcrypt.genSaltSync()
        const hash = bcrypt.hashSync(password, salt)
        const [user] = await db.reg_user(username, hash)
        delete user.password
        req.session.user = user
        return res.status(201).send(req.session.user)

    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [user] = await db.auth.check_username(username)
        if(!user) {
            return res.status(403).send('Account does not exist.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.password)
        if(!isAuthenticated){
            return res
        }
    },
    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        }
    },
    logout: (req, res) => {},
}