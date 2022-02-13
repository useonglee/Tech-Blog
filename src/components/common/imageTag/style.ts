import styled from 'styled-components';
import Image from 'next/image';

export const ImageTagStyle = styled(Image)<{ radius: string }>`
  border-radius: ${({ radius }) => radius};
`;
