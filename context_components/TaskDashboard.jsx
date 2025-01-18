import React, { useState, useEffect } from 'react';
import TaskList from '../src_components/TaskList';
import TaskForm from '../src_components/TaskForm';
import Layout from './Layout';

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState('All'); // New state for filtering
  const [sortOrder, setSortOrder] = useState('creationDate'); // New state for sorting

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task, completed: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Filtering and sorting logic
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Incomplete') return !task.completed;
    return true; // All
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'creationDate') {
      return a.id - b.id; // Sort by creation date (id)
    }
    // Add more sorting logic if needed
    return 0;
  });

  return (
    <Layout>
      <h2>Task Dashboard</h2>
      <TaskForm onSubmit={addTask} existingTask={currentTask} />
      <div>
        <label>
          Filter:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Incomplete">Incomplete</option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="creationDate">Creation Date</option>
            {/* Add more sorting options if needed */}
          </select>
        </label>
      </div>
      <TaskList tasks={sortedTasks} onDelete={deleteTask} onToggle={toggleTaskCompletion} />
    </Layout>
  );
};

export default TaskDashboard;
