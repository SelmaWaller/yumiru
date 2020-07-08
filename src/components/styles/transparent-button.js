import styled from "styled-components";

const TransparentButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  color: ${(props) => props.theme.globalText};
  box-shadow: ${(props) =>
    props.home
      ? props.theme.transparentButtonShadow
      : props.theme.transparentButtonShadowActive};
  background-image: ${(props) =>
    props.home ? props.theme.homeButtonImage : props.theme.modeButtonImage};
  background-position: ${(props) => (props.home ? "-20px 2px" : "-37px 10px")};
  background-repeat: no-repeat;
  background-size: ${(props) => (props.home ? "135px" : "175px")};
  border: none;
  border-radius: 100px;
  top: 25px;
  left: ${(props) => (props.home ? "20px" : "unset")};
  right: ${(props) => (props.home ? "unset" : "20px")};
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
  max-height: 100px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 150ms;
  font-family: "Noto Sans JP", sans-serif;

  &:hover {
    box-shadow: ${(props) => props.theme.transparentButtonShadowActive};
  }
`;

export default TransparentButton;
