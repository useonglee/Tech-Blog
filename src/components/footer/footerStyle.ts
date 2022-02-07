import styled from 'styled-components';

export const FooterStyle = styled.footer`
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  height: 5rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightGrey};
`;
