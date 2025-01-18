import React from 'react';
import PropTypes from 'prop-types';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TaskItem;
