import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [header, setHeader] = useState({
    showLogo: true,
    showLoginButton: true,
    showHamburgerButton: true,
    showCloseButton: false,
  });

  const LoginButton = header.showLoginButton;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        header,
        setHeader,
        isMenuOpen,
        setIsMenuOpen,
        LoginButton
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useData = () => {
  return useContext(Context);
};
