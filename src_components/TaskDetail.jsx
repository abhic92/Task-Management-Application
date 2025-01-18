import React from 'react';
import PropTypes from 'prop-types';

const TaskDetail = ({ task }) => {
  if (!task) {
    return <div>No task selected</div>;
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.object,
};

export default TaskDetail;
