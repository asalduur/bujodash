import {useContext, useState} from 'react'
import {UserContext} from '../context/UserContext'
// import Textfield from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import '../App.css'
 

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {handleLogin} = useContext(UserContext)

    return (
        <div className='login-container'>
            <input 
                required
                id='username-required'
                label='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                // variant='outlined' 
            />
            <input 
                required
                id=''
                label='Password' 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // variant='outlined' 
            />

            <Button 
                variant='outlined'
                onClick={() => handleLogin(username, password)}
            >
                Login
            </Button>
            <p>Need an account?<Link to='/Register'>Register Here!</Link></p>
        </div>
    )
}

export default Login