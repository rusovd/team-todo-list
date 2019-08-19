import React, {useState} from 'react';
import PropTypes from 'prop-types';
import posed from "react-pose";
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg';


const PosedContainer = posed.button({
  idle: { scale: 1 },
  hovered: { scale: 1.2 }
});

const Container = styled(PosedContainer)`
  background: transparent;
  border: 0;
  outline: none;
  margin: 0;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const AddButton = ({ onClick, label }) => {
  const [isHovered, setHover] = useState(false);
  return (
  <Container type="button" 
    onClick={onClick} pose={isHovered ? "hovered" : "idle"}
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

export default AddButton;
