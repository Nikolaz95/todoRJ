import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskInput from './components/TaskInput'
import TaskTodoList from './components/TaskTodoList'
import TaskFinish from './components/TaskFinish'



function App() {
  // Load tasks from localStorage on component mount

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [finishedTasks, setFinishedTasks] = useState(JSON.parse(localStorage.getItem('finishedTasks')) || []
  );


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('finishedTasks', JSON.stringify(finishedTasks));
  }, [tasks, finishedTasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);

    const storedFinishedTasks = JSON.parse(localStorage.getItem('finishedTasks')) || [];
    setFinishedTasks(storedFinishedTasks);
  }, []);

  const handleTaskDone = (taskId) => {
    console.log('Before:', tasks);
    console.log('Before Finished:', finishedTasks);
    const taskToFinish = tasks.find(task => task.id === taskId);
    setFinishedTasks(prevFinishedTasks => [...prevFinishedTasks, taskToFinish]);
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    console.log('After:', tasks);
    console.log('After Finished:', finishedTasks);
  };

  return (
    <div>
      <Header />
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskTodoList tasks={tasks} setTasks={setTasks} handleTaskDone={handleTaskDone} />
      <TaskFinish finishedTasks={finishedTasks} setFinishedTasks={setFinishedTasks} />
      <Footer />
    </div>
  )
}

export default App
