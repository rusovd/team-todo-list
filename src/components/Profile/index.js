import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImgLoader from '../../containers/imgLoader'
import {
  fontSize,
  fontWeight,
} from 'styled-system'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
`;

const Username = styled.div`
  font-size: 18px;
  margin-left: 10px;
  ${fontSize}
  ${fontWeight}
`;

Username.propTypes = {
  ...fontSize.propTypes,
  ...fontWeight.propTypes
}

const Profile = ({ username, avatarUrl, theme }) => (
  <Container>
    <ImgLoader url={avatarUrl} width={[30, 45, 60]} height={[30, 45, 60]} />
    <Username fontWeight={[700,400]} fontSize={[0,1,2]}>{username}</Username>
  </Container>
);

Profile.propTypes = {
  username: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default Profile;
