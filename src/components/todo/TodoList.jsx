import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';
import { getRemainingTaskCount } from 'model/selectors';
import TodoItem from 'todo/TodoItem';

import './TodoList.scss';

const TodoList = ({ actions, newTask, tasksRemaining, todoList }) => {
  const handleAddListItem = event => {
    event.preventDefault();
    if (newTask) {
      actions.addTodoItem(newTask);
    }
  };
  const handleNewTaskOnChange = event => actions.updateNewTodoItem(event.target.value);
  return (
    <div styleName="todo-container"> 
      <header>To-Do List</header>
      <form 
        onSubmit={handleAddListItem} 
        styleName="todo-list-form"
      >
        <input 
          onChange={handleNewTaskOnChange}
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
        {todoList.map(todoItem => <TodoItem item={todoItem} key={todoItem.id}/>)}
      </ul>}
    </div>
  );
};

TodoList.propTypes = {
  actions: PropTypes.object.isRequired,
  newTask: PropTypes.string.isRequired,
  tasksRemaining: PropTypes.number.isRequired,
  todoList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  newTask: state.newTask,
  tasksRemaining: getRemainingTaskCount(state),
  todoList: state.todoList
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);