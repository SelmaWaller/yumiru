import styled from "styled-components";

const Other = styled.div`
  margin: 125px auto 0;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  background-image: ${(props) => props.theme.popcornImage};
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
    width: 0%;
  }
  span::before {
    content: "ランダムアニメ";
    font-family: "Sawarabi Mincho", serif;
    font-size: 22px;
    width: 100%;
  }
  &:hover {
    background-image: ${(props) => props.theme.popcornImageHover};
    span::before {
      content: "";
      width: 0%;
    }
    span::after {
      transition: 100ms;
      content: "RANDOM ANIME";
      font-family: "Comfortaa", sans-serif;
      font-size: 18px;
      width: 100%;
    }
  }
`;
export default Other;
