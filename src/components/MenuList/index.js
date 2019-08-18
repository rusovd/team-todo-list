import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';

const ButtonContainer = styled.button`
  background: #f4efff;
  border: 0;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  padding-right: 5px;
`;

const Label = styled.div`
  color: black;
  font-size: 16px;
  margin-left: 10px;
`;

const MenuList = ({ onClick, name }) => (
  <ButtonContainer type="button" onClick={onClick}>
    <IconContainer>
      <MenuIcon height={12} width={12} fill="grey" />
    </IconContainer>
    <Label>{name}</Label>
  </ButtonContainer>
);

MenuList.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default MenuList;
