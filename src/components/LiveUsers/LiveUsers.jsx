import Clock from "@components/Clock/Clock";
import * as LU from "./LiveUsers.styled";

const LiveUsers = () => {
  return (
    <>
      <LU.Container>
        <span className="clock">
          <Clock />
        </span>
        기준,
        <br />
        127명이 작업 등대에 있어요.
      </LU.Container>
    </>
  );
};

export default LiveUsers;
