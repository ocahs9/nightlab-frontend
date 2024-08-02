import { fontStyles } from "@styles/mixins";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 375px;

  /* margin-top: 32px; */
  padding: 8px 16px;

  /* position: fixed;
  top: 0; */

  z-index: 5;

  .mainLogo {
    width: 150px;
    margin-top: 12px;
  }
`;

export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .login-btn {
    display: inline-block;

    width: 100%;
    height: 28px;

    padding: 2px 14px;
    margin: 10px 4px 10px 0;

    color: ${({ theme }) => theme.colors.White};
    ${({ theme }) => fontStyles(theme.fonts.Subhead_4)}

    border-radius: 18px;
    border: 1px solid ${({ theme }) => theme.colors.White};
  }

  .close-btn {
    margin-right: 8px;
  }

  /* input 태그를 사용해 햄버거 버튼 모양을 X로 상호 변형 */

  #menu-toggle {
    width: 0;
    height: 0;
    visibility: hidden;
  }

  #menu-toggle:checked + #menu-button span::before {
    transform: rotate(-45deg);
    top: 0;
  }

  #menu-toggle:checked + #menu-button span {
    background: none;
  }

  #menu-toggle:checked + #menu-button span::after {
    transform: rotate(45deg);
    top: 0;
  }
`;

export const HamburgerButton = styled.label`
  display: inline-block;

  width: 24px;
  height: 24px;

  position: relative;

  margin: 10px 16px;

  span {
    width: 22px;
    height: 3px;

    margin-top: 10px;

    position: absolute;
    left: 0;

    background-color: ${({ theme }) => theme.colors.White};

    transition: 0.3s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;

      width: 22px;
      height: 3px;

      background-color: ${({ theme }) => theme.colors.White};

      transition: 0.3s ease-in-out;
    }

    &::before {
      top: -8px;
    }

    &::after {
      top: 8px;
    }
  }
`;

export const MenuItems = styled.ul`
  list-style: none;

  ${({ theme }) => fontStyles(theme.fonts.Subhead_2_2)};
  color: ${({ theme }) => theme.colors.White};

  width: 100%;

  flex-direction: column;

  transform: translateX(150%);
  transition: 0.4s ease-out;

  li {
    width: 100%;
    height: 56px;

    padding-left: 24px;

    display: flex;
    align-items: center;

    border-top: 1px solid ${({ theme }) => theme.colors.Opacity_White_50};
  }

  button {
    width: 100%;
    height: 56px;

    padding-left: 24px;

    display: flex;
    align-items: center;

    ${({ theme }) => fontStyles(theme.fonts.Subhead_2_2)};
    color: ${({ theme }) => theme.colors.White};

    border-top: 1px solid ${({ theme }) => theme.colors.Opacity_White_50};

    &:disabled {
      cursor: default;
      color: ${({ theme }) => theme.colors.Opacity_White_25};
    }
  }

  .last-menu {
    border-bottom: 1px solid ${({ theme }) => theme.colors.Opacity_White_50};
  }
`;
