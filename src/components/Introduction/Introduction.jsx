import * as I from "./Introduction.styled";

const Introduction = ({ connectedUser }) => {
  return (
    <>
      <I.Container>
        <h2 className="daily-users">
          오늘은 {connectedUser}명이
          <br />
          작업 등대를 다녀갔어요.
        </h2>
        <p className="intro">함께 야작하며 차가운 밤을 따뜻하게 보내 보아요!</p>
      </I.Container>
    </>
  );
};

export default Introduction;
