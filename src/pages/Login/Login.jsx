import kakaoButtonImg from "@assets/images/kakao_login_medium_narrow.png";
//import BeforLogin from "@assets/images/Login_Lighthouse.png";
import BeforLogin from "@assets/svgs/light_house_before.svg";
import Header from "@components/header/Header";
import { navigateAtom } from "@stores/navigate";
import { requestKakaoLogin } from "@utils/requestKakao";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/WholeContext";
import * as S from "./Login.styled";

const Login = () => {
  const { setHeader } = useData();

  const navigate = useNavigate();
  const user = localStorage?.getItem("user");
  useEffect(() => {
    //헤더 설정
    setHeader({
      showLogo: true,
      showLoginButton: false,
      showHamburgerButton: false,
      showCloseButton: true,
    });

    //로컬스토리지에서 가져온 유저 데이터가 존재하는지 확인
    const userObj = JSON.parse(user);
    console.log(userObj);
    if (userObj === null) {
      console.log(
        "로그인이 필요합니다. 아래의 카카오 로그인 버튼을 눌러주세요."
      );
    } else {
      //이미 로그인이 되어 있는 경우
      console.log("로그인되어 있으므로 넘어갑니다.");
      navigate("/school");
    }
  }, []);

  const [, setNavigateUrl] = useAtom(navigateAtom);
  const handleLoginBtn = (url) => {
    setNavigateUrl(url);
    requestKakaoLogin();
  };

  return (
    <>
      <Header />
      <S.LoginWrapper>
        <S.LoginTitle>오늘 작업도 파이팅!</S.LoginTitle>
        <S.LoginTitleExplanation>
          로그인 시 작업 시간 기록과 분석 리포트 등 다양한 기능을 사용할 수
          있어요
        </S.LoginTitleExplanation>
        <S.LoginGraphic $imgSrc={BeforLogin}></S.LoginGraphic>
        <S.LoginSubTitle>나의 야작 메이트, LOGO, 슬로건</S.LoginSubTitle>
        <S.LoginButton
          $imgsrc={kakaoButtonImg}
          onClick={() => handleLoginBtn("/school")}
        />
      </S.LoginWrapper>
    </>
  );
};

export default Login;
