import * as LU from "./LiveUsers.styled";

import Clock from "@components/Clock/Clock";
import LiveUserGraphic from "@components/UserType/LiveUserGraphic";

const LiveUsers = ({ liveUser }) => {
  return (
    <>
      <LU.Container id="live-users-section">
        <LU.Text>
          <span className="clock-line">
            <span className="clock">
              <Clock />
            </span>
            기준,
          </span>
          <br />
          {liveUser}명이 작업 등대에 있어요.
        </LU.Text>
        <LiveUserGraphic liveUser={liveUser} />
      </LU.Container>
    </>
  );
};

export default LiveUsers;
