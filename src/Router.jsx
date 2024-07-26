import KakaoLogin from "@pages/KakaoLogin/KakaoLogin";
import Login from "@pages/Login/Login";
import LoginSchool from "@pages/LoginSchool/LoginSchool";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 예시
//import Search from "./pages/Search/Search";
//import Main from "./pages/Main/Main";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login/school" element={<LoginSchool/>}/>
        <Route path="/oauth/callback/kakao" element={<KakaoLogin/>} />,
        {/* 
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;