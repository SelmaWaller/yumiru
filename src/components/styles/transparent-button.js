import styled from "styled-components";

const TransparentButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) =>
    props.home
      ? props.theme.transparentButtonShadow
      : props.theme.transparentButtonShadowHover};
  background-image: ${(props) =>
    props.home ? props.theme.homeButtonImage : props.theme.modeButtonImage};
  background-position: ${(props) => (props.home ? "center 3px" : "-34px 8px")};
  background-repeat: no-repeat;
  background-size: ${(props) => (props.home ? "90px" : "170px")};
  border: none;
  border-radius: 100px;
  top: 25px;
  left: ${(props) => (props.home ? "20px" : "unset")};
  right: ${(props) => (props.home ? "unset" : "20px")};
  width: 100px;
  height: 100px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 150ms;
  @media (max-width: 660px) {
    width: 60px;
    height: 60px;
    background-size: ${(props) => (props.home ? "50px" : "112px")};
    background-position: ${(props) =>
      props.home ? "center 7px" : "-26px 2px"};
    left: ${(props) => (props.home ? "10px" : "unset")};
    right: ${(props) => (props.home ? "unset" : "10px")};
  }

  &:hover {
    box-shadow: ${(props) => props.theme.transparentButtonShadowHover};
  }
`;

export default TransparentButton;
