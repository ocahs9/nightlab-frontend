import * as WR from "./WorkReport.styled";

import { get } from "@apis/index";
import { useEffect, useState } from "react";

import Comparison from "@components/Comparison/Comparison";
import Header from "@components/header/Header";
import MyWorkTime from "@components/MyWorkTime/MyWorkTime";
import WorkPattern from "@components/WorkPattern/WorkPattern";
import FillProgressBar from "@components/FillProgressBar/FillProgressBar";
import { useData } from "../../contexts/WholeContext";

const WorkReport = () => {
  const { setHeader } = useData();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 사용자의 분석 리포트 데이터를 담을 State
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    // 헤더 중 렌더링 할 요소들 결정
    setHeader({
      showLogo: true,
      showLoginButton: true,
      showHamburgerButton: true,
    });

    const fetchData = async () => {
      try {
        // 사용자의 Access Token을 이용해 데이터에 접근
        const token = localStorage.getItem("user");

        const response = get("api/analyze", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userAnalysis = JSON.stringify(response.data);
        setReportData(userAnalysis);

        // // 사용자가 회원가입 시 입력한 닉네임
        // const userName = reportData.user_name;

        // // 순서대로 단과대학 평균, 전체 유저, 로그인된 사용자의 평균 야작 시간
        // const collegeAverage = reportData.college_average;
        // const totalAverage = reportData.total_average;
        // const userAverage = reportData.user_average;

        // // 순서대로 단과대학 평균 시간, 전체 유저의 평균 시간과 비교
        // const collegeComparison = reportData.college_comparison;
        // const totalComparison = reportData.total_comparison;
      } catch (error) {
        console.error("Fail to load user data", error);
        alert("사용자 분석 리포트를 불러오는데 실패했습니다.");
      }
    };

    fetchData();
  }, []);

  // Loading Screen
  // if (!reportData) {
  //   return (
  //     <>
  //       <Header />
  //       <WR.LoadingContainer>
  //         <div className="message">사용자의 리포트를 불러오는중...</div>
  //         <WR.ProgressionBar>
  //           <FillProgressBar duration={5000} />
  //         </WR.ProgressionBar>
  //       </WR.LoadingContainer>
  //     </>
  //   );
  // }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />

      {!isMenuOpen && (
        <>
          <WorkPattern
          // userName={reportData.user_name}
          // collegeComparison={reportData.college_comparison}
          // totalAverage={reportData.total_average}
          />
          <Comparison />
          <MyWorkTime />
        </>
      )}
    </>
  );
};

export default WorkReport;
