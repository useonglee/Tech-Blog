import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  z-index: 100;
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 30px 75px;
  font-family: 'NanumSquareB';
  background: var(--bg);

  & > button {
    ${({ theme }) => theme.flex.flexVertical}
    margin-left: 50px;
  }
`;

export const LogoBox = styled.div`
  ${({ theme }) => theme.flex.flexCenter}
  flex-direction: row;
  flex-shrink: 0;

  & > a {
    margin-right: 12px;
  }

  & > h2 {
    font-size: 1.5rem;
  }
`;

export const HeaderMenu = styled.ul`
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: end;
  flex-grow: 1;

  & > li {
    margin: 0 25px;
    font-weight: 400;

    & > a {
      display: block;
      position: relative;
    }

    & > a::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
    }

    & > a::after {
      width: 0;
      height: 3px;
      background: ${({ theme }) => theme.color.main};
      left: 50%;
    }

    & > a:hover::after {
      width: 100%;
      left: 0;
      transition: all 0.3s;
    }
  }
`;
