import { get, post } from "@apis/index";
import { IcRefresh } from "@assets/svgs/index";
import { checkLogin } from "@utils/checkLogin";
import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./Timer.styled";
import Todo from "./components/Todo/Todo";

const Timer = () => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(()=>{
    setIsLogin(checkLogin());
  },[])
  const [userProfile, setUserProfile] = useState("");
  const [workTime, setWorkTime] = useState(0);
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  //새로고침 버튼 누를 때마다 렌더링되도록 하여 실행되도록 할거임
  const [userMemoDatas, setUserMemoDatas] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //memo는 배열,
  //id, content, user_name, profile, college, timer가 존재함

  useEffect(()=>{
    const getUserProfile = async() =>{
      try{
        const response = await get("/api/mypage");
        console.log("프로필 응답:",response);
        setUserProfile(response.data.profile);
      }catch(error){
        console.log(error);
      }
      
    }
    if(isLogin){
      getUserProfile();
    }

    //언마운트시 타이머 중지하도록 설정
    return () => postTimerStop();
  },[isLogin])
  
  useEffect(()=>{
    const getUserMemoData = async() => {
      try{
        const response = await axios.get("http://nightlab.kro.kr:8000/api/memo/all");
        //console.log(response);
        console.log(response.data.data.memo);
        setUserMemoDatas(response.data.data.memo);
      }catch(error){
        console.error(error);
        console.log("타이머에서 유저 데이터 가져오는데 에러 발생");
      }
      
    }
   getUserMemoData();
  },[refresh])
  
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
    if(isBreakTime){
      postTimerRestStop(); //휴식 중단
    }else{
      postTimerRestStart(); //휴식 시작
    }
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
      postTimerStart();
    }else if(isTimerStart){ //시작되어 있다면 - 작업 중지 : reset
      const confirmCheck = confirm("작업 시간을 초기화하시겠습니까?");
      if(confirmCheck){
        handleTimerReset();
        postTimerStop();
      }
    }
  }

  const handleRefreshMember = () => {
    setRefresh((prev)=>!prev);
  }

  const postTimerStart = async() => {
    if(isLogin){
      try{
        const response = await post("api/timer/start",{
          start_time : formatWorkTime(workTime)
        });
        console.log(response);
      }catch(e){
        console.error(e);
      }
    }
    
  }

  const postTimerRestStart = async() => {
    if(isLogin){
      try{
        const response = await post("api/timer/rest/start",{
          rest_time : formatWorkTime(workTime)
        });
        console.log(response);
      }catch(e){
        console.error(e);
      }
    }
    
  }

  const postTimerRestStop = async() => {
    if(isLogin){
      try{
        const response = await post("api/timer/rest/stop",{
          rest_time : formatWorkTime(workTime)
        });
        console.log(response);
      }catch(e){
        console.error(e);
      }
    }
    
  }

  const postTimerStop = async() => {
    if(isLogin){
      try{
        const response = await post("api/timer/stop",{
          stop_time : formatWorkTime(workTime)
        });
        console.log(response);
      }catch(e){
        console.error(e);
      }
    }
    
  }

  const formatWorkTime = (workTime) => {
    const hours = Math.floor(workTime / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((workTime % 3600) / 60).toString().padStart(2, '0');
    const seconds = (workTime % 60).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const [isMemoConfirmed, setIsMemoConfirmed]= useState(false);
  const [content, setContent]= useState("");
  const memoCreateApi = async() => {
    try{
      const response = await post("/api/memo", {
        content: content
      });
      console.log("메모 생성하고 보낸 응답:",response);
    } catch(error){
      console.log(error);
    }
  }
  const handleMemoCreate = () => {
    if(isMemoConfirmed){ //만약 true면 완료가 되어 있는 상태(수정 버튼이 올라와있는 상태)
      //아무 동작 안함(버튼만 바뀜)
    }else{ //false일 경우, 즉 수정 버튼 상태에서 눌렀을 경우
      memoCreateApi();
    }
    setIsMemoConfirmed((prev)=>!prev);
  }
  const handleMemoOnChange = (e) => {
    setContent(e.target.value);
  }

  

  //서버로 보내는 로직도 짜야함. 10초마다?

  return (
    <S.TimerPageWrapper>
      <S.TimerWrapper>
        <Todo/>
        <S.TimerTitle>작업 타이머</S.TimerTitle>
        <S.MyStatusWrapper>
          <S.MyStatusTimer>{`${formatWorkTime(workTime)}째 작업 중`}</S.MyStatusTimer>
          <S.MyStatusGraphic $profile={isLogin ? userProfile : "gentle"} />
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
        <S.OnlineMemeberTextBox>
          <S.OnlineMemberText>등대지기 모아보기</S.OnlineMemberText>
          <S.OnlineRefreshButton onClick={handleRefreshMember}>
            <IcRefresh/>
          </S.OnlineRefreshButton>
        </S.OnlineMemeberTextBox>

        <S.MyOnlineCardWrapper>
          {!isLogin && <S.CantUseDiv>{`로그인해야\n이용할 수 있어요.`}</S.CantUseDiv>}
          <S.MyOnlineCard>
            <S.MyCardProfileWrapper>
              <S.MyCardProfileText>MY</S.MyCardProfileText>
              <S.MyCardProfileGraphic $profile={userProfile}/>
            </S.MyCardProfileWrapper>
            <S.MyCardInputWrapper>
              <S.MyCardInputText>MEMO</S.MyCardInputText>
              <S.MyCardInputContainer>
                <S.MyCardTextArea onChange={handleMemoOnChange} disabled={isMemoConfirmed} value={content} placeholder={"상태메시지를 입력하세요."}/>
                <S.MyCardInputButton onClick={handleMemoCreate} >{isMemoConfirmed ? "수정" : "완료"}</S.MyCardInputButton>
              </S.MyCardInputContainer>
            </S.MyCardInputWrapper>
          </S.MyOnlineCard>
        </S.MyOnlineCardWrapper>

        <S.Line/>

        <S.OnlineMemberLayout>
          <S.OthersOnlineCardWrapper>
            
            {userMemoDatas?.map((obj,idx)=>
              //id, content, user_name, profile, college, timer가 존재함
              <S.OtherCardWrapper key = {`otherMember_${idx}`}>
                <S.OtherCardProfileGraphic $profile={obj.profile}/>
                <S.OtherCardTextDivBox>
                  <S.OtherCardTextDiv>
                    {obj.content}
                  </S.OtherCardTextDiv>
                  <S.OtherCardSubTextBox>
                      <S.OtherCardSubText>{obj.user_name}</S.OtherCardSubText>
                      <S.OtherCardSubText>{obj.college}</S.OtherCardSubText>
                      <S.OtherCardSubText>{`${obj.timer} 작업`}</S.OtherCardSubText>
                    </S.OtherCardSubTextBox>
                </S.OtherCardTextDivBox>
            </S.OtherCardWrapper>
            )}
            

            
          </S.OthersOnlineCardWrapper>
        </S.OnlineMemberLayout>
      </S.OnlineMemberWrapper>
    </S.TimerPageWrapper>
  )
}

export default Timer
