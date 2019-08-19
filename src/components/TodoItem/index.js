import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';

const Container = styled.li`
  padding: 5px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .delete {
    visibility: hidden;
  }

  &:hover {
    background: #f4efff;
    .delete {
      visibility: visible;
    }
  }
`;

const Content = styled.span`
  font-weight: normal;
  margin: 10px 0;
  padding-left: 8px;

  ${({ isCompleted }) =>
    isCompleted &&
    css`
      text-decoration: line-through;
      color: grey;
    `};
`;

const Input = styled.input`
  border: 0;
  padding: 5px;
  font-size: 14px;
`;

const ListItem = ({ content, isCompleted, onToggle, onDelete, onEdit }) => {
  const [editMode, setEditMode] = useState(false);

  const handleEditInput = e => {
    setEditMode(false);
    onEdit(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.key !== 'Enter') return;
    handleEditInput(e);
  };

  return (
    <Container>
      <div>
        <input type="checkbox" checked={isCompleted} onChange={onToggle} />
        {!editMode && (
          <Content onClick={() => setEditMode(true)} isCompleted={isCompleted}>
            {content}
          </Content>
        )}
        {editMode && (
          <Input
            type="text"
            defaultValue={content}
            onBlur={handleEditInput}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        )}
      </div>
      <div className="delete">
        <TrashIcon height={12} width={12} fill="#4609d9" onClick={onDelete} />
      </div>
    </Container>
  );
};

ListItem.propTypes = {
  content: PropTypes.string,
  isCompleted: PropTypes.bool,
  onChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ListItem;
