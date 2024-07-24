import { BrowserRouter, Routes } from "react-router-dom";
// 예시
//import Search from "./pages/Search/Search";
//import Main from "./pages/Main/Main";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;