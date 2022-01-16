import { ImageTagStyle } from './imageTagStyle';

interface imageTagPropsType {
  src: string;
  width: string;
  height: string;
  circle?: string;
  alt: string;
}

function ImageTag(props: imageTagPropsType) {
  const { circle, ...rest } = props;

  return <ImageTagStyle priority {...rest} circle={circle} />;
}

export default ImageTag;
