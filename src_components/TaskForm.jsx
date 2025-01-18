import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ onSubmit, existingTask }) => {
  const [title, setTitle] = useState(existingTask ? existingTask.title : '');
  const [description, setDescription] = useState(existingTask ? existingTask.description : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Task Title" 
        required 
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Task Description" 
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  existingTask: PropTypes.object,
};

export default TaskForm;
