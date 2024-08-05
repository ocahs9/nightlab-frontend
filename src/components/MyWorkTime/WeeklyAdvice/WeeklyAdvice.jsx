import * as WA from "./WeeklyAdvice.styled";
import ReportImage2 from "../../../assets/svgs/ReportImage2.svg";

const WeeklyAdvice = ({ reportData }) => {
  const { user_name } = reportData;
  return (
    <>
      <WA.Container>
        <h4 className="title">
          {user_name}님을 위한
          <br />
          이주의 한 마디
        </h4>
        <img src={ReportImage2} alt="weeklyStamp" className="stamp" />
        <h4 className="caution">
          잠을 잃으면 건강도 잃습니다.
          <br />
          충분한 휴식과 운동이 필요해요!
        </h4>
      </WA.Container>
    </>
  );
};

export default WeeklyAdvice;
