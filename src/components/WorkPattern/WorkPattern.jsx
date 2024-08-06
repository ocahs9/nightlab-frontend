import { useEffect, useState } from "react";
import * as WP from "./WorkPattern.styled";

const WorkPattern = ({ reportData }) => {
  const { user_name, college_comparison, user_average } = reportData;

  const userAverageString = user_average.split(":")[0];
  const userAverage = parseInt(userAverageString, 10);

  const collegeComparison = Math.abs(college_comparison);

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
      <WP.Pattern>
        <h3 className="title">작업 패턴 분석 리포트</h3>
        <p className="description">
          {user_name}님이 일주일 동안 작업 등대에 머무른 시간을 분석했어요
          <br />
          다음 주에는 밤을 밝히는 시간이 줄어들길 바라요
        </p>

        <WP.CardContainer>
          <WP.Card>
            <p className="text">같은 전공 사람들보다</p>
            <p className="time">{collegeComparison}시간</p>
            <p className="text">더 {moreOrLess} 작업했어요</p>
          </WP.Card>
          <WP.Card>
            <p className="text">하루 평균</p>
            <p className="time">{userAverage}시간</p>
            <p className="text">작업했어요</p>
          </WP.Card>
        </WP.CardContainer>
      </WP.Pattern>
    </>
  );
};

export default WorkPattern;
