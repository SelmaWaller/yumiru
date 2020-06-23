import styled from "styled-components";

const ModeButton = styled.button`
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.modeButtonShadow};
  background-image: ${(props) => props.theme.modeButtonImage};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 87px;
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 100px;
  right: 40px;
  top: 30px;
  position: absolute;
  cursor: pointer;
  outline: 0px;
  transition: 300ms;
  transition-delay: ${(props) => props.theme.transitionDelay};

  &:hover {
    transition-delay: 300ms;
    transition: 200ms ease-out;
    background-image: ${(props) => props.theme.modeButtonImageHover};
  }
`;

export default ModeButton;
// inner shadow change on hover
// switch icons on hover
