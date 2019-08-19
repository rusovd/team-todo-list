import actionTypes from '../constants/todoList';

export const addTodo = () => ({
  type: actionTypes.ADD_TODO,
});

export const editTodo = (id, content) => ({
  type: actionTypes.EDIT_TODO,
  data: { id, content },
});

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  data: { id },
});

export const deleteTodo = (id) => ({
  type: actionTypes.DELETE_TODO,
  data: { id },
});
