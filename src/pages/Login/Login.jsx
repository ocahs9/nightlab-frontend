import kakaoButtonImg from "@assets/images/kakao_login_medium_narrow.png"
import * as S from "./Login.styled"

const Login = () => {
  return (
    <S.LoginWrapper>
      <S.LoginTitle>오늘 작업도 파이팅!</S.LoginTitle>
      <S.LoginTitleExplanation>
        로그인 시 작업 시간 기록과 분석 리포트 등 
        다양한 기능을 사용할 수 있어요
      </S.LoginTitleExplanation>
      <S.LoginGraphic>아직 내용 없음</S.LoginGraphic>
      <S.LoginSubTitle>나의 야작 메이트, LOGO, 슬로건</S.LoginSubTitle>
      <S.LoginButton $imgsrc = {kakaoButtonImg}/>
    </S.LoginWrapper>
  )
}

export default Login
