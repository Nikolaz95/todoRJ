import React, { useEffect } from 'react'


//import icon
import { RiDeleteBinFill } from "react-icons/ri";
//import css
import "../components/TaskFinish.css"

const TaskFinish = ({ finishedTasks, setFinishedTasks }) => {
    const handleClearAllFinished = () => {
        setFinishedTasks([]);
    };

    /* delete */
    const handleDeleteFinish = (id) => {
        setFinishedTasks(finishedTasks.filter(task => task.id !== id));
    }

    useEffect(() => {
        // Update local storage when finishedTasks change
        localStorage.setItem('finishedTasks', JSON.stringify(finishedTasks));
    }, [finishedTasks]);

    return (
        <div className="taskFinish">
            <div className="taskFinishHead">
                <span>
                    <span className='title-finishlist'>Finish List</span>
                    <span className='count-finish'>{finishedTasks ? finishedTasks.length : 0}</span>
                </span>
                <button onClick={handleClearAllFinished} className='clearAll'>Clear All list <RiDeleteBinFill className='clearAll-logo' /></button>
            </div>

            <ul>
                {finishedTasks.map(finishedTask => (
                    <li key={finishedTask.id} className='list-finish'>
                        <div className='content-finishList'>
                            <p className="finish-name">{finishedTask.name}</p>
                            <p className="finish-time">{finishedTask.time}</p>
                        </div>
                        <button onClick={() => handleDeleteFinish(finishedTask.id)} className="btndelete">
                            Delete<RiDeleteBinFill className='delete-logo' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskFinish
