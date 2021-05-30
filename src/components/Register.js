import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'
import Button from '@material-ui/core/Button'
import '../App.css'

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {handleRegister} = useContext(UserContext)

  return (
    <div className="register-container">
      <input 
        required
        id='username-required'
        label='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input 
        required
        id='password-required'
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        variant='outlined'
        onClick={() => handleRegister(username, password)}
      >
        Register
      </Button>
    </div>
  )
}

export default Register