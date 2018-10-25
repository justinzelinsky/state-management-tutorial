import { createSelector } from 'reselect';

const getTodos = state => state.todoList;

export const getRemainingTaskCount = createSelector(
  [getTodos],
  (todoList) => todoList.filter(item => !item.isDone).length
);