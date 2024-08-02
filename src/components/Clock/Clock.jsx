import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // CleanUp 함수
    return () => clearInterval(timer);
  }, []);

  const padZero = (num) => {
    return num.toString().padStart(2, "0");
  };

  // console.log(time.getHours() % 12);

  const hour = padZero(time.getHours());
  const minutes = padZero(time.getMinutes());
  const seconds = padZero(time.getSeconds());

  const timeString = `${hour}:${minutes}:${seconds}`;

  return <>{timeString}</>;
};

export default Clock;