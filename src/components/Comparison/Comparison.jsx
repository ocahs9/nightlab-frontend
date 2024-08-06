import * as CP from "./Comparison.styled";

import reportImage from "../../assets/svgs/ReportImage1.svg";
import { useState, useEffect } from "react";

const Comparison = ({ reportData }) => {
  const {
    user_name,
    college,
    college_average,
    user_average,
    college_comparison,
  } = reportData;

  const changeTimeFormat = (time) => {
    const HoursString = time.split(":")[0];
    const Hours = parseInt(HoursString, 10);
    const MinutesString = time.split(":")[0];
    const Minutes = parseInt(MinutesString, 10);

    return `${Hours}시간 ${Minutes}분`;
  };

  const collegeComparison = Math.abs(college_comparison);
  const collegeAverage = changeTimeFormat(college_average);
  const userAverage = changeTimeFormat(user_average);

  const [moreOrLess, setMoreOrLess] = useState();

  useEffect(() => {
    if (college_comparison >= 0 && moreOrLess !== "많이") {
      setMoreOrLess("많이");
    } else if (college_comparison < 0 && moreOrLess !== "적게") {
      setMoreOrLess("적게");
    }
  }, [college_comparison, moreOrLess]);

  return (
    <>
      <CP.Container>
        <h3 className="title">전공 대비 분석</h3>
        <CP.User>
          <img src={reportImage} alt="dummyUser" className="profile" />
          <CP.UserData>
            <p>
              {college} 평균 야작 시간
              <br />
              <span>{collegeAverage}</span>
            </p>
            <p>
              {user_name}님의 평균 야작 시간
              <br />
              <span>{userAverage}</span>
            </p>
            <p>
              같은 전공 대비
              <br />
              <span>
                {collegeComparison}시간 더 {moreOrLess}
              </span>{" "}
              작업했어요
            </p>
          </CP.UserData>
        </CP.User>
      </CP.Container>
    </>
  );
};

export default Comparison;
