import { createContext, useState, useCallback } from 'react';
import axios from 'axios'

export const MonthlyContext = createContext()

export const MonthlyProvider = (props) => {
  const [monthlyLog, setMonthlyLog] = useState([])

  const handleMonthlyLog = useCallback( () => {
    axios
      .get('/api/monthly')
      .then((res) => {
        setMonthlyLog(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <MonthlyContext.Provider value={{
      monthlyLog,
      setMonthlyLog,
      handleMonthlyLog
    }}>
      {props.children}
    </MonthlyContext.Provider>
  )
}