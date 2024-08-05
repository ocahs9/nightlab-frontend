import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ProfileSetup.styled";
import Complete from "./components/Complete/Complete";
import DropDown from "./components/DropDown/DropDown";
import NickName from "./components/NickName/NickName";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import { useData } from "../../contexts/WholeContext";
import Header from "@components/header/Header";

const ProfileSetup = () => {
  const { setHeader } = useData();

  const [step, setStep] = useState(0);
  const [college, setCollege] = useState("");
  const [nickName, setNickName] = useState("");
  const [profile, setProfile] = useState("");

  const [nickNameOk, setNickNameOk] = useState(false);

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: false,
      showHamburgerButton: false,
      showCloseButton: true,
    });
  }, []);

  const handleNextButton = () => {
    setStep((prev) => prev + 1);
    console.log(step);
  };

  const handleSetProfileComplete = async () => {
    setStep((prev) => prev + 1);
    localStorage.setItem("isSetComplete", true);
    /*
    try{
      const response = await post("/auth/signup", 
        {
          college : college, 
          user_name : nickName, 
          profile : profile, 
        }
      )
      console.log(response);
      setStep((prev)=>prev+1);
      localStorage.setItem("isSetComplete", true);

    }
    catch(error){
      //console.error("Error",error);
      alert(error.response.data.detail);
    }
    */
  };

  const navigate = useNavigate();
  
  const handleGotoMain = () => {
    navigate("/");
  };

  return (
    <>
      <Header />
      <S.ProfileSetupWrapper $gap={step === 2 ? "4.4" : step === 3 && "2.8"}>
        <S.BodyWrapper $gap={step === 2 ? "2.8" : step === 3 && "2.4"}>
          {step === 0 && (
            <>
              <S.TextWrapper>
                <S.Title>단과 대학을 선택해 주세요</S.Title>
                <S.SubTitle>한 번 선택하면 수정이 불가능해요</S.SubTitle>
              </S.TextWrapper>
              <DropDown college={college} setCollege={setCollege} />
            </>
          )}
          {step === 1 && (
            <>
              <S.TextWrapper>
                <S.Title>사용할 닉네임을 입력해 주세요</S.Title>
                <S.SubTitle>익명으로 부담을 덜어요</S.SubTitle>
              </S.TextWrapper>
              <NickName
                nickName={nickName}
                setNickName={setNickName}
                setNickNameOk={setNickNameOk}
              />
            </>
          )}
          {step === 2 && (
            <>
              <S.TextWrapper>
                <S.Title>사용할 프로필을 선택해 주세요</S.Title>
                <S.SubTitle>마이페이지에서 수정할 수 있어요</S.SubTitle>
              </S.TextWrapper>
              <ProfileImage profile={profile} setProfile={setProfile} />
            </>
          )}
          {step === 3 && (
            <>
              <S.TextWrapper>
                <S.Title>환영합니다!</S.Title>
                <S.SubTitle>Night Lab과 함께 건강한 야작을 해봐요</S.SubTitle>
              </S.TextWrapper>
              <Complete />
            </>
          )}
        </S.BodyWrapper>
        {step === 0 && (
          <S.NextBtn
            onClick={handleNextButton}
            disabled={college === ""}
            $isFormCompleted={college !== ""}
          >
            다음
          </S.NextBtn>
        )}
        {step === 1 && (
          <S.NextBtn
            onClick={handleNextButton}
            disabled={!nickNameOk}
            $isFormCompleted={nickNameOk}
          >
            다음
          </S.NextBtn>
        )}
        {step === 2 && (
          <S.NextBtn
            onClick={handleSetProfileComplete}
            disabled={profile === ""}
            $isFormCompleted={profile !== ""}
          >
            완료
          </S.NextBtn>
        )}
        {step === 3 && (
          <S.NextBtn
            onClick={handleGotoMain}
            disabled={false}
            $isFormCompleted={true}
          >
            메인으로
          </S.NextBtn>
        )}
      </S.ProfileSetupWrapper>
    </>
  );
};

export default ProfileSetup;
