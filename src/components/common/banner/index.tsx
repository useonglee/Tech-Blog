import React from 'react';
import Image from 'next/image';

interface BannerPropsType {
  src: string;
  alt: string;
}

function Banner({ src, alt }: BannerPropsType) {
  return (
    <section>
      <Image src={src} width={1905} height={560} alt={alt} priority />
    </section>
  );
}

export default Banner;
