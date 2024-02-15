import React, { useState } from 'react'

//import icon
import { IoMdAddCircle } from "react-icons/io";

//import css
import "../components/TaskInput.css"

const TaskInput = ({ tasks, setTasks }) => {
    const [taskValue, setTaskValue] = useState("");

    const handleChange = (event) => {
        setTaskValue(event.target.value)
        console.log(taskValue)
    }

    const handleReset = () => {
        setTaskValue("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = new Date();
        const task = {
            id: date.getTime(),
            time: `${date.toLocaleTimeString()} / ${date.toLocaleDateString()}`,
            /* id: Math.floor(Math.random() * 100000), */
            name: taskValue,
            completed: false
        }
        setTasks([...tasks, task])
        handleReset()
        console.log(task)
    }
    return (
        <>
            <div className="addTask">
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} type="text" name='task' id='task' placeholder='Write your task...' value={taskValue} />
                    <button className='btnAdd' type='submit'>Add task <IoMdAddCircle className='add-logo' /></button>
                </form>
            </div>

        </>
    )
}

export default TaskInput
