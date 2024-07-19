import React, { useState } from 'react';

import '../styles/taskInput.css'

interface TaskInputProps {
  onAddTask: (task: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      alert("Please enter a task.");
      setIsInputValid(false); 
      return; 
    }
    onAddTask(inputValue);
    setInputValue('');
    setIsInputValid(true); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='taskInput'
        type="text"
        id="new-task-input"
        name="newTask"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsInputValid(e.target.value.trim() !== ''); 
        }}
        placeholder="What needs to be done?"
      />
      <button className='button-add' type="submit" disabled={!isInputValid}>Add</button>
    </form>
  );
};

export default TaskInput;
