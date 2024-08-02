import Lottie from "react-lottie";

import lightHouse from "../../animations/testLottie.json";
import timerGraphic from "../../animations/testLottie-2.json";

import * as L from "./Lottie.styled";

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
