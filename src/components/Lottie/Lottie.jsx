import Lottie from "lottie-react";

import lightHouse from "../../animations/main_final.json";
import timerGraphic from "../../animations/timer_final.json";

export const LightHouseGraphic = () => {
  return (
    <div
      style={{
        width: "264px",
        height: "434px",
      }}
    >
      <Lottie
        animationData={lightHouse}
        loop={true}
        autoplay={true}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export const EnterTimerGraphic = () => {
  return (
    <div
      style={{
        width: "360px",
        height: "317px",
        margin: "16px auto 24px",
      }}
    >
      <Lottie
        animationData={timerGraphic}
        loop={true}
        autoplay={true}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};
