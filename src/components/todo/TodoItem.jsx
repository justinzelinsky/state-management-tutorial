import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import mapDispatchToProps from 'model/mapDispatchToProps';

import './TodoItem.scss';

const TodoItem = ({ actions, item: { id, isDone, task } }) => {
  const taskStyle = classnames('todo-task', {strikedOut: isDone});
  const handleRemoveItem = () => actions.removeTodoItem(id);
  const handleToggleItem = () => actions.toggleTodoItem(id);
  return (
    <li styleName="todo-item">
      <label styleName="todo-checkbox">
        <input 
          checked={isDone} 
          onChange={handleToggleItem}
          type="checkbox" 
        />
        Finished
      </label>
      <span styleName={taskStyle}>{task}</span>
      <button 
        onClick={handleRemoveItem} 
        styleName="todo-remove"
      >
        Remove
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  actions: PropTypes.object.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired
  })
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);

