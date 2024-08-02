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
      <Lottie options={defaultOptions} />
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
          width: "358px",
          height: "317px",
          margin: "48px auto",
        }}
      >
        <Lottie options={defaultOptions} />
      </div>
    </>
  );
};
