import * as MWT from "./MyWorkTime.styled";
import userProfile from "../../assets/character/character-2.svg";
import WeeklyAdvice from "./WeeklyAdvice/WeeklyAdvice";

const MyWorkTime = () => {
  return (
    <>
      <MWT.Container>
        <h3 className="title">나의 작업 시간 분석</h3>
        <MWT.User>
          <img src={userProfile} alt="dummyUser" className="profile" />
          <MWT.UserData>
            <p>
              철흥님의 평균 야작 시간
              <br />
              <span>6시간 31분</span>
            </p>
            <p>
              전체 유저의 평균 야작 시간
              <br />
              <span>3시간 37분</span>
            </p>
            <p>
              전체 유저 대비
              <br />
              <span>3시간 더 많이</span> 작업했어요.
            </p>
          </MWT.UserData>
        </MWT.User>
        <WeeklyAdvice />
      </MWT.Container>
    </>
  );
};

export default MyWorkTime;
