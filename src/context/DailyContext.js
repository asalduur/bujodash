import { createContext, useState, useCallback } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export const DailyContext = createContext()

export const DailyProvider = (props) => {
  const [dailyLog, setDailyLog] = useState([])

  const history = useHistory()

  const handleDailyLog = useCallback( () => {
    axios
      .get('/daily')
      .then((res) => {
        // console.log(res.data)
        setDailyLog(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleCreateDaily = (entry) => {
    axios
      .post('/daily', {entry})
      .then((res) => {
        history.push('/dailylog')
        setDailyLog(res.data)
      })
      .catch((err) => console.log(err))
    }
    
    const handleEditDaily = (daily_id, entry, status) => {
      axios
      .put(`/daily/${daily_id}`, {entry, status})
      .then((res) => {
        setDailyLog(res.data)
      })
      .catch((err) => console.log(err))
    }
    
    const handleDeleteDaily = (daily_id) => {
      
      axios
      .delete(`/daily/${daily_id}`)
      .then((res) => {
        setDailyLog(res.data)
      })
      .catch((err) => console.log(err))
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