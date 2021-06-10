import {createContext, useState} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'


export const UserContext = createContext()

export const UserProvider = (props) => {
  const [user, setUser] = useState(null)
  const history = useHistory()
  
  const handleRegister = (email, username, password) => {
    axios
      .post('/auth/register', {email, username, password})
      .then((res) => {
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch((err) => console.log(err))
  }

  const handleLogin = (username, password) => {
    axios
      .post('/auth/login', {username, password})
      .then((res) => {
        setUser(res.data)
        history.push('/dashboard')
      })
      .catch((err) => console.log(err))
  }

  const handleLogout = () => {
    axios
      .get('auth/logout')
      setUser(null)
      history.push('/')
  }
  
  return (
    <UserContext.Provider value={{
      user,
      setUser,
      handleRegister,
      handleLogin,
      handleLogout
    }}>
      {props.children}
    </UserContext.Provider>
  )
  
}