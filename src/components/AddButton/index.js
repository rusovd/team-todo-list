import React, {useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import posed from "react-pose";
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../../actions/todoList';


const PosedContainer = posed.button({
  idle: { scale: 1 },
  hovered: { scale: 1.1}
});

const Container = styled(PosedContainer)`
  background: transparent;
  border: 0;
  outline: none;
  margin: 0;
  padding-left: 60px;
  display: flex;
  align-items: center;
  
  cursor: pointer;
`;

const RoundButton = styled.div`
  background: ${props => props.theme.colors.blue}
  border-radius: 50%;
  height: 22px;
  width: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.div`
  color: #4609d9;
  font-size: 16px;
  margin-left: 10px;
`;

const AddButton = ({ label, addTodo }) => {
  const [isHovered, setHover] = useState(false);
  return (
  <Container type="button" 
      onClick={addTodo}  pose={isHovered ? "hovered" : "idle"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
    <RoundButton>
      <PlusIcon height={12} width={12} fill="white" />
    </RoundButton>
    <Label>{label}</Label>
  </Container>
  )
};

AddButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
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
)(AddButton);