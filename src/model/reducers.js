import { combineReducers } from 'redux';

import initialState from 'model/initialState';
import { ACTIONS } from 'utils/constants';

const reducers = {
  newTask(state = initialState.newTask, action) {
    switch (action.type) {
      case ACTIONS.TODO_ITEM.UPDATE_NEW:
        return action.payload.task;
      case ACTIONS.TODO_LIST.ADD:
        return initialState.newTask;
      default:
        return state;
    }
  },
  todoList(state = initialState.todoList, action) {
    switch(action.type) {
      case ACTIONS.TODO_LIST.ADD:
        return [
          ...state,
          {
            id: Date.now(),
            isDone: false,
            task: action.payload.task,
          }
        ];
      case ACTIONS.TODO_LIST.REMOVE:
        return state.filter(item => item.id !== action.payload.id);
      case ACTIONS.TODO_ITEM.TOGGLE:
        return state.map(item => 
          item.id === action.payload.id 
            ? {...item, isDone: !item.isDone}
            : item
        );
      default:
        return state;
    }
  }
};

export default combineReducers(reducers);
