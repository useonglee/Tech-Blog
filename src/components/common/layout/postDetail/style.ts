import styled from 'styled-components';

export const PostLayoutStyle = styled.main`
  ${({ theme }) => theme.flex.flexCenter};
  flex-direction: column;

  width: 768px;
  margin: 5.5rem auto 0;

  & > h1 {
    margin-bottom: 2rem;
    font-size: 3rem;
    line-height: 1.5;
    work-break: keep-all;
  }
`;
