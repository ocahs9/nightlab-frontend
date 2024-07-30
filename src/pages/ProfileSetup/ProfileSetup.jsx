import { IcArrowBottom } from "@assets/svgs";

import { useState } from "react";
import * as S from "./ProfileSetup.styled";

const ProfileSetup = () => {
  const [step, setStep] = useState(0);
  
  return (
    <S.ProfileSetupWrapper>
      <S.BodyWrapper>
        <S.TextWrapper>
          <S.Title>단과 대학을 선택해 주세요</S.Title>
          <S.SubTitle>한 번 선택하면 수정이 불가능해요</S.SubTitle>
        </S.TextWrapper>
        <S.InputWrapper>
          <S.DropDown $isSelected={false}>단과 대학을 선택해 주세요<IcArrowBottom/></S.DropDown>
        </S.InputWrapper>
      </S.BodyWrapper>
      <S.NextBtn $isFormCompleted={true}>
        다음
      </S.NextBtn>
      
    </S.ProfileSetupWrapper>
  )
}

export default ProfileSetup
