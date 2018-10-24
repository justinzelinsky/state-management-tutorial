import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './TodoItem.scss';

class TodoItem extends React.Component {
  onTaskDoneToggle = event => {
    const { onToggle, item } = this.props;
    onToggle({
      ...item,
      isDone: event.target.checked
    });
  }
  handleRemoveTask = () => {
    const { onRemove } = this.props;
    onRemove();
  }
  render() {
    const { item: { isDone, task } } = this.props;
    const taskStyle = classnames('todo-task', {strikedOut: isDone});
    return (
      <li styleName="todo-item">
        <label styleName="todo-checkbox">
          <input 
            checked={isDone} 
            onChange={this.onTaskDoneToggle}
            type="checkbox" 
          />
          Finished
        </label>
        <span styleName={taskStyle}>{task}</span>
        <button
          onClick={this.handleRemoveTask} 
          styleName="todo-remove"
        >
          Remove
        </button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isDone: PropTypes.bool.isRequired,
    task: PropTypes.string.isRequired
  }),
  onRemove: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TodoItem;
