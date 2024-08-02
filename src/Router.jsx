import HomePage from "@pages/Home/Home";
import KakaoLogin from "@pages/KakaoLogin/KakaoLogin";
import Login from "@pages/Login/Login";
import LoginSchool from "@pages/LoginSchool/LoginSchool";
import MyPage from "@pages/MyPage/Mypage";
import ProfileSetup from "@pages/ProfileSetup/ProfileSetup";
import GuestPage from "@pages/Timer/components/GuestPage/GuestPage";
import Timer from "@pages/Timer/Timer";
import WorkReport from "@pages/WorkReport/WorkReport";
import WorkTimer from "@pages/WorkTimer/WorkTimer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 예시
//import Search from "./pages/Search/Search";
//import Main from "./pages/Main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/school" element={<LoginSchool />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />,
        <Route path="/oauth/callback/kakao" element={<KakaoLogin />} />,
        <Route path="/unlogin" element={<GuestPage />} />,
        <Route path="/timer" element={<Timer />} />,

        <Route path="/report" element={<WorkReport />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
