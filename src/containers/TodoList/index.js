import React from 'react';
import styled from 'styled-components';
import AddButton from 'components/AddButton';
import ListItem from 'components/ListItem';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../actions/todoList';

const ListContainer = styled.ul`
  padding: 15px;
  margin: 0;
  background: white;
`;

const ButtonContainer = styled.div`
  padding: 15px;
`;

const TodoList = ({ todoList, addTodo, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <>
      <ListContainer>
        {todoList.map(todo => (
          <ListItem
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
      <ButtonContainer>
        <AddButton label="Add a to-do" onClick={addTodo} />
      </ButtonContainer>
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
