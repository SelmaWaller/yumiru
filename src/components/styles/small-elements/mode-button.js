import styled from "styled-components";

const ModeButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.topButtonShadowHover};
  background-image: ${(props) => props.theme.modeButtonImage};
  background-position: -34px 8px;
  background-repeat: no-repeat;
  background-size: 170px;
  border: none;
  border-radius: 100px;
  top: 25px;
  right: 25px;
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 50ms;
`;

export default ModeButton;
