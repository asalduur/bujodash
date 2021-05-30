import {createContext, useState} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'


export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  const history = useHistory()
  
  const handleLogin = (username, password) => {
    axios
      .post('/auth/login', {username, password})
      .then((res) => {
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch((err) => console.log(err))
  }

  const handleRegister = (username, password) => {
    axios
      .post('/auth/register', {username, password})
      .then((res) => {
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch((err) => console.log(err))
  }
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      handleLogin,
      handleRegister
    }}>
      {props.children}
    </UserContext.Provider>
  )
  
}