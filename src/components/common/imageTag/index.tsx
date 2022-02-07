import React from 'react';
import { ImageTagStyle } from './imageTagStyle';

interface ImageTagPropsType {
  src: string;
  width: number;
  height: number;
  circle?: string;
  alt: string;
}

function ImageTag(props: ImageTagPropsType) {
  const { circle, ...rest } = props;

  return <ImageTagStyle priority {...rest} circle={circle} />;
}

export default ImageTag;
