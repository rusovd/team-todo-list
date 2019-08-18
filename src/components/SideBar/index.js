import React from 'react';
import Faker from 'faker'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Profile from '../Profile';
import MenuList from '../MenuList';

const Container = styled.div`
  min-width: 160px;
  width: 30%;
  box-shadow: 4px 1px 5px 0px rgba(0,0,0,0.16);
  height: 100vh;
  padding: 0 10px;
  background: white;
  z-index: 100;
`;

const SideBar = () => (
  <Container>
    <Profile username={Faker.name.findName()} avatarUrl="https://loremflickr.com/240/240/dog" />
    <MenuList name="Team To-do List" />
  </Container>
);

SideBar.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default SideBar;