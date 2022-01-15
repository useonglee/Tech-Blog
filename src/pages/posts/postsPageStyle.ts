import styled from 'styled-components';

const BannerContainer = styled.section``;

const PostsContainer = styled.section`
  width: 1170px;
  margin: 0px auto 80px;
  padding-top: 120px;

  & > p {
    margin-bottom: 30px;
    font-size: 18px;
  }

  & > p::after {
    content: '';
    display: block;
    width: 49px;
    height: 1px;
    margin-top: 8px;
    background: var(--fg);
  }

  & > ul {
    & > li {
      margin-bottom: 120px;
    }
  }
`;

export { BannerContainer, PostsContainer };
