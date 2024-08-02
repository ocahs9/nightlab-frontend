import { useEffect, useState } from "react";
import { StyleSheetManager } from "styled-components";
import * as UT from "./UserType.styled";

import userGraphic from "../../assets/DummyUserGraphic.svg";

const UserType = () => {
  const [selected, setSelected] = useState("전체 유저");
  const [data, setData] = useState([]);

  // const [time, setTime] = useState(formatTimeTo12Hour(new Date()));

  // const updateIntervalMinutes = 10;
  // const updateIntervalms = updateIntervalMinutes * 60000;

  useEffect(() => {
    const interValid = setInterval(() => {
      const now = new Date();

      const newDataPoint = {
        time: formatTimeTo12Hour(now),
      };

      setData((prevData) => [...prevData, newDataPoint].slice(-6));
    }, 1000);

    return () => clearInterval(interValid);
  }, []);

  const handleAll = () => {
    setSelected("전체 유저");
  };

  const handleMajor = () => {
    setSelected("같은 전공 유저");
  };

  return (
    <>
      <UT.Container>
        <UT.OptionBar>
          <UT.Option selected={selected === "전체 유저"} onClick={handleAll}>
            전체유저
          </UT.Option>
          <UT.Option
            selected={selected === "같은 전공 유저"}
            onClick={handleMajor}
          >
            같은 전공 유저
          </UT.Option>
        </UT.OptionBar>

        <UT.Graphic>
          {selected === "전체 유저" ? (
            // <img src={userGraphic} alt="userGraphic" className="graphic" />
            <UT.GraphicContainer>
              <UT.UserCount></UT.UserCount>
              <UT.TimeContainer></UT.TimeContainer>
            </UT.GraphicContainer>
          ) : (
            <UT.OverlayContainer>
              <img
                src={userGraphic}
                alt="userGraphic"
                className="graphic-blur"
              />
              <UT.Overlay>
                <p className="text">
                  로그인해야
                  <br />
                  이용할 수 있어요.
                </p>
              </UT.Overlay>
            </UT.OverlayContainer>
          )}
        </UT.Graphic>
      </UT.Container>
    </>
  );
};

export default UserType;
