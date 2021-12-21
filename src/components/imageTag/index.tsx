import React from 'react';
import Image from 'next/image';

function ImageTag(props: any) {
  const { ...rest } = props;

  return <Image priority src="/images/profile.jpg" {...rest} />;
}

export default ImageTag;
