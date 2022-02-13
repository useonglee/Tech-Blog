import styled, { css } from 'styled-components';

export const HeaderStyle = styled.header<{ isScroll: boolean }>`
  ${({ theme, isScroll }) => {
    const { flex } = theme;

    return css`
      position: sticky;
      top: 0;
      z-index: 100;
      ${flex.flexVertical};
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      height: ${isScroll ? '70px' : '90px'};
      padding: 0px 75px;
      font-family: 'NanumSquareB';
      background: var(--bg);
      transition: all 0.25s ease-in-out;

      & > button {
        ${flex.flexVertical};
        margin-left: 50px;
      }

      @media (max-width: 1024px) {
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
  ${({ theme }) => {
    const { flex, fontSize } = theme;

    return css`
      ${flex.flexCenter};
      flex-direction: row;
      flex-shrink: 0;

      & > a {
        margin-right: 12px;
      }

      & > h2 {
        font-size: ${fontSize.xxl};
      }
    `;
  }}
`;

export const HeaderMenu = styled.ul`
  ${({ theme }) => theme.flex.flexVertical}
  justify-content: end;
  flex-grow: 1;
  font-family: NanumSquareL;

  & > li {
    margin: 0 25px;
    font-weight: 400;

    & > a {
      display: block;
      position: relative;

      &.active {
        font-family: NanumSquareB;
      }
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

export const MobileMenuButton = styled.div<{ isShowMobileMenu: boolean }>`
  ${({ isShowMobileMenu }) => {
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

      ${handleMenuButtonDisplay(isShowMobileMenu)}
    `;
  }}
`;

const handleMenuButtonDisplay = (isShowMobileMenu: boolean) => {
  if (isShowMobileMenu) {
    return css`
      & > span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }

      & > span:nth-child(2) {
        opacity: 0;
      }

      & > span:nth-child(3) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }
    `;
  } else {
    return css`
      & > span:nth-child(1) {
        top: 0;
      }

      & > span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }

      & > span:nth-child(3) {
        bottom: 0;
      }
    `;
  }
};
