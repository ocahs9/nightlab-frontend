import { useEffect } from "react";
//맨 위로 스크롤 시작 
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <></>;
}

export default App;
