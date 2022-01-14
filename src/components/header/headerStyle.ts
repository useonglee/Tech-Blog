import styled from 'styled-components';

export const HeaderStyle = styled.header`
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: space-between;
  flex-direction: row;
  padding: 30px 75px;
  font-family: 'NanumSquareB';
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
  flex-grow: 1;
  margin-left: auto;

  & > a {
    display: block;
    position: relative;
    padding: 0 16px;
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

  & > button {
    ${({ theme }) => theme.flex.flexVertical}
    padding: 0 20px;
  }
`;
