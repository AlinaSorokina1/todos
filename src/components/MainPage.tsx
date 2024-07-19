import { useMemo, useState, useEffect } from "react";
import Filters from "./Filtres";
import TaskInput from "./TaskInput";
import TaskList from "./TasksList";

import '../styles/mainPage.css'

function MainPage() {
  const [tasks, setTasks] = useState<Task[]>(loadTasksFromLocalStorage()); 
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

function saveTasksToLocalStorage(tasks) {
  const serializedTasks = JSON.stringify(tasks);
  localStorage.setItem('tasks', serializedTasks);
}

function loadTasksFromLocalStorage() {
  const serializedTasks = localStorage.getItem('tasks');
  if (serializedTasks === null) {
    return [];
  }
  return JSON.parse(serializedTasks);
}


  useEffect(() => {
    saveTasksToLocalStorage(tasks); 
  }, [tasks]);

  const addTask = (title: string) => {
    const newId = tasks.length + 1;
    setTasks([...tasks, { id: newId, title, completed: false }]);
  };

  const toggleCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter(task =>
      filter === 'all' ? true :
      filter === 'active' ? !task.completed :
      task.completed
    );
  }, [tasks, filter]);

  return (
    <>
    <div className="mainPage">
      <h1>ToDos</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={filteredTasks} onComplete={toggleCompleted} onDelete={deleteTask}/>
        <Filters filter={filter} setFilter={setFilter} />
        </div>
    </>
  );
}

export default MainPage;
