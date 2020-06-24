import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftDate = styled.span`
  position: absolute;
  color: ${(props) => props.theme.lightText};
  font-size: 50px;
  writing-mode: vertical-rl;
  top: 155px;
  right: 45px;
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

const Today = () => {
  const year = new Date().getFullYear().toString().substr(-2).padStart(2, "0");
  const month = new Date().getMonth().toString().padStart(2, "0");
  const day = new Date().getDate().toString().padStart(2, "0");

  return (
    <>
      <Link to="calendar">
        <LeftDate>
          <p>
            <span>{year}</span>年<span>{month}</span>月<span>{day}</span>日
          </p>
        </LeftDate>
      </Link>
    </>
  );
};

export default Today;
