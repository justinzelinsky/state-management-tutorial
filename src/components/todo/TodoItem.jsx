import './TodoItem.scss';

import classnames from 'classnames';
import { bool, func, number, shape, string } from 'prop-types';
import React from 'react';

const TodoItem = ({ item, onRemove, onToggle }) => {
  const { id, isDone, task } = item;
  const handleToggle = () => onToggle(id);
  const handleRemove = () => onRemove(id);
  const taskStyle = classnames('todo-task', { strikedOut: isDone });
  return (
    <li styleName="todo-item">
      <label styleName="todo-checkbox">
        <input checked={isDone} onChange={handleToggle} type="checkbox" />
        Finished
      </label>
      <span styleName={taskStyle}>{task}</span>
      <button onClick={handleRemove} styleName="todo-remove">
        Remove
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  item: shape({
    id: number.isRequired,
    isDone: bool.isRequired,
    task: string.isRequired
  }),
  onRemove: func.isRequired,
  onToggle: func.isRequired
};

export default TodoItem;
