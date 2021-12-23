import styled, { css } from 'styled-components';
import Image from 'next/image';

export const ImageTagStyle = styled(Image)<any>`
  ${({ type, circle }) => {
    return css`
      ${type && handleImageType(type)}

      ${circle &&
      css`
        border-radius: 50%;
      `}
    `;
  }}
`;

const handleImageType = (type: any) => {
  switch (type) {
    case 'profile':
      return `
        width: 108px;
        height: 108px;
      `;

    case 'thumbnail':
      return `
        width: 0px;
        height: 0px;
      `;

    default:
      return;
  }
};
