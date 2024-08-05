import { useEffect, useState } from "react";
import * as MWT from "./MyWorkTime.styled";
import WeeklyAdvice from "./WeeklyAdvice/WeeklyAdvice";

const MyWorkTime = ({ reportData }) => {
  const { user_name, profile, total_average, user_average, total_comparison } =
    reportData;

  const totalComparison = Math.abs(total_comparison);

  const [moreOrLess, setMoreOrLess] = useState();

  useEffect(() => {
    if (total_comparison >= 0 && moreOrLess !== "많이") {
      setMoreOrLess("많이");
    } else if (total_comparison < 0 && moreOrLess !== "적게") {
      setMoreOrLess("적게");
    }
  }, [total_comparison, moreOrLess]);

  return (
    <>
      <MWT.Container>
        <h3 className="title">나의 작업 시간 분석</h3>
        <MWT.User>
          <img src={`/${profile}.svg`} alt="My-Character" className="profile" />
          <MWT.UserData>
            <p>
              {user_name}님의 평균 야작 시간
              <br />
              <span>{user_average}</span>
            </p>
            <p>
              전체 유저의 평균 야작 시간
              <br />
              <span>{total_average}</span>
            </p>
            <p>
              전체 유저 대비
              <br />
              <span>
                {totalComparison}시간 더 {moreOrLess}
              </span>{" "}
              작업했어요
            </p>
          </MWT.UserData>
        </MWT.User>
      </MWT.Container>
      <WeeklyAdvice reportData={reportData} />
    </>
  );
};

export default MyWorkTime;
