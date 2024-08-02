import { Link } from "react-router-dom";

import * as ST from "./EnterTimer.styled";

import { EnterTimerGraphic } from "@components/Lottie/Lottie";

const EnterTimer = () => {
  return (
    <>
      <ST.Container>
        <h3 className="title">작업 등대로 들어가 볼까요?</h3>
        <EnterTimerGraphic />
        <Link to="/timer">
          <button className="start-btn">작업 타이머 시작</button>
        </Link>
      </ST.Container>
    </>
  );
};

export default EnterTimer;
