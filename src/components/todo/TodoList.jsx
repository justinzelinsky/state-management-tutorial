import React from 'react';

import TodoItem from 'todo/TodoItem';

import './TodoList.scss';

class TodoList extends React.Component {
  state = {
    newTask: '',
    todoList: []
  }
  handleAddListItem = event => {
    event.preventDefault();
    const { newTask, todoList } = this.state;
    if (newTask) {
      const newList = [
        ...todoList,
        {
          id: Date.now(),
          isDone: false,
          task: newTask,
        }
      ];
      this.setState({ newTask: '', todoList: newList });
    }
  }
  handleNewTaskChange = event => {
    const newTask = event.target.value;
    this.setState({ newTask });
  }
  handleTaskToggle = id => updatedItem => {
    const { todoList } = this.state;
    const newList = todoList.map(item => item.id === id ? updatedItem : item);
    this.setState({todoList: newList});
  }
  handleRemoveTask = id => () => {
    const { todoList } = this.state;
    const newList = todoList.filter(item => item.id !== id);
    this.setState({ todoList: newList });
  }
  render() {
    const { newTask, todoList } = this.state;
    const tasksRemaining = todoList.filter(item => !item.isDone).length;
    return (
      <div styleName="todo-container"> 
        <header>To-Do List</header>
        <form
          onSubmit={this.handleAddListItem} 
          styleName="todo-list-form"
        >
          <input 
            onChange={this.handleNewTaskChange}
            styleName="new-todo-input" 
            type="text" 
            value={newTask}  
          />
          <button>Add List Item</button>
        </form>
        <hr />
        {todoList.length === 0 && <span>No items!</span>}
        {todoList.length > 0 && <ul styleName="todo-list">
          <div>Task remaining: {tasksRemaining}</div>
          {todoList.map(todoItem => 
            <TodoItem
              key={todoItem.id} 
              item={todoItem} 
              onRemove={this.handleRemoveTask(todoItem.id)}
              onToggle={this.handleTaskToggle(todoItem.id)}
            />
          )}
        </ul>}
      </div>
    );
  }
}

export default TodoList;
