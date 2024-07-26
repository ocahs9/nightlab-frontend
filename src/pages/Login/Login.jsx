import kakaoButtonImg from "@assets/images/kakao_login_medium_narrow.png";
import { navigateAtom } from "@stores/navigate";
import { requestKakaoLogin } from "@utils/requestKakao";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();
  
  const user = localStorage?.getItem("user");
  useEffect(()=>{
    const userObj = JSON.parse(user);
    if(userObj === null) {
      console.log("로그인이 필요합니다. 아래의 카카오 로그인 버튼을 눌러주세요.");
    }
    else{ //이미 로그인이 되어 있는 경우 
      navigate("/login/school");
    }
  },[])


  const [, setNavigateUrl] = useAtom(navigateAtom);
  const handleLoginBtn = (url) => {
    setNavigateUrl(url);
    requestKakaoLogin();
  }

  return (
    <S.LoginWrapper>
      <S.LoginTitle>오늘 작업도 파이팅!</S.LoginTitle>
      <S.LoginTitleExplanation>
        로그인 시 작업 시간 기록과 분석 리포트 등 
        다양한 기능을 사용할 수 있어요
      </S.LoginTitleExplanation>
      <S.LoginGraphic>아직 내용 없음</S.LoginGraphic>
      <S.LoginSubTitle>나의 야작 메이트, LOGO, 슬로건</S.LoginSubTitle>
      <S.LoginButton $imgsrc = {kakaoButtonImg} onClick={()=>handleLoginBtn("/login/school")}/>
    </S.LoginWrapper>
  )
}

export default Login
