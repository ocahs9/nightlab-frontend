import { LightHouseGraphic } from "@components/Lottie/Lottie";
import subLogo from "../../assets/subLogo.svg";
import * as MG from "./MainGraphic.styled";

const MainGraphic = () => {
  return (
    <>
      <MG.Container>
        <LightHouseGraphic />
        <MG.Slogan>
          나의 야작메이트, <img src={subLogo} alt="subLogo" className="logo" />
        </MG.Slogan>
      </MG.Container>
    </>
  );
};

export default MainGraphic;
