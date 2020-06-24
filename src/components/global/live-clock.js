import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RightClock = styled.span`
  position: absolute;
  color: ${(props) => props.theme.lightText};
  font-size: 50px;
  writing-mode: vertical-rl;
  top: 155px;
  left: 45px;
  text-shadow: ${(props) => props.theme.lightTextShadow};
  text-align: center;
  user-select: none;
  transition: 250ms;

  p {
    margin: 0;
  }

  span {
    min-height: 54px;
    padding: 2px 0;
    writing-mode: vertical-lr;
    transform: rotate(-90deg);
  }

  &:hover {
    color: ${(props) => props.theme.lightTextHover};
    text-shadow: ${(props) => props.theme.lightTextShadowHover};
  }
`;

const Clock = () => {
  const [timeNow, setTimeNow] = useState(new Date());
  const isAm = useState(
    timeNow.getHours() >= 0 && timeNow.getHours() < 12 ? true : false
  );

  const [displayAmpm] = useState(isAm ? "午前" : "午後");
  const Clock = (
    <p>
      {displayAmpm}
      <span>{new Date().getHours().toString().padStart(2, "0")}</span>時
      <span>{new Date().getMinutes().toString().padStart(2, "0")}</span>分
      <span>{new Date().getSeconds().toString().padStart(2, "0")}</span>秒
    </p>
  );

  useEffect(() => {
    let timer = setInterval(() => liveClock(), 1000);

    return () => {
      clearInterval(timer);
    };
  });

  const liveClock = () => {
    setTimeNow(new Date());
  };

  return (
    <>
      <Link to="calendar">
        <RightClock>{Clock}</RightClock>
      </Link>
    </>
  );
};

export default Clock;
