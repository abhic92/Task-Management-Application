import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../src_components/TaskForm'; // Corrected path

test('renders TaskForm and submits a new task', () => {
  const handleSubmit = jest.fn();
  render(<TaskForm onSubmit={handleSubmit} />);

  const titleInput = screen.getByPlaceholderText(/task title/i);
  const descriptionInput = screen.getByPlaceholderText(/task description/i);
  const submitButton = screen.getByText(/save task/i);

  fireEvent.change(titleInput, { target: { value: 'New Task' } });
  fireEvent.change(descriptionInput, { target: { value: 'Task Description' } });
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({
    title: 'New Task',
    description: 'Task Description',
  });
});
