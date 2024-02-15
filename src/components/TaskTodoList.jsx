import React, { useState } from 'react'

//import icon
import { FaPencil } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { IoMdDoneAll } from "react-icons/io";
import { RiDeleteBinFill } from "react-icons/ri";

//import css
import "../components/TaskTodoList.css"

const TaskTodoList = ({ tasks, setTasks, handleTaskDone }) => {
    const [editableTaskId, setEditableTaskId] = useState(null);
    const [updatedTaskValue, setUpdatedTaskValue] = useState("");

    const handleToggleEdit = (id) => {
        // Toggle the editable state for the clicked task
        setEditableTaskId((prevId) => (prevId === id ? null : id));

        // Set the updated task value to the current task's name
        const taskToUpdate = tasks.find(task => task.id === id);
        setUpdatedTaskValue(taskToUpdate.name);
    }

    const handleSaveUpdate = (id) => {
        // Update the task with the new value
        setTasks(tasks.map(task => (task.id === id ? { ...task, name: updatedTaskValue } : task)));

        // Reset the editable state
        setEditableTaskId(null);
    }


    /* delete */
    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
        console.log(id);
    }

    /* delete all task list */
    const handleClearAll = () => {
        setTasks([])
    }

    const handleDone = (id) => {
        // Call the handleTaskDone function passed as a prop
        handleTaskDone(id);
    }
    return (
        <div className="taskTodo">
            <div className="taskTodoHead">

                <span>
                    <span className='title-todolist'>Todo List</span>
                    <span className='count-todo'>{tasks.length}</span>
                </span>

                <button onClick={handleClearAll} className='clearAll'>
                    Clear All list <RiDeleteBinFill className='clearAll-logo' /></button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className="content-todoList">
                            {editableTaskId === task.id ? (
                                <input
                                    type="text"
                                    value={updatedTaskValue}
                                    className='input-update'
                                    onChange={(e) => setUpdatedTaskValue(e.target.value)}
                                />
                            ) : (
                                <p>{task.name}</p>
                            )}
                            <span className="time-date">{task.time}</span>
                        </div>

                        <div className="butons">
                            {editableTaskId === task.id ? (
                                <button className="btnsave" onClick={() => handleSaveUpdate(task.id)}>
                                    Save <CiSaveDown2 className='save-logo' />
                                </button>
                            ) : (
                                <button className="btnupd" onClick={() => handleToggleEdit(task.id)}>
                                    Update <FaPencil className='upd-logo' />
                                </button>
                            )}
                            <button onClick={() => handleDone(task.id)} className="btndone">
                                Done <IoMdDoneAll className='done-logo' /> </button>
                            <button onClick={() => handleDelete(task.id)} className="btndelete">
                                Delete<RiDeleteBinFill className='delete-logo' /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskTodoList
