import { render, screen, fireEvent } from "@testing-library/react";
import TaskForm from "../components/TaskForm";

test("adds a new task", () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);

  const input = screen.getByPlaceholderText("Enter task title");
  fireEvent.change(input, { target: { value: "New Task" } });

  const button = screen.getByText("Add Task");
  fireEvent.click(button);

  expect(addTask).toHaveBeenCalledWith(expect.objectContaining({ title: "New Task" }));
});
