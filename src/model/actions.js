import { ACTIONS } from 'utils/constants';

const actions = {
  addTodoItem(task) {
    return {
      type: ACTIONS.TODO_LIST.ADD,
      payload: {task}
    };
  },
  removeTodoItem(id) {
    return {
      type: ACTIONS.TODO_LIST.REMOVE,
      payload: {id}
    };
  },
  toggleTodoItem(id) {
    return {
      type: ACTIONS.TODO_ITEM.TOGGLE,
      payload: {id}
    };
  },
  updateNewTodoItem(task) {
    return {
      type: ACTIONS.TODO_ITEM.UPDATE_NEW,
      payload: {task}
    };
  }
};

export default actions;