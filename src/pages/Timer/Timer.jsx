import { useEffect, useState } from "react";
import * as S from "./Timer.styled";

const Timer = () => {
  const [workTime, setWorkTime] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);



  //타이머 시작 시 시간 증가하고, 중단 시 시간 증가하지 않는 로직 구성
  useEffect(()=>{
    let interval = null;
    if(isTimerStart && !isBreakTime){
      interval = setInterval(()=>{
        setWorkTime((prev)=>prev+1);
      },1000)
    } else if(!isTimerStart && isBreakTime){ 
      clearInterval(interval);
    }
    //클린 업
    return () => clearInterval(interval);
  },[isTimerStart, isBreakTime])


  const handleTimerStart = () => {
    setIsTimerStart(true);
    setIsBreakTime(false);
  }

  const handleTimerStopToggle = () => {
    //setIsTimerStart((prev)=>!prev);
    setIsBreakTime((prev)=>!prev);
  }

  const handleTimerReset = () => {
    setIsTimerStart(false);
    setIsBreakTime(false);
    setWorkTime(0);
  }

  const handleTimerStartOrReset = () => {
    if(!isTimerStart){ //시작된게 아니라면
      handleTimerStart();
    }else if(isTimerStart){ //시작되어 있다면 - 작업 중지 : reset
      const confirmCheck = confirm("작업 시간을 초기화하시겠습니까?");
      if(confirmCheck){
        handleTimerReset();
      }
    }
  }

  const formatWorkTime = (workTime) => {
    const hours = Math.floor(workTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((workTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (workTime % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  //서버로 보내는 로직도 짜야함. 10초마다?

  return (
    <S.TimerPageWrapper>
      <S.TimerWrapper>
        <S.TimerTitle>작업 타이머</S.TimerTitle>
        <S.MyStatusWrapper>
          <S.MyStatusTimer>{`${formatWorkTime(workTime)}째 작업 중`}</S.MyStatusTimer>
          <S.MyStatusGraphic $profile={`gentle`} />
        </S.MyStatusWrapper>
        <S.TimerButtonWrapper>
          <S.TimerButton onClick={handleTimerStartOrReset} $redMode={isTimerStart}>
            {isTimerStart ? "작업 타이머 중지" : "작업 타이머 시작"}
          </S.TimerButton>
          <S.TimerButton onClick={handleTimerStopToggle} $redMode={isBreakTime} disabled={!isTimerStart} $disabled={!isTimerStart} >
            {isBreakTime ? "휴식 중지" : "휴식하기"}
          </S.TimerButton>
          <S.TimerSubTitle>휴식 버튼으로 작업 타이머를 중지하지 않고 휴식만 할 수 있어요</S.TimerSubTitle>
        </S.TimerButtonWrapper>
      </S.TimerWrapper>
      <S.OnlineMemberWrapper>

      </S.OnlineMemberWrapper>
    </S.TimerPageWrapper>
  )
}

export default Timer
