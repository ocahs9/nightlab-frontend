import { get, post } from "@apis/index";
import Header from "@components/header/Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../contexts/WholeContext";
import * as S from "./LoginSchool.styled";

const LoginSchool = () => {
  //가장 먼저, 로그인은 되어 있는데, 학교는 입력 안했는지 살펴볼 것
  //만약 학교 입력은 되어 있으면 바로 main으로 건너 뛰는 로직 필요
  //atom 사용해야할 것이라고 추측.
  //일단 로컬스토리지로 구현
  const [onBoarding, setOnBoarding] = useState(true); //기본은 넘어가도록 설정
  const { setHeader } = useData();
  useEffect(()=>{
    setHeader({
      showLogo: true,
      showLoginButton: false,
      showHamburgerButton: false,
      showCloseButton: true,
    });

    onBoardingApi(); //넘어갈지 말지
  },[])

  const navigate = useNavigate();

  const onBoardingApi = async() => {
    try{
      const response = await get("/api/onboard");
      console.log("온보딩으로 넘어갈지 여부: ",response.data.onboarding )
      setOnBoarding(response.data.onboarding);
    }catch(error){
      console.error(error);
      return null; //어차피 프로미스 반환할거임
    }
  }

  useEffect(() => {

    /*
      여기서 온보딩 API 쏘고, 해당 결과를 이용해서 넘어가는 로직 구성하기
     */
    //const isSetNotComplete = onBoardingApi();//localStorage.getItem("isSetComplete");
    //console.log("넘어가기전 온보딩:", isSetNotComplete);
    if (!onBoarding) {
      navigate("/");
    }
  }, [onBoarding]);

  

  

  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [emailAddress, setEmailAddress] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [waitSend, setWaitSend] = useState(false);
  const [isMailSended, setIsMailSended] = useState(false);
  const [isCertificated, setIsCertificated] = useState(false);

  useEffect(() => {
    if (isMailSended && isCertificated) {
      setIsFormCompleted(true);
    }
  }, [isMailSended, isCertificated]);

  const handleChangeEmailInput = (e) => {
    setEmailAddress(e.target.value);
  };
  const handleChangeEmailCode = (e) => {
    setEmailCode(e.target.value);
  };

  //디버깅을 위한 코드
  useEffect(() => {
    console.log(emailAddress);
    console.log(emailCode);
  }, [emailAddress, emailCode]);

  //이메일 확인 요청을 쏘는 로직
  const handleEmailButton = async (emailAddress) => {
    //이 두줄은 나중에 바로 지울 예정
    //console.log("email 확인 버튼 클릭");
    //setIsMailSended(true);

    //아래의 코드는 api 연결할 때 주석 해제하여 그대로 사용할 예정
    setWaitSend(true);
    try{
      const response = await post("auth/verify", 
        {
          email : emailAddress
        }
      );
      console.log(response.data); 
      setIsMailSended(true);
      alert("입력하신 이메일로 인증코드가 전송되었습니다.");
      setWaitSend(false);
    }
    catch(error){
      alert("제대로 된 학교 이메일을 입력해주세요");
      setWaitSend(false);
      console.error("Error:",error);
    }
    
  };

  const handleEmailCodeButton = async (emailCode) => {
    //이 두줄은 나중에 바로 지울 예정
    //console.log("인증번호 확인 요청 버튼 클릭");
    //setIsCertificated(true);

    
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
    
  };

  const handleNextButton = () => {
    navigate("/profile-setup");
  };

  return (
    <>
      <Header />
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
                  placeholder="학교 이메일을 입력해주세요"
                ></S.Input>
                <S.Btn $isSending={waitSend} onClick={() => handleEmailButton(emailAddress)}>
                  인증하기
                </S.Btn>
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
                  <S.Btn onClick={() => handleEmailCodeButton(emailCode)}>
                    확인
                  </S.Btn>
                </S.InputAndBtnWrapper>
              </S.InputLayout>
              {isCertificated && (
                <S.VerificationCompleted>
                  인증이 완료되었어요
                </S.VerificationCompleted>
              )}
            </S.InputLayoutWrapper>
          </S.InputWrapper>
        </S.BodyWrapper>
        <S.NextBtn
          disabled={!isFormCompleted}
          $isFormCompleted={isFormCompleted}
          onClick={handleNextButton}
        >
          다음
        </S.NextBtn>
      </S.LoginSchoolWrapper>
    </>
  );
};

export default LoginSchool;
