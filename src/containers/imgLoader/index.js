import React, { useState } from 'react';
import Spinner from './Spinner';
import styled from 'styled-components';


const Image = styled.img`
  border-radius: 50%;
`;

const ImgLoader = ({ url, height, width }) => {
  const [isLoading, setLoading] = useState(true);

  const imageLoaded = () => {
    setLoading(false);
  }
  return (
    <>
      { isLoading && <Spinner/> }
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

export default ImgLoader;