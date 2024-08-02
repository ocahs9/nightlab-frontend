import Header from "@components/header/Header";
import EnterTimer from "@components/EnterTimer/EnterTimer";
import Footer from "@components/Footer/Footer";
import LiveUsers from "@components/LiveUsers/LiveUsers";
import UserType from "@components/UserType/UserType";
import MainGraphic from "@components/MainGraphic/MainGraphic";
import Introduction from "@components/Introduction/Introduction";
import ScrollTop from "@components/ScrollTop/ScrollTop";
import { useEffect, useState } from "react";
import { useData } from "../../contexts/WholeContext";

const HomePage = () => {
  const { header, setHeader } = useData();
  const LoginButton = header.showLoginButton;

  // console.log(LoginButton);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setHeader({
      showLogo: true,
      showLoginButton: !LoginButton,
      showHamburgerButton: true,
    });
  };

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });
  }, []);

  return (
    <>
      <Header toggleMenu={toggleMenu} />

      {!isMenuOpen && (
        <>
          <Introduction />
          <MainGraphic />

          <LiveUsers />
          <UserType />

          <EnterTimer />

          <Footer />
          <ScrollTop />
        </>
      )}
    </>
  );
};

export default HomePage;
