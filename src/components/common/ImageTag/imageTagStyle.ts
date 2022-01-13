import styled, { css } from 'styled-components';
import Image from 'next/image';
import imageTagPropsType from './imageTagType';

export const ImageTagStyle = styled(Image)<imageTagPropsType>`
  ${({ circle }) => {
    return css`
      ${circle &&
      css`
        border-radius: 50%;
      `}
    `;
  }}
`;
