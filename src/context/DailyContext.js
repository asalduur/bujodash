import { createContext, useState, useCallback } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { successMsg, errorMsg } from '../components/notification/ToastNotification'

export const DailyContext = createContext()

export const DailyProvider = (props) => {
  const [dailyLog, setDailyLog] = useState([])

  const history = useHistory()

  const handleDailyLog = useCallback( () => {
    axios
      .get('/api/daily')
      .then((res) => {
        setDailyLog(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleCreateDaily = (entry) => {
    axios
      .post('/api/daily', {entry})
      .then((res) => {
        successMsg('You have logged a new task.')
        history.push('/dailylog')
        setDailyLog(res.data)
      })
      .catch((err) => {
        console.log(err)
        errorMsg('Failed to add task to log.')
      })
    }
    
    const handleEditDaily = (daily_id, entry, status) => {
      axios
      .put(`/api/daily/${daily_id}`, {entry, status})
      .then((res) => {
        successMsg('Changes to task saved.')
        setDailyLog(res.data)
      })
      .catch((err) => {
        console.log(err)
        errorMsg('Failed to update task.')
      })
    }
    
    const handleDeleteDaily = (daily_id) => {
      axios
      .delete(`/api/daily/${daily_id}`)
      .then((res) => {
        setDailyLog(res.data)
        successMsg('Task has been deleted.')
      })
      .catch((err) => {
        console.log(err)
        errorMsg('Task could not be deleted.')
      })
  }

  return (
    <DailyContext.Provider value={{
      dailyLog,
      setDailyLog,
      handleDailyLog,
      handleEditDaily,
      handleCreateDaily,
      handleDeleteDaily
    }}>
      {props.children}
    </DailyContext.Provider>
  )
}