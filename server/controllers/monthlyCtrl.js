module.exports = {
  getMonthlyLog: (req, res) => {
    const db = req.app.get('db')
    const {user} = req.session 
    if (!user){
      return res.status(511).send('Please be signed in to use this feature.')
    }
    db.month.get_monthly_logs(user.user_id)
    .then((logEntries) => {
      res.status(200).send(logEntries)
    })
    .catch((err) => console.log(err))
  }
}