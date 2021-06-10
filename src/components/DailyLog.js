import { useContext, useEffect } from 'react'
import { DailyContext } from '../context/DailyContext'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'
import Header from './Header'
import EditEntry from './EditEntry'

const DailyLog = () => {
  
  const {dailyLog, handleDailyLog} = useContext(DailyContext)
  const {user} = useContext(UserContext)

  useEffect(() =>  {
    if (user) {
      handleDailyLog()
    }
  }, [user, handleDailyLog])

  return (
    <div className='log'>
      <Header/>
      <h3>Daily Logs</h3>
      <span className="add">Add to log <Link to='/new'><FaPlus/></Link></span>
      {dailyLog.map(log => {
        return (
          <EditEntry log={log}/>
        )
      })}
    </div>
  )
}

//  ^ <> ^ todos:
  // bugs
//!! all logged in users get the same logs, problem with queries?

// additional tech
// sass (using variables, mixins, nesting) --> fix files
// nodemailer: add email to bujo_user table

  // post mvp
// ! error handling on login/register (alerts windows?)


export default DailyLog