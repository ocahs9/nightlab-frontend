import * as FPB from "./FillProgressBar.styled";

import { useEffect, useState } from "react";

const FillProgressBar = ({ duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prevProgress + 1;
      }, duration / 100);
    });

    return () => clearInterval(interval);
  }, [duration]);

  return <FPB.Fill style={{ width: `${progress}%` }}></FPB.Fill>;
};

export default FillProgressBar;
