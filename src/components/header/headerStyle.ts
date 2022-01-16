import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header<{ isScroll: boolean }>`
  ${({ theme, isScroll }) => {
    const { flex } = theme;

    return css`
      position: ${isScroll ? 'fixed' : 'relative'};
      z-index: 100;
      ${flex.flexVertical}
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      height: ${isScroll ? '73px' : '87px'};
      padding: 30px 75px;
      font-family: 'NanumSquareB';
      background: var(--bg);
      transition: all 0.25s ease-in-out;

      & > button {
        ${flex.flexVertical}
        margin-left: 50px;
      }

      @media (max-width: 1024px) {
        position: relative;
        height: 3rem;
        padding: 3px 15px;

        & > div {
          ${({ theme }) => theme.flex.flexHorizontal};
        }

        & > ul {
          display: none;
        }
      }
    `;
  }}
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

export const MobileMenuButton = styled.div<{ isShowMenu: boolean }>`
  ${({ isShowMenu }) => {
    return css`
      cursor: pointer;
      position: relative;
      display: none;
      width: 24px;
      height: 16px;

      & > span {
        position: absolute;
        width: 100%;
        height: 2px;
        background: #000;
        transition: all 0.25s;
      }

      & > span:nth-child(1) {
        ${handleTopOfButtonDisplay(isShowMenu)}
      }

      & > span:nth-child(2) {
        ${handleMiddleOfButtonDisplay(isShowMenu)}
      }

      & > span:nth-child(3) {
        ${handleBottomOfButtonDisplay(isShowMenu)}
      }
    `;
  }}
`;

export const ButtonLabel = styled.label`
  display: block;
  width: 24px;
`;

const handleTopOfButtonDisplay = (isShowMenu: boolean) => {
  if (isShowMenu) {
    return css`
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    `;
  } else {
    return css`
      top: 0;
    `;
  }
};

const handleMiddleOfButtonDisplay = (isShowMenu: boolean) => {
  if (isShowMenu) {
    return css`
      opacity: 0;
    `;
  } else {
    return css`
      top: 50%;
      transform: translateY(-50%);
    `;
  }
};

const handleBottomOfButtonDisplay = (isShowMenu: boolean) => {
  if (isShowMenu) {
    return css`
      bottom: 50%;
      transform: translateY(50%) rotate(-45deg);
    `;
  } else {
    return css`
      bottom: 0;
    `;
  }
};
