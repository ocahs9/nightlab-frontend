// import ProfileImage from "@pages/ProfileSetup/components/ProfileImage/ProfileImage";

// import * as PS from "../ProfileSetup/ProfileSetup.styled";
import { useEffect, useState } from "react";
import { useData } from "../../../contexts/WholeContext";
import { useNavigate } from "react-router-dom";

import * as MC from "./ModifyCharacter.styled";

import Header from "@components/header/Header";

import gentle from "@assets/svgs/gentle_profile.svg";
import serious from "@assets/svgs/serious_profile.svg";
import sharp from "@assets/svgs/sharp_profile.svg";


const ModifyCharacter = () => {
  const { setHeader } = useData();

  const navigate = useNavigate();

  const [character, setCharacter] = useState("");

  useEffect(() => {
    setHeader({
      showLogo: true,
      showLoginButton: false,
      showHamburgerButton: false,
      showCloseButton: true,
    });
  }, [setHeader]);

  const handleSelectProfile = (e) => {
    const selectedCharacter = e.target.name;

    if (selectedCharacter !== character) {
      setCharacter(selectedCharacter);
      localStorage.setItem("selectedCharacter", selectedCharacter);
    }
  };

  const handleProfileChange = () => {
    navigate("/mypage");
  };

  return (
    <>
      <Header />
      <MC.Container>
        <MC.Text>
          <h3>변경할 프로필을 선택해 주세요</h3>
          <p>당신은 어떤 등대지기인가요?</p>
        </MC.Text>

        <MC.CharacterOption>
          <MC.Character
            name={"gentle"}
            $imgSrc={gentle}
            onClick={handleSelectProfile}
            $isSelected={character === "gentle"}
          ></MC.Character>
          <MC.Character
            name={"sharp"}
            $imgSrc={sharp}
            onClick={handleSelectProfile}
            $isSelected={character === "sharp"}
          ></MC.Character>
          <MC.Character
            name={"serious"}
            $imgSrc={serious}
            onClick={handleSelectProfile}
            $isSelected={character === "serious"}
          ></MC.Character>
        </MC.CharacterOption>

        <MC.CompleteButton
          onClick={handleProfileChange}
          disabled={character === ""}
          $isFormCompleted={character !== ""}
        >
          완료
        </MC.CompleteButton>
      </MC.Container>
    </>
  );
};

export default ModifyCharacter;
