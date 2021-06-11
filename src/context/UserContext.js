import {createContext, useState} from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { successMsg, errorMsg } from "../components/notification/ToastNotification";


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
        successMsg('Account created.')
      })
      .catch((err) => {
        console.log(err)
        errorMsg('Could not create an account.')
      })
  }

  const handleLogin = (username, password) => {
    axios
      .post('/auth/login', {username, password})
      .then((res) => {
        setUser(res.data)
        history.push('/dashboard')
        successMsg('Login was successful.')
      })
      .catch((err) => {
        console.log(err)
        errorMsg('Could not login')
      })
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