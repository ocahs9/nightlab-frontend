import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [header, setHeader] = useState({
    showLogo: true,
    showLoginButton: true,
    showHamburgerButton: true,
    showCloseButton: false,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    // 로직 구현 안된 단순 동작
    setIsAuthenticated(true);

    // 토큰(Access Token)을 이용해 로직 구현 필요
  };

  const logout = () => {
    // 로직 구현 안된 단순 동작
    setIsAuthenticated(false);

    // 토큰을 이용해 로직 구현 필요
  };

  return (
    <Context.Provider
      value={{ isAuthenticated, login, logout, header, setHeader }}
    >
      {children}
    </Context.Provider>
  );
};

export const useData = () => {
  return useContext(Context);
};
