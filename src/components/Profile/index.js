import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImgLoader from '../../containers/imgLoader'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
`;

const Avatar = styled.img`
  border-radius: 50%;
`;

const Username = styled.div`
  font-size: 18px;
  margin-left: 10px;
`;

const Profile = ({ username, avatarUrl }) => (
  <Container>
    <ImgLoader height={50} width={50} url={avatarUrl}/>
    <Username>{username}</Username>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default Profile;
