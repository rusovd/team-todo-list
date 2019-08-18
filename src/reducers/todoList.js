import actionTypes from '../constants/todoList';
import uuid from 'uuid/v4';

const initialState = {
  todoList: [],
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: uuid(), content: 'new todo' },
        ],
      };
    case actionTypes.EDIT_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id !== action.data.id) return todo;
          return {
            ...todo,
            content: action.data.content,
          };
        }),
      };
    case actionTypes.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          if (todo.id !== action.data.id) return todo;
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };
    case actionTypes.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.data.id),
      };
    default:
      return state;
  }
}
