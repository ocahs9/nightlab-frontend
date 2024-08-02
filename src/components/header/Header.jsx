import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useData } from "../../contexts/WholeContext";

import * as H from "./Header.styled";

import mainLogo from "../../assets/mainLogo.svg";
import closeIcon from "../../assets/svgs/closeIcon.svg";

const Header = ({ toggleMenu }) => {
  const { isAuthenticated, login, logout, header } = useData();

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    toggleMenu();
  };

  // console.log("isAuthenticated", isAuthenticated);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <H.Container>
      <H.NavBar>
        {header.showLogo && (
          <Link to="/">
            <img src={mainLogo} alt="MainLogo" className="mainLogo" />
          </Link>
        )}
        {isAuthenticated ? (
          <H.Options>
            {header.showLoginButton && (
              <Link to="/">
                <button className="login-btn">로그아웃</button>
              </Link>
            )}
            {header.showHamburgerButton && (
              <>
                <input
                  type="checkbox"
                  id="menu-toggle"
                  onChange={handleMenuToggle}
                  checked={menuOpen}
                />
                <H.HamburgerButton htmlFor="menu-toggle" id="menu-button">
                  <span></span>
                </H.HamburgerButton>
              </>
            )}
          </H.Options>
        ) : (
          <H.Options>
            {header.showLoginButton && (
              <Link to="/login">
                <button className="login-btn">로그인</button>
              </Link>
            )}
            {header.showHamburgerButton && (
              <>
                <input
                  type="checkbox"
                  id="menu-toggle"
                  onChange={handleMenuToggle}
                  checked={menuOpen}
                />
                <H.HamburgerButton htmlFor="menu-toggle" id="menu-button">
                  <span></span>
                </H.HamburgerButton>
              </>
            )}
            {header.showCloseButton && (
              <>
                <img
                  src={closeIcon}
                  alt="closeIcon"
                  className="close-btn"
                  onClick={handleHomeClick}
                />
              </>
            )}
          </H.Options>
        )}
      </H.NavBar>

      {menuOpen && (
        <H.MenuItems
          style={{
            transform: menuOpen ? "translateX(0%)" : "translateX(150%)",
          }}
        >
          <li>실시간 유저 수 보기</li>

          <Link to="/timer">
            <li>작업 타이머</li>
          </Link>

          <Link to="/report">
            <button disabled={!isAuthenticated}>작업 패턴 분석 리포트</button>
          </Link>

          <Link to="/mypage">
            <button className="last-menu" disabled={!isAuthenticated}>
              마이페이지
            </button>
          </Link>
        </H.MenuItems>
      )}
    </H.Container>
  );
};

export default Header;
