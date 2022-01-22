import styled from 'styled-components';

export const FooterStyle = styled.footer`
  ${({ theme }) => theme.flex.flexCenter};
  width: 100%;
  min-height: 80px;
  border-top: 1px solid ${({ theme }) => theme.color.lightGrey};
`;
