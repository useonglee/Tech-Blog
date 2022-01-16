import Image from 'next/image';
import { BannerStyle } from './bannerStyle';

interface BannerPropsType {
  src: string;
  alt: string;
}

function Banner({ src, alt }: BannerPropsType) {
  return (
    <BannerStyle>
      <Image src={src} width={1905} height={560} alt={alt} priority />
    </BannerStyle>
  );
}

export default Banner;
