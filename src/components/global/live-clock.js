import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TimeText = styled.span`
  position: absolute;
  color: ${(props) => props.theme.lightText};
  font-size: 50px;
  writing-mode: vertical-rl;
  top: 155px;
  left: 45px;
  text-shadow: ${(props) => props.theme.lightTextShadow};
  text-align: center;
  user-select: none;
  transition: 150ms;

  p {
    margin: 0;
  }

  span {
    min-height: 54px;
    padding: 2px 0;
    writing-mode: vertical-lr;
    transform: rotate(-90deg);
  }
`;

const Time = () => {
  const [getTime, setGetTime] = useState(new Date());
  const isAm = useState(
    getTime.getHours() >= 0 && getTime.getHours() < 12 ? true : false
  );

  const [displayAmpm] = useState(isAm ? "午前" : "午後");
  const Time = (
    <p>
      {displayAmpm}
      <span>{new Date().getHours().toString().padStart(2, "0")}</span>時
      <span>{new Date().getMinutes().toString().padStart(2, "0")}</span>分
      <span>{new Date().getSeconds().toString().padStart(2, "0")}</span>秒
    </p>
  );

  useEffect(() => {
    let timer = setInterval(() => timeNow(), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const timeNow = () => {
    setGetTime(new Date());
  };

  return (
    <>
      <TimeText>{Time}</TimeText>
    </>
  );
};

export default Time;
