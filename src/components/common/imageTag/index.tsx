import React from 'react';
import { ImageTagStyle } from './style';

interface ImageTagPropsType {
  src: string;
  width: number;
  height: number;
  radius?: string;
  alt: string;
}

function ImageTag(props: ImageTagPropsType) {
  const { radius, ...rest } = props;

  return <ImageTagStyle priority {...rest} radius={radius} />;
}

export default ImageTag;
