import styled from "styled-components";

const HomeButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.topButtonShadow};
  background-image: ${(props) => props.theme.homeButtonImage};
  background-position: 9px 3px;
  background-repeat: no-repeat;
  background-size: ${(props) => props.theme.homeButtonImageWidth};
  border: none;
  border-radius: 100px;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 50ms;
`;

export default HomeButton;