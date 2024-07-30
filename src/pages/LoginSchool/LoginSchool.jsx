import { useState } from "react";
import * as S from "./LoginSchool.styled";


const LoginSchool = () => {
  //가장 먼저, 로그인은 되어 있는데, 학교는 입력 안했는지 살펴볼 것
  //만약 학교 입력은 되어 있으면 바로 main으로 건너 뛰는 로직 필요
  //atom 사용해야할 것이라고 추측.
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);
  

  
  
  return (
    <S.LoginSchoolWrapper>
      <S.BodyWrapper>
        <S.TextWrapper>
          <S.Title>학교 메일을 입력해 주세요</S.Title>
          <S.SubTitle>첫 로그인의 경우, 대학생 인증이 필요해요</S.SubTitle>
        </S.TextWrapper>

        <S.InputWrapper>
          <S.InputLayout>
            <S.InputTitle>학교 메일 주소</S.InputTitle>
            <S.InputAndBtnWrapper>
              <S.Input placeholder="학교 이메일을 입력해주세요" ></S.Input>
              <S.Btn onClick={()=>{console.log("버튼클릭")}}>인증하기</S.Btn>
            </S.InputAndBtnWrapper>
          </S.InputLayout>

          <S.InputLayoutWrapper>
            <S.InputLayout>
              <S.InputTitle>인증번호</S.InputTitle>
              <S.InputAndBtnWrapper>
                <S.Input placeholder="인증번호를 입력해 주세요"/>
                <S.Btn onClick={()=>{console.log("버튼클릭")}}>확인</S.Btn>
              </S.InputAndBtnWrapper>
            </S.InputLayout>
            <S.VerificationCompleted>인증이 완료되었어요</S.VerificationCompleted>
            
          </S.InputLayoutWrapper>
        </S.InputWrapper>
      </S.BodyWrapper>
      <S.NextBtn $isFormCompleted={isFormCompleted} onClick={()=>{console.log("다음 버튼클릭")}}>다음</S.NextBtn>
    </S.LoginSchoolWrapper>
    
  )
}

export default LoginSchool
