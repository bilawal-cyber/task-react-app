import {FaTimes} from 'react-icons/fa'

function Task( { task, onDelete, onToggle}) {
    return (
        <div className={
            `task ${task.reminder ? 'reminder' : ''}`
        }
         onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} 
            <FaTimes 
            style={fatimes} 
            onClick={()=>onDelete(task.id)} 
            /> </h3>
            <p>{task.day}</p>
        </div>
    )
}

const fatimes={
    color : 'red',
    cursor : 'pointer'
}

export default Task
