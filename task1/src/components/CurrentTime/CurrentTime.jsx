import React, { useState, useEffect } from "react";

const CurrentTime = () => {
  const getCurrentTime = () => {
    const d = new Date();
    return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  };

  const [currenttime, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>Time</h1>
      <p>{currenttime}</p>
    </>
  );
};

export default CurrentTime;