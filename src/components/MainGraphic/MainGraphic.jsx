import { LightHouseGraphic } from "@components/Lottie/Lottie";
import * as MG from "./MainGraphic.styled";

const MainGraphic = () => {
  return (
    <>
      <MG.Container>
        <LightHouseGraphic />
        <MG.Slogan>나의 야작메이트, Night Lab</MG.Slogan>
      </MG.Container>
    </>
  );
};

export default MainGraphic;
