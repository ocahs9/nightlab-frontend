import * as LUG from "./LiveUserGraphic.styled";

import liveUserImage from "@assets/images/liveUserGraphic.svg";

const LiveUserGraphic = ({ liveUser }) => {
  return (
    <>
      <LUG.Container>
        <LUG.GraphicContainer>
          <LUG.Graphic src={liveUserImage} alt="LiveUser-Image" />
          <LUG.LiveUser>
            <h4 className="now">NOW!</h4>
            <h4 className="users">{liveUser}명</h4>
          </LUG.LiveUser>
        </LUG.GraphicContainer>
      </LUG.Container>
    </>
  );
};

export default LiveUserGraphic;
