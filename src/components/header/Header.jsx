import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/WholeContext";

import * as H from "./Header.styled";

import mainLogo from "../../assets/svgs/mainLogo.svg";
import closeIcon from "../../assets/svgs/closeIcon.svg";
import { checkLogin } from "@utils/checkLogin";

const Header = ({ toggleMenu }) => {
  const { login, logout, header } = useData();

  const [isLoggedIn, setIsLoggedIn] = useState(() => checkLogin());

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    toggleMenu();
  };

  // console.log("isAuthenticated", isAuthenticated);

  const handleHomeClick = () => {
    // setMenuOpen((prev) => !prev);
    navigate("/");
  };

  const handleLoginClick = () => {
    // setMenuOpen((prev) => !prev);
    navigate("/login");
  };

  const handleReportClick = () => {
    // setMenuOpen((prev) => !prev);
    navigate("/report");
  };

  const handleTimerClick = () => {
    // setMenuOpen((prev) => !prev);
    navigate("/timer");
  };

  const handleMyPageClick = () => {
    // setMenuOpen((prev) => !prev);
    navigate("/mypage");
  };

  const handleLogout = () => {
    // localStorage에서 토큰 제거
    localStorage.removeItem("user");
    setIsLoggedIn(() => checkLogin());

    // 홈 화면으로 리다이렉트
    useNavigate("/");
  };

  // 실시간 유저 수 보기 클릭 시 호출될 함수
  const scrollToLiveSection = () => {
    const element = document.getElementById("live-users-section");

    if (element) {
      const topOffset = element.offsetTop;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <H.NavBar>
        {header.showLogo && (
          <img
            src={mainLogo}
            alt="MainLogo"
            className="mainLogo"
            onClick={handleHomeClick}
          />
        )}
        {isLoggedIn ? (
          <H.Options>
            {header.showLoginButton && (
              <button className="login-btn" onClick={handleLogout}>
                로그아웃
              </button>
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
              <button className="login-btn" onClick={handleLoginClick}>
                로그인
              </button>
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
          <button onClick={scrollToLiveSection}>실시간 유저 수 보기</button>
          <button onClick={handleTimerClick}>작업 타이머</button>
          <button onClick={handleReportClick} disabled={!isLoggedIn}>
            작업 패턴 분석 리포트
          </button>

          <button
            className="last-menu"
            onClick={handleMyPageClick}
            disabled={!isLoggedIn}
          >
            마이페이지
          </button>
        </H.MenuItems>
      )}
    </>
  );
};

export default Header;
