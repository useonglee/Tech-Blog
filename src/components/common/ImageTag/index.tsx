import { ImageTagStyle } from './imageTagStyle';
import imageTagPropsType from './imageTagType';

function ImageTag(props: imageTagPropsType) {
  const { ...rest } = props;

  return <ImageTagStyle priority {...rest} />;
}

export default ImageTag;
