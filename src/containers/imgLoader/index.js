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

const ImgLoader = ({ url, height, width }) => {
  const [isLoading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  }
  return (
    <>
      { isLoading && <Spinner height={height} width= {width}/> }
      <div style={{ display: isLoading ? "none" : "block" }}>
        <Image
          alt={url}
          src={url}
          height={height}
          width= {width}
          onLoad={imageLoaded} />
      </div>
    </>
  )
};

ImgLoader.propTypes = {
  url: PropTypes.string,
  height: PropTypes.array,
  width: PropTypes.array
};

export default ImgLoader;