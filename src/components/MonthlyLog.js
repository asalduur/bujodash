import { useContext, useEffect } from 'react'
import { MonthlyContext } from '../context/MonthlyContext'
import { UserContext } from '../context/UserContext'
import moment from 'moment'
import Header from './Header'

const MonthlyLog = () => {
  const {monthlyLog, handleMonthlyLog} = useContext(MonthlyContext)
  const {user} = useContext(UserContext)

  useEffect(() => {
    if (user) {
      handleMonthlyLog()
    }
  }, [user, handleMonthlyLog])

  return (
    <div className="log">
      <Header/>
      <h3>Monthly Logs</h3>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Entry</th>
          </tr>
        </thead>
        <tbody>
          {monthlyLog.map((log) => {
            return (
              <tr key={log.daily_id}>
                <td>{moment(new Date(log.time_stamp)).format('MMMM YYYY')}</td>
                <td>{log.entry}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default MonthlyLog
