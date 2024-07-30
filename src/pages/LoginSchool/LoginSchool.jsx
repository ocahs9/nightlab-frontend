import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./LoginSchool.styled";


const LoginSchool = () => {
  //가장 먼저, 로그인은 되어 있는데, 학교는 입력 안했는지 살펴볼 것
  //만약 학교 입력은 되어 있으면 바로 main으로 건너 뛰는 로직 필요
  //atom 사용해야할 것이라고 추측.
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isMailSended, setIsMailSended] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  useEffect(()=>{
    if(isMailSended && isCertificated){
      setIsFormCompleted(true);
    }
  },[isMailSended, isCertificated])
  
  const handleChangeEmailInput = (e) => {
    setEmailAddress(e.target.value);
  }
  const handleChangeEmailCode = (e) => {
    setEmailCode(e.target.value);
  }

  //디버깅을 위한 코드
  useEffect(()=>{
    console.log(emailAddress);
    console.log(emailCode);
  },[emailAddress, emailCode])

  //이메일 확인 요청을 쏘는 로직
  const handleEmailButton = async(emailAddress) => {
    //이 두줄은 나중에 바로 지울 예정
    console.log("email 확인 버튼 클릭");
    setIsMailSended(true);

    //아래의 코드는 api 연결할 때 주석 해제하여 그대로 사용할 예정
    /*
    try{
      const response = await post("auth/verify", 
        {
          email : emailAddress
        }
      );
      console.log(response.data); 
      setIsMailSended(true);
      alert("입력하신 이메일로 인증코드가 전송되었습니다.");
    }
    catch(error){
      alert(error.response.data.detail);
      console.error("Error:",error);
    }
    */
  }

  const handleEmailCodeButton = async(emailCode) => {
    //이 두줄은 나중에 바로 지울 예정
    console.log("인증번호 확인 요청 버튼 클릭");
    setIsCertificated(true);

    /*
    //아래의 코드는 api 연결할 때 주석 해제하여 그대로 사용할 예정
    try{
      const response = await post("auth/verify/check", 
        {
          verify_code : emailCode
        }
      );
      console.log(response.data); 
      setIsCertificated(true);
      console.log("인증 완료");
    }catch(error){
      alert(error.response.data.detail);
      console.error("Error:",error);
    }
    */
  }

  const navigate = useNavigate();
  const handleNextButton = () => {
    navigate("/profile-setup");
  }
  
  
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
              <S.Input 
                onChange={handleChangeEmailInput} 
                value={emailAddress} 
                placeholder="학교 이메일을 입력해주세요" >
              </S.Input>
              <S.Btn onClick={()=>handleEmailButton(emailAddress)}>인증하기</S.Btn>
            </S.InputAndBtnWrapper>
          </S.InputLayout>

          <S.InputLayoutWrapper>
            <S.InputLayout>
              <S.InputTitle>인증번호</S.InputTitle>
              <S.InputAndBtnWrapper>
                <S.Input 
                  onChange={handleChangeEmailCode}
                  value={emailCode}
                  placeholder="인증번호를 입력해 주세요"
                  
                />
                <S.Btn onClick={()=>handleEmailCodeButton(emailCode)}>확인</S.Btn>
              </S.InputAndBtnWrapper>
            </S.InputLayout>
            {isCertificated && 
              <S.VerificationCompleted>
                인증이 완료되었어요
              </S.VerificationCompleted>
            }
          </S.InputLayoutWrapper>
        </S.InputWrapper>
      </S.BodyWrapper>
      <S.NextBtn 
        disabled={!isFormCompleted} 
        $isFormCompleted={isFormCompleted} 
        onClick={handleNextButton}>
          다음
      </S.NextBtn>
    </S.LoginSchoolWrapper>
    
  )
}

export default LoginSchool
