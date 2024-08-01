import AfterLogin from "@assets/svgs/light_house_after.svg";
import * as S from "./Complete.styled";


const Complete = () => {
  return (
    <S.CompleteWrapper>
      <S.CompleteLayout>
        <S.CompleteImg $imgSrc={AfterLogin}/>
        <S.CompleteText>건강한 야작메이트, Night Lab</S.CompleteText>
      </S.CompleteLayout>
    </S.CompleteWrapper>
  )
}

export default Complete
