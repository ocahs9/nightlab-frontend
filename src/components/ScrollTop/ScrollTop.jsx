import * as ST from "./ScrollTop.styled";
import topArrow from "@assets/svgs/topArrow.svg";

const ScrollTop = () => {
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <ST.Container>
        <ST.TopButton onClick={ScrollToTop}>
          {/* <p className="text">Top</p> */}
          <img src={topArrow} alt="topArrow" className="top-arrow" />
        </ST.TopButton>
      </ST.Container>
    </>
  );
};

export default ScrollTop;
