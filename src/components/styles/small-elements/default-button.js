import styled from "styled-components";
import overview from "../../../svgs/icons/overview/overview.svg";

const DefaultButton = styled.button`
  background: ${(props) => props.theme.mainButtonDefault};
  border: none;
  border-radius: 100px;
  padding: 15px 40px;
  min-height: 63px;
  min-width: 235px;
  box-shadow: ${(props) => props.theme.mainButtonShadow};
  cursor: pointer;
  transition: 300ms;
  color: #ffffff;
  outline: 0px transparent;
  position: relative;
  text-align: left;
  transition: 150ms;

  img {
    position: absolute;
    width: 25px;
    margin-top: 1px;
    right: 70px;
  }

  span::after {
    font-family: "Comfortaa", sans-serif;
    transition: 300ms;
    content: "OVERVIEW";
    opacity: 0;
    font-size: 18px;
    position: absolute;
    top: 23px;
    left: 70px;
  }
  span::before {
    content: "概要";
    font-family: "Sawarabi Mincho", serif;
    font-size: 22px;
    position: absolute;
    top: 15px;
    left: 70px;
    opacity: 1;
    transition: 300ms;
  }
  &:hover {
    transition: 300ms;
    span::before {
      opacity: 0;
      left: 120px;
      transition: 300ms;
    }
    span::after {
      opacity: 1;
      top: 23px;
      left: 92px;
      transition: 300ms;
    }
    div {
      right: 132px;
      transition: 300ms;
    }
  }

  div {
    width: 50px;
    height: 50px;
    background: url(${overview});
    background-repeat: no-repeat;
    background-size: 23px;
    top: 20px;
    right: 50px;
    position: absolute;
    transition: 300ms;
  }
`;

export default DefaultButton;
