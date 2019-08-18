import React from 'react';
import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'

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

const Header = () => {
  return (
    <Box px={[3, 4]} py={[5]} color="white" bg="blue">
      <Heading fontSize={[1, 2, 3]}>styled-system</Heading>
      <Text fontSize={[0, 1, 2]} fontWeight="400">Basic demo</Text>
    </Box>
  );
}

export default Header;
