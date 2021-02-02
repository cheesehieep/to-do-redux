export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_TODOS = 'SET_TODOS';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const SEARCH = 'SEARCH';
export const SORT_TODOS_BY_ALPHA = 'SORT_TODOS_BY_ALPHA';
export const FILTER_TODOS_BY_STATUS = 'FILTER_TODOS_BY_STATUS';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: todo
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
});

export const changeStatus = (todo) => ({
  type: CHANGE_STATUS,
  payload: todo
});

export const search = (text) => ({
  type: SEARCH,
  payload: text
});

export const sortTodosByAlpha = (text) => ({
  type: SORT_TODOS_BY_ALPHA,
  payload: text
});

export const filterTodosByStatus = (text) => ({
  type: FILTER_TODOS_BY_STATUS,
  payload: text
});