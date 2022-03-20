import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders to do text', () => {
  render(<App />);
  const linkElement = screen.getByText(/to do List/i);
  expect(linkElement).toBeInTheDocument();
});

test('should render text delete when pressed', () => {
  render(<App />);
  const addButton = screen.getByText("Add")
  fireEvent.click(addButton)
  const deleteButton = screen.getByText("Delete")
  expect(deleteButton).toBeInTheDocument();
})

test('should render text delete multiple times when pressed', () => {
  render(<App />);
  const addButton = screen.getByText("Add")
  fireEvent.click(addButton)
  fireEvent.click(addButton)
  fireEvent.click(addButton)
  const deleteButton = screen.getAllByText("Delete")
  expect(deleteButton.length).toBe(3);
})

// test('should delete one on press', () => {
//   render(<App />);
//   const addButton = screen.getByText("Add")
//   fireEvent.click(addButton)
//   fireEvent.click(addButton)
//   fireEvent.click(addButton)
//   const deleteButton = screen.getAllByText("Delete")
//   fireEvent.click(deleteButton)
//   expect(deleteButton.length).tobe(2)
// })