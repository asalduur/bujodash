import { useContext, useState } from 'react'
import { DailyContext } from '../context/DailyContext'
import Header from './Header'

const NewEntry = () => {
  const [entry, setEntry] = useState('')
  const { handleCreateDaily } = useContext(DailyContext)

  return (
    <div>
      <Header/>
      <div className="form-container">
        <div className="form">
          <span className="form-name">New Task</span>
          <input 
            type='text'
            onChange={(e) => setEntry(e.target.value)}/>
          <button 
            className='btn-create' 
            onClick={() => handleCreateDaily(entry)}>
            Add to Log
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewEntry