import Header from "@components/header/Header";
import EnterTimer from "@components/EnterTimer/EnterTimer";
import Footer from "@components/Footer/Footer";
import LiveUsers from "@components/LiveUsers/LiveUsers";
import MainGraphic from "@components/MainGraphic/MainGraphic";
import Introduction from "@components/Introduction/Introduction";
import ScrollTop from "@components/ScrollTop/ScrollTop";
import axios from "axios";

import { useEffect, useRef, useState } from "react";
import { useData } from "../../contexts/WholeContext";

const HomePage = () => {
  const { header, setHeader } = useData();
  const LoginButton = header.showLoginButton;

  const liveSectionRef = useRef();

  // console.log(LoginButton);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [liveUser, setLiveUser] = useState(null);
  const [dailyUser, setDailyUser] = useState(null);

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    const fetchData = async () => {
      try {
        const response = await axios.get("https://nightlab.site/api/main ");
        const resData = await response.data;

        const totalUser = resData.data.login_total_user;
        const connectedUser = resData.data.connect_total_user;

        setDailyUser(totalUser);
        setLiveUser(connectedUser);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [setHeader]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);

    setHeader({
      showLogo: true,
      showLoginButton: !LoginButton,
      showHamburgerButton: true,
    });
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
      <Header
        toggleMenu={toggleMenu}
        scrollToLiveSection={scrollToLiveSection}
      />
      {!isMenuOpen && (
        <>
          <Introduction connectedUser={dailyUser} />
          <MainGraphic />
          <LiveUsers ref={liveSectionRef} liveUser={liveUser} />
          <EnterTimer />
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default HomePage;
