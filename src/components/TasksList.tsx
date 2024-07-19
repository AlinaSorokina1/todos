import React from 'react';

import '../styles/tasksList.css';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {

  
  return (
    <div className='task-container'>
    <ul>
    {tasks.map((task) => (
  <li
    key={task.id}
    className={task.completed ? 'completed-task' : ''}
  >
    <div className='checkbox-container'>
      <input
        className='checkbox-input'
        type='checkbox'
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      <span className='checkbox-label'  style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                }}>{task.title}</span>
      <button className='button-delete' onClick={() => onDelete(task.id)}>
        ✗
      </button>
    </div>
  </li>
))}
    </ul>
    </div>
  );
};

export default TaskList;
