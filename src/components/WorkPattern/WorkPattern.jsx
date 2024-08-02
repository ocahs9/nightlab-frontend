import * as WP from "./WorkPattern.styled";

const WorkPattern = ({ userName, collegeComparison, totalAverage }) => {
  return (
    <>
      <WP.Pattern>
        <h3 className="title">작업 패턴 분석 리포트</h3>
        <p className="description">
          {userName}님이 일주일 동안 작업 등대에 머무른 시간을 분석했어요
          <br />
          다음 주에는 밤을 밝히는 시간이 줄어들길 바라요
        </p>

        <WP.CardContainer>
          <WP.Card>
            <p className="text">같은 전공 사람들보다</p>
            <p className="time">{collegeComparison}</p>
            <p className="text">더 작업했어요</p>
          </WP.Card>
          <WP.Card>
            <p className="text">하루 평균</p>
            <p className="time">{totalAverage}</p>
            <p className="text">작업했어요</p>
          </WP.Card>
        </WP.CardContainer>
      </WP.Pattern>
    </>
  );
};

export default WorkPattern;
