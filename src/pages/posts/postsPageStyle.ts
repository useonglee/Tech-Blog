import styled from 'styled-components';

const PostsWrapper = styled.section`
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

const PostItem = styled.li`
  margin-bottom: 120px;

  & > p {
    color: #666;
  }
`;

export { PostsWrapper, PostItem };
