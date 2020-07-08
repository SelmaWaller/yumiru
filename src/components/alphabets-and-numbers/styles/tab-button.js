import styled from "styled-components";

const TabButton = styled.button`
  min-width: 70px;
  max-width: 70px;
  min-height: 70px;
  max-height: 70px;
  position: relative;
  margin: 0 5px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  outline: 0px;
  transition: 150ms;
  font-family: "Noto Sans JP", sans-serif;
  box-shadow: ${(props) => props.theme.transparentButtonShadow};
  color: ${(props) => props.theme.globalText};
  background: ${(props) => props.theme.globalBackground};
  text-transform: uppercase;
  font-size: 14px;

  span {
    transition: 250ms;
  }
  &:hover {
    transition: 150ms;
    box-shadow: ${(props) => props.theme.transparentButtonShadowHover};
  }
  &:disabled {
    transition: 150ms;
    cursor: default;
    box-shadow: ${(props) => props.theme.transparentButtonShadowActive};
    &:hover {
      box-shadow: ${(props) => props.theme.transparentButtonShadowActive};
    }
  }
  div {
    transition: 250ms ease-out;
    z-index: 99;
    position: relative;
    top: -30px;
    left: 0;
    span {
      z-index: 99;
      transform: scale(0.3);
      top: 0;
      left: -10px;
      opacity: 0;
      pointer-events: none;
      font-family: "Comfortaa", sans-serif;
      position: absolute;
      border-radius: 3px;
      box-shadow: ${(props) => props.theme.floatShadow};
      padding: 10px 12px 8px;
      background: ${(props) => props.theme.globalBackgroundLight};
    }
  }
  &:hover {
    div {
      span {
        transition-delay: 150ms;
        opacity: 1;
        transform: scale(1);
        top: -55px;
        left: -10px;
      }
    }
  }
`;

export default TabButton;
