import React, { useEffect, useState } from "react";

import RaisedText from "../styles/raised-text";

const Time = () => {
  const [getTime, setGetTime] = useState(new Date());
  const [isAm, setIsAm] = useState(getTime.getHours() <= 11 ? true : false);

  const [displayAmpm] = useState(isAm ? "午前" : "午後");
  const Time = (
    <p>
      {displayAmpm}
      <span>{(new Date().getHours() % 12).toString().padStart(2, "0")}</span>時
      <span>{new Date().getMinutes().toString().padStart(2, "0")}</span>分
      <span>{new Date().getSeconds().toString().padStart(2, "0")}</span>秒
    </p>
  );

  useEffect(() => {
    setIsAm(getTime.getHours() <= 11 ? true : false);
    let timer = setInterval(() => timeNow(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [getTime]);

  const timeNow = () => {
    setGetTime(new Date());
  };

  return (
    <>
      <RaisedText time>{Time}</RaisedText>
    </>
  );
};

export default Time;
