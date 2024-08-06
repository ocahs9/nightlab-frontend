import Lottie from "react-lottie";

import lightHouse from "../../animations/main_final.json";
import timerGraphic from "../../animations/timer_final.json";

export const LightHouseGraphic = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lightHouse,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        style={{
          width: "264px",
          height: "434px",
        }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </>
  );
};

export const EnterTimerGraphic = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: timerGraphic,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div
        style={{
          width: "360px",
          height: "317px",
          margin: "16px auto 24px",
        }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </>
  );
};
