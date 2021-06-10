import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom'

 

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {handleLogin} = useContext(UserContext)

  return (
    <div className='form-container'>
      <div className="sphere"></div>
      <div className="sphere-1"></div>
      <div className="sphere-2"></div>
      <div className="form">
        <span className="form-name">Log in</span>
        <input 
          required
          id='username-required'
          label='Username'
          type='text'
          placeholder='Enter username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          required
          id='password-required'
          label='Password' 
          type='password'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button 
          className='auth'
          onClick={() => handleLogin(username, password)}>
              Log in
        </button>
        <p>Not a member?<Link to='/register'> <button className='btn-links'>Register</button></Link></p>
      </div>
    </div>
    )
}

export default Login