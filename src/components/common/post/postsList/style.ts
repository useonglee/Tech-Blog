import styled from 'styled-components';

export const PostsWrapper = styled.section<{ pageType: string }>`
  margin: 0px auto 80px;
  padding-top: 7.5rem;

  & > p {
    margin-bottom: 1.875rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  & > p::after {
    content: '';
    display: block;
    width: ${({ pageType }) =>
      pageType === '게시글' ? '3.062rem' : '4.375rem'};
    height: 1px;
    margin-top: 0.5rem;
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
