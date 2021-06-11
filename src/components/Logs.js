// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from 'react-icons/md'
const Logs = () => {

  return (
    <nav>
      <div className="form">
        <div className="daily-nav">
        <span><Link to='/dailylog'>Daily Log</Link> </span><Link to='/new'><MdAdd/></Link>
        <br/>
        <span><Link to='/monthlylog'>Monthly Log</Link> </span>
        </div>
      </div>
    </nav>
  )
}

export default Logs