import * as CP from "./Comparison.styled";
import reportImage from "../../assets/svgs/ReportImage1.svg";

const Comparison = () => {
  return (
    <>
      <CP.Container>
        <h3 className="title">전공 대비 분석</h3>
        <CP.User>
          <img src={reportImage} alt="dummyUser" className="profile" />
          <CP.UserData>
            <p>
              공과대학 평균 야작 시간
              <br />
              <span>4시간 27분</span>
            </p>
            <p>
              철흥님의 평균 야작 시간
              <br />
              <span>6시간 31분</span>
            </p>
            <p>
              같은 전공 대비
              <br />
              <span>2시간 더 많이</span> 작업했어요.
            </p>
          </CP.UserData>
        </CP.User>
      </CP.Container>
    </>
  );
};

export default Comparison;