module.exports = {
  // get user daily log
  getDailyLog: async (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    if(!user){
      return res.status(511).send('Please be signed in to use this feature.')
    }
    db.dailog.get_daily_logs(user.user_id, user.daily_id)
      .then((logEntries) => {
        return res.status(200).send(logEntries)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  addDailyLog: async (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session 
    const time_stamp = new Date()
    const {entry} = req.body 
    if(!user){
      return res.status(511).send('Please be signed in to use this feature.')
    }
    db.dailog.create_daily_log(user.user_id, time_stamp, entry)
      .then(([daily_log]) => {
        db.month.add_monthly_log(daily_log.daily_id, user.user_id)
          .then((logEntries) => res.status(200).send(logEntries))
          .catch((err) => console.log(err))
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  updateDailyLog: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    const {daily_id} = req.params
    const {entry, status} = req.body
    console.log(req.body) 
    console.log(daily_id) 
    if(!user){
      return res.status(511).send('Please be signed in to use this feature.')
    }
    db.dailog.update_daily_log(daily_id, entry, status, user.user_id)
      .then((logEntries) => {
        res.status(200).send(logEntries)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  },
  delDailyLog: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session
    const {daily_id} = req.params 
    if(!user){
      return res.status(511).send('Please be signed in to use this feature.')
    }
    db.dailog.delete_daily_log(user.user_id, daily_id)
      .then((logEntries) => {
        res.status(200).send(logEntries)
      })
      .catch((err) => {
        console.log(err)
        res.status(500).send(err)
      })
  }
}
