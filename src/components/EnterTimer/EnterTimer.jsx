import { useNavigate } from "react-router-dom";

import * as ST from "./EnterTimer.styled";

const EnterTimer = () => {
  const navigate = useNavigate();

  const handleClickTimer = () => {
    navigate("/timer");
  };

  return (
    <>
      <ST.Container>
        <h3 className="title">작업 등대로 들어가 볼까요?</h3>
        <video className="timer-graphic" autoPlay loop muted>
          <source src="/graphic/EnterTimer.mp4" type="video/mp4" />
        </video>
        <button className="start-btn" onClick={handleClickTimer}>
          작업 타이머 시작
        </button>
      </ST.Container>
    </>
  );
};

export default EnterTimer;
