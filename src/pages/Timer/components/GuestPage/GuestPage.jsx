import { useNavigate } from "react-router-dom";
import * as S from "./GuestPage.styled";

const GuestPage = () => {
  const navigate = useNavigate();

  return (
    <S.GuestPageWrapper>
      <S.BodyWrapper>
        <S.TextWrapper>
          <S.Title>비로그인 상태예요</S.Title>
          <S.SubTitle>
            {//여러 줄일 경우 반드시 백틱 사용할 것 - 그럼 \n 안써도 개행 인식 가능(물론 pre-line은 설정해야함)
            `일회적인 타이머 사용만 가능해요
            시간 기록과 목표 작성 및 상태메시지 기록은 불가능해요`}
          </S.SubTitle>
        </S.TextWrapper>
        <S.GraphicImg/>
        <S.ButtonWrapper>
          <S.Button onClick={()=>navigate("/")}>로그인하기</S.Button>
          <S.Button onClick={()=>navigate("/timer")}>무시하고 타이머 시작</S.Button>
        </S.ButtonWrapper>
      </S.BodyWrapper>
      
    </S.GuestPageWrapper>
  )
}

export default GuestPage
