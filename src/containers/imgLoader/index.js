import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import styled from 'styled-components';

import {
  height,
  width,
} from 'styled-system'

const Image = styled.img`
  border-radius: 50%;
  ${width}
  ${height}
`;

Image.propTypes = {
  ...width.propTypes,
  ...height.propTypes,
}

const Div = styled.div`
  line-height: 0;
  display: ${props => props.isLoading ? "none": "block"};
`;


const ImgLoader = ({ url, height, width }) => {
  const [isLoading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  }
  return (
    <>
      { isLoading && <Spinner height={height} width= {width}/> }
      <Div isLoading={isLoading} >
        <Image
          alt={url}
          src={url}
          height={height}
          width= {width}
          onLoad={imageLoaded} />
      </Div>
    </>
  )
};

ImgLoader.propTypes = {
  url: PropTypes.string,
  height: PropTypes.array,
  width: PropTypes.array
};

export default ImgLoader;