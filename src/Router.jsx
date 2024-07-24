import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
// 예시
//import Search from "./pages/Search/Search";
//import Main from "./pages/Main/Main";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        {/* 
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;