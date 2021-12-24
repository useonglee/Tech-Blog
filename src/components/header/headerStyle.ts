import styled from 'styled-components';

export const HeaderStyle = styled.header`
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: space-between;
  flex-direction: row;
  padding: 2.5rem 0;
  width: 100%;
  font-family: 'NanumSquareB';
`;

export const LogoBox = styled.div`
  ${({ theme }) => theme.flex.flexCenter}
  flex-direction: row;

  & > a {
    margin-right: 12px;
  }

  & > h2 {
    font-size: 1.5rem;
  }
`;

export const HeaderRightContent = styled.div`
  ${({ theme }) => theme.flex.flexVertical}

  & > div {
    & > a {
      padding: 0 16px;
    }

    & > button {
      padding: 0 24px;
    }
  }
`;
