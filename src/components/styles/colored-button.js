import styled, { keyframes } from "styled-components";

const activeButton = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Button = styled.button`
  background: ${(props) =>
    props.secondary ? props.theme.buttonSecondary : props.theme.buttonDefault};
  border: none;
  border-radius: 100px;
  min-height: 63px;
  min-width: 235px;
  box-shadow: ${(props) =>
    props.secondary
      ? props.theme.buttonShadowSecondary
      : props.theme.buttonShadow};
  cursor: pointer;
  transition: 300ms;
  color: #ffffff;
  outline: 0px transparent;
  position: relative;
  text-align: left;
  transition: 150ms;
  top: -10px;

  img {
    width: 23px;
    top: 20px;
    position: absolute;
    transition: 300ms;
  }

  span::after {
    font-family: "Comfortaa", sans-serif;
    transition: 300ms;
    opacity: 0;
    font-size: 18px;
    position: absolute;
    top: 24px;
  }
  span::before {
    font-family: "Noto Sans JP", sans-serif;
    font-size: 22px;
    position: absolute;
    top: 14px;
    opacity: 1;
    transition: 300ms;
  }
  &:hover {
    transition: 300ms;
    span::before {
      opacity: 0;
      transition: 300ms;
    }
    span::after {
      opacity: 1;
      transition: 300ms;
    }
    img {
      transition: 300ms;
    }
  }

  &:active {
    animation: ${activeButton} 500ms;
    span::before {
      opacity: 0;
    }
    span::after {
      left: 88px;
      opacity: 1;
    }
    span::after,
    img {
      animation: ${activeButton} 500ms;
    }
  }
  &:disabled {
    animation: ${activeButton} 500ms;
    span::after,
    span::before {
      animation: ${activeButton} 500ms;
    }
    &:active {
      box-shadow: ${(props) =>
        props.secondary
          ? props.theme.buttonShadowSecondary
          : props.theme.buttonShadow};
    }
  }
`;

export default Button;
