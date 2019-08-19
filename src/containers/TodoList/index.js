import React from 'react';
import styled from 'styled-components';
import TodoItem from '../../components/TodoItem';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../actions/todoList';

const ListContainer = styled.ul`
  padding: 15px;
  margin: 0;
  background: white;
  width: 100%;
  overflow-y: auto;
  height: 70vh;
`;

const TodoList = ({ todoList, addTodo, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <>
      <ListContainer>
        {todoList.map(todo => (
          <TodoItem
            key={todo.id}
            content={todo.content}
            isCompleted={!!todo.isCompleted}
            onDelete={() => deleteTodo(todo.id)}
            onToggle={() => toggleTodo(todo.id)}
            onEdit={value => editTodo(todo.id, value)}
          />
        ))}
        {todoList.length === 0 &&
          'Click on the button below to add a new to-do'}
      </ListContainer>
    </>
  );
};

const actions = { addTodo, toggleTodo, deleteTodo, editTodo };

function mapStateToProps(state) {
  const { todoList } = state.todos;
  return {
    todoList,
  };
}

export default connect(
  mapStateToProps,
  actions
)(TodoList);
