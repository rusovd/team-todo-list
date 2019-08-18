import React from "react";
import styled from "styled-components";

import {
  height,
  width,
} from 'styled-system'

const Spinner = ({ height, width }) => (
  <Wrapper height={height} width={width}>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  </Wrapper>
);

const StyledSpinner = styled.svg`
  animation: rotate 1s linear infinite;
  & .path {
    stroke: #5652bf;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Wrapper = styled.div`
  ${width}
  ${height}
`;

Wrapper.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
}

export default Spinner;