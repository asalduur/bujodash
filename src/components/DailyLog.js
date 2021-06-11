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
      <button className="add"><Link to='/new'><FaPlus/></Link></button>
      {dailyLog.map(log => {
        return (
          <EditEntry log={log}/>
        )
      })}
    </div>
  )
}

export default DailyLog