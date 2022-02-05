import styled from 'styled-components';

export const PostCardWrapper = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 120px;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 15px 45px;

    & > span {
      margin-bottom: 15px;

      & > a {
        margin-right: 20px;
        color: ${({ theme }) => theme.color.main};
        font-size: 14px;
      }
    }

    & > a {
      margin-bottom: 15px;
      font-size: 22px;
      font-family: 'NanumSquareEB';
    }

    & > p {
      margin-bottom: 20px;
      font-size: 15px;
      line-height: 2;
    }

    & > time {
      font-size: 14px;
      color: #666;
    }
  }
`;