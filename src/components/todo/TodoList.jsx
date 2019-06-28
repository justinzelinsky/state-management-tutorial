import './TodoList.scss';

import React, { useState } from 'react';

import TodoItem from 'todo/TodoItem';

const TodoList = () => {
  const [newTask, setNewTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleNewTaskChange = event => setNewTask(event.target.value);
  const handleAddNewTask = event => {
    event.preventDefault();
    const newTodoList = [
      ...todoList,
      {
        id: Date.now(),
        isDone: false,
        task: newTask
      }
    ];
    setTodoList(newTodoList);
    setNewTask('');
  };
  const handleRemoveTask = id => {
    const filteredTodoList = todoList.filter(task => task.id !== id);
    setTodoList(filteredTodoList);
  };
  const handleTaskToggle = id => {
    const todoTask = todoList.find(task => task.id === id);
    const newTodoTask = {
      ...todoTask,
      isDone: !todoTask.isDone
    };
    const updatedTodoList = todoList.map(task =>
      task.id === id ? newTodoTask : task
    );
    setTodoList(updatedTodoList);
  };

  const tasksRemaining = todoList.filter(task => !task.isDone).length;

  return (
    <div styleName="todo-container">
      <header>To-Do List</header>
      <form onSubmit={handleAddNewTask} styleName="todo-list-form">
        <input
          onChange={handleNewTaskChange}
          styleName="new-todo-input"
          type="text"
          value={newTask}
        />
        <button>Add List Item</button>
      </form>
      <hr />
      {todoList.length === 0 && <span>No items!</span>}
      {todoList.length > 0 && (
        <ul styleName="todo-list">
          <div>Task remaining: {tasksRemaining}</div>
          {todoList.map(todoItem => (
            <TodoItem
              key={todoItem.id}
              item={todoItem}
              onRemove={handleRemoveTask}
              onToggle={handleTaskToggle}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
