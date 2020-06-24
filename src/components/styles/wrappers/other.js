import styled from "styled-components";
import popcorn from "../../../svgs/popcorn/popcorn.svg";

const Other = styled.div`
  margin: 125px auto 0;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  background-image: url(${popcorn});
  background-repeat: no-repeat;
  background-position: -10px center;
  background-size: 300px;
  color: ${(props) => props.theme.globalText};
  position: relative;

  span {
    transition: 100ms;
    position: absolute;
    bottom: 15px;
    left: 70px;
  }

  span::after {
    font-family: "Comfortaa", sans-serif;
    transition: 200ms;
    content: "";
    opacity: 0;
    font-size: 18px;
  }
  span::before {
    content: "ランダムアニメ";
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
      content: "RANDOM ANIME";
      opacity: 1;
      transition: 200ms;
    }
  }
`;
export default Other;
