import React from 'react';
import { ImageTagStyle } from './imageTagStyle';

function ImageTag(props: any) {
  const { ...rest } = props;

  return <ImageTagStyle priority src="/images/profile.jpg" {...rest} />;
}

export default ImageTag;
