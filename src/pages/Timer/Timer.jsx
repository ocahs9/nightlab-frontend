import * as S from "./Timer.styled"

const Timer = () => {
  return (
    <S.TimerPageWrapper>
      <S.TimerWrapper>
        <S.TimerTitle>작업 타이머</S.TimerTitle>
        <S.MyStatusWrapper>
          <S.MyStatusTimer>01:24:10째 작업 중</S.MyStatusTimer>
          <S.MyStatusGraphic $profile={`gentle`} />
        </S.MyStatusWrapper>
        <S.TimerButtonWrapper>
          <S.TimerButton>작업 타이머 시작</S.TimerButton>
          <S.TimerButton disabled={true} $disabled={true}>휴식하기</S.TimerButton>
          <S.TimerSubTitle>휴식 버튼으로 작업 타이머를 중지하지 않고 휴식만 할 수 있어요</S.TimerSubTitle>
        </S.TimerButtonWrapper>
      </S.TimerWrapper>
      <S.OnlineMemberWrapper>

      </S.OnlineMemberWrapper>
    </S.TimerPageWrapper>
  )
}

export default Timer
