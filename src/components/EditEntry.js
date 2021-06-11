import { useContext, useState } from 'react'
import { 
  MdCheckBoxOutlineBlank, 
  MdCheckBox, 
  MdClear, 
  MdCreate 
} from 'react-icons/md'
import { DailyContext } from '../context/DailyContext'

const EditEntry = (props) => {
  const {log} = props
  const [editEntry, setEditEntry] = useState('')
  const [showEdit, setShowEdit] = useState(false)
  const [editStatus, setEditStatus] = useState(log.status)
  const {handleEditDaily, handleDeleteDaily} = useContext(DailyContext)

  const handleSave = () => {
    handleEditDaily(log.daily_id, editEntry || log.entry, editStatus)
    setShowEdit(false)
  }
  return (
    <div className="log-entry" key={log.daily_id}>
      <span className="date-created"> {new Date(log.time_stamp).toLocaleDateString()}</span>
      <div className="entry">
        {
        !editStatus 
        ? 
        <MdCheckBoxOutlineBlank className='icon-log' onClick={() => setEditStatus(!editStatus)}/>
        : 
        <MdCheckBox className='icon-log' onClick={() => setEditStatus(!editStatus)}/> 
        }
        {showEdit ? (
          <input value={editEntry} onChange={(e) => setEditEntry(e.target.value)}/>
        ) : (
          <span>{log.entry}</span>
        ) 
        }
      </div>
        <MdClear className='icon-log-btn'onClick={() => handleDeleteDaily(log.daily_id)}/>
        <MdCreate className='icon-log-btn'onClick={() => setShowEdit(!showEdit)}/>
        <button className='save' onClick={handleSave}>Save</button>
    </div>
  )
}

export default EditEntry