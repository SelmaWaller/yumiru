import styled from "styled-components";

const HomeButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.topButtonShadow};
  background-image: ${(props) => props.theme.homeButtonImage};
  background-position: center 24px;
  background-repeat: no-repeat;
  background-size: 100px;
  border: none;
  border-radius: 100px;
  top: 25px;
  left: 25px;
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 150ms;

  &:hover {
    box-shadow: ${(props) => props.theme.topButtonShadowHover};
  }
`;

export default HomeButton;
