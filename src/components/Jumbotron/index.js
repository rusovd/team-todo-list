import React from 'react';
import styled from 'styled-components';
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system';

import DateTime from '../DateTime';

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

const Text = styled.div`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  lineHeight: 1.5,
  m: 0,
}

const Jumbotron = () => {
  return (
    <Box px={[3, 4]} py={[5]} color="white" bg="blue">
      <Heading fontSize={[2, 3, 5]}>Team To-Do List</Heading>
      <Text fontSize={[0, 1, 2]} fontWeight="400"><DateTime/></Text>
    </Box>
  );
}

export default Jumbotron;
