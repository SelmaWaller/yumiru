import styled from "styled-components";

const Games = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  background-image: ${(props) => props.theme.gameController};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 290px;
  color: ${(props) => props.theme.globalText};
  position: relative;

  span {
    transition: 100ms;
    position: absolute;
    top: 50px;
    left: 73px;
  }
  span::before {
    content: "ランダムゲーム";
    font-family: "Sawarabi Mincho", serif;
    font-size: 22px;
  }
  &:hover {
    background-image: ${(props) => props.theme.gameControllerHover};
    span::before {
      content: "";
    }
    span::after {
      transition: 100ms;
      content: "RANDOM GAME";
      font-family: "Comfortaa", sans-serif;
      font-size: 18px;
    }
  }
`;
export default Games;
