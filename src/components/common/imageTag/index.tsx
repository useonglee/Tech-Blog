import React from 'react';
import { ImageTagStyle } from './imageTagStyle';

interface ImageTagPropsType {
  src: string;
  width: string;
  height: string;
  circle?: string;
  alt: string;
}

function ImageTag(props: ImageTagPropsType) {
  const { circle, ...rest } = props;

  return <ImageTagStyle priority {...rest} circle={circle} />;
}

export default ImageTag;
