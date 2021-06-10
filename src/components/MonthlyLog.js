import { useContext, useEffect } from 'react'
import { MonthlyContext } from '../context/MonthlyContext'
import { UserContext } from '../context/UserContext'
import Header from './Header'

const MonthlyLog = () => {
  const {monthlyLog, handleMonthlyLog} = useContext(MonthlyContext)
  const {user} = useContext(UserContext)

  useEffect(() =>  {
    if (user) {
      handleMonthlyLog()
    }
  }, [user, handleMonthlyLog])

  return (
    <div className="log">
      <Header/>
      <h3>Monthly Logs</h3>
      <span className="month">June</span>
      {monthlyLog.map(log => {
        return (
          <div className="log-entry" key={log.daily_id}>
            
            <div className="entry">{log.entry}</div>
          </div>
        )
      })}
  {/* <h6>{new Date(log.log_date).getMonth()+1}</h6> */}
    </div>
  )
}
export default MonthlyLog