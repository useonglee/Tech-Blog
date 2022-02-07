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

export const PostHead = styled.section``;

export const PostInfomation = styled.div`
  margin-bottom: 1.5rem;

  & > time {
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.color.time};
  }
`;

export const PostContent = styled.section`
  width: 768px;
  margin: 5rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.lightGrey};
  font-size: 1rem;
  line-height: 1.7;
  work-break: keep-all;
  overflow-wrap: break-word;
`;
