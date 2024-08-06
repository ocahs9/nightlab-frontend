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
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { header, setHeader } = useData();
  const LoginButton = header.showLoginButton;

  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [liveUser, setLiveUser] = useState(null);
  const [dailyUser, setDailyUser] = useState(null);

  const liveUsersRef = useRef();
  console.log(liveUsersRef.current);

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

        console.log(resData);

        const totalUser = resData.data.login_total_user;
        const connectedUser = resData.data.connect_total_user;

        setDailyUser(totalUser);
        setLiveUser(connectedUser);
      } catch (error) {
        console.error("Home Data Fetching Error:", error);
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

  const scrollToSection = () => {
    setIsMenuOpen(false);
    navigate("/");

    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    // const element = document.getElementById("live-users-section");
    // console.log(element);

    // if (element) {
    //   const topOffset = element.offsetTop;
    //   window.scrollTo({
    //     top: topOffset,
    //     behavior: "smooth",
    //   });
    // } else {
    //   console.warn("liveUsersRef is null. Element may not be rendered.");
    // }

    if (liveUsersRef.current) {
      liveUsersRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("liveUsersRef is null. Element may not be rendered.");
    }

    console.log(liveUsersRef.current);
  };

  const targetSectionRef = useRef(null);
  const sidebarbtnclick = () => {
    //sidebar 닫히게 하는 로직
    setTimeout(() => {
      if (targetSectionRef.current) {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 0); //스크롤 이동 (메인 페이지가 렌더링 된 이후)
  };

  return (
    <>
      <Header
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        livescroll={sidebarbtnclick}
      />
      {!isMenuOpen && (
        <>
          <Introduction connectedUser={dailyUser} />
          <MainGraphic />
          <div ref={targetSectionRef}>
            <LiveUsers liveUser={liveUser} />
          </div>
          <EnterTimer />
          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default HomePage;
