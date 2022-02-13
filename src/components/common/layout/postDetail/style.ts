import styled, { css } from 'styled-components';

export const PostLayoutStyle = styled.main`
  ${({ theme }) => {
    const { flex, fontSize } = theme;

    return css`
      ${flex.flexCenter};
      flex-direction: column;

      width: 768px;
      margin: 5.5rem auto 0;

      & > h1 {
        margin-bottom: 2rem;
        font-size: ${fontSize.h1};
        font-family: 'NanumSquareB';
        line-height: 1.5;
        work-break: keep-all;
      }
    `;
  }}
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
  ${({ theme }) => {
    const { color } = theme;

    return css`
      width: 768px;
      margin: 5rem auto 0;
      padding-top: 1rem;
      border-top: 1px solid ${color.lightGrey};
      line-height: 1.7;
      work-break: keep-all;
      overflow-wrap: break-word;
    `;
  }}
`;
