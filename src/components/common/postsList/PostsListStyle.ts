import styled from 'styled-components';

export const PostsWrapper = styled.section<{ pageType: string }>`
  margin: 0px auto 80px;
  padding-top: 120px;

  & > p {
    margin-bottom: 30px;
    font-size: 18px;
  }

  & > p::after {
    content: '';
    display: block;
    width: ${({ pageType }) => (pageType === '게시글' ? '49px' : '70px')};
    height: 1px;
    margin-top: 8px;
    background: var(--fg);
  }

  @media (max-width: 1920px) {
    width: 1000px;
  }

  @media (max-width: 1024px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 450px;
  }
`;

export const PostItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 120px;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 15px 45px;

    & > div {
      color: ${({ theme }) => theme.color.main};
      font-size: 14px;
      margin-bottom: 15px;
    }

    & > a {
      margin-bottom: 15px;
      font-size: 22px;
      font-family: 'NanumSquareEB';
    }

    & > p {
      font-size: 15px;
      margin-bottom: 20px;
      line-height: 2;
    }

    & > time {
      font-size: 14px;
      color: #666;
    }
  }
`;
