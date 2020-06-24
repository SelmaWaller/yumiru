import styled from "styled-components";
import controller from "../../../svgs/controller/controller.svg";

const Games = styled.div`
  margin: -80px auto 0;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  background-image: url(${controller});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 290px;
  color: ${(props) => props.theme.globalText};
  position: relative;
  cursor: pointer;
  
  span {
    transition: 100ms;
    position: absolute;
    top: 0;
    left: 75px;
  }

  span::after {
    font-family: "Comfortaa", sans-serif;
    transition: 200ms;
    content: "";
    opacity: 0;
    font-size: 18px;
  }
  span::before {
    content: "ランダムゲーム";
    font-family: "Sawarabi Mincho", serif;
    font-size: 22px;
    opacity: 1;
    transition: 200ms;
  }
  &:hover {
    transition: 200ms;
    span::before {
      content: "";
      opacity: 0;
      transition: 200ms;
    }
    span::after {
      content: "RANDOM GAME";
      opacity: 1;
      transition: 200ms;
    }
  }
`;
export default Games;
