import styled, { css } from 'styled-components';

export const PostCardWrapper = styled.li`
  ${({ theme }) => {
    const { color, fontSize } = theme;

    return css`
      display: flex;
      flex-direction: row;
      margin-bottom: 7.5rem;

      & > div {
        display: flex;
        flex-direction: column;
        padding: 15px 45px;

        & > a {
          margin-bottom: 1rem;
          font-size: ${fontSize.lg};
          font-family: 'NanumSquareEB';
        }

        & > p {
          margin-bottom: 1.25rem;
          font-size: ${fontSize.base};
          line-height: 2;
        }

        & > time {
          font-size: ${fontSize.sm};
          color: ${color.time};
        }
      }
    `;
  }}
`;
