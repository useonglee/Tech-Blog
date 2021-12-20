import styled from 'styled-components';

export const HeaderStyle = styled.header`
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: space-between;
  flex-direction: row;
  padding: 2.5rem 0;
  width: 100%;
`;

export const HeaderName = styled.h1`
  ${({ theme }) => theme.headingSize.heading2XL}
`;
