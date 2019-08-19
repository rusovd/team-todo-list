import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import { fontSize, color } from 'styled-system';

const ButtonContainer = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  ${color}
`;

ButtonContainer.propTypes = {
  ...color.propTypes,
}

const Text = styled.div`
  ${fontSize}
`

Text.propTypes = {
  ...fontSize.propTypes,
}

const IconContainer = styled.div`
  padding-right: 5px;
`;

const GroupList = ({ onClick, name }) => (
  <ButtonContainer type="button" onClick={onClick} bg="lightviolet">
    <IconContainer>
      <MenuIcon height={12} width={12} fill="grey" />
    </IconContainer>
    <Text fontSize={[0, 1, 2]}>{name}</Text>
  </ButtonContainer>
);

GroupList.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default GroupList;
