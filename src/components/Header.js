import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { MdExitToApp, MdDehaze } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logs from './Logs'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const {handleLogout} = useContext(UserContext)

  const handleMenuToggle = () => setShowMenu(!showMenu)
  

  // console.log(showMenu)
  return (
    <header>
      <MdDehaze 
        className='menu'
        onClick={handleMenuToggle}
      />
      <span className='logo'><Link to='/dashboard'>bujodash</Link></span>
      <ul className={`showMenu ${showMenu ? '' : 'show'}`}>
        <Logs/>
      </ul>
      <MdExitToApp 
        className='logout' 
        onClick={handleLogout}
      />
    </header>
  )
}

export default Header