import styled from 'styled-components';

export const LayoutStyle = styled.div`
  ${({ theme }) => theme.flex.flexCenter}
  flex-direction: column;
  max-width: 48rem;
  margin: auto;
`;
