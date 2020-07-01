import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) =>
    props.secondary ? props.theme.buttonSecondary : props.theme.buttonDefault};
  border: none;
  border-radius: 100px;
  padding: 15px 40px;
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
    font-family: 'Comfortaa', sans-serif;
    transition: 300ms;
    opacity: 0;
    font-size: 18px;
    position: absolute;
    top: 23px;
  }
  span::before {
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 21px;
    position: absolute;
    top: 16px;
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
      top: 23px;
      transition: 300ms;
    }
    img {
      transition: 300ms;
    }
  }

  &:active {
    span::before {
      opacity: 0;
    }
    span::after {
      left: 88px;
      opacity: 1;
    }
    &:active {
      transform: translateY(5px);
      box-shadow: ${(props) =>
        props.secondary
          ? props.theme.buttonSecondaryShadowActive
          : props.theme.buttonShadowActive};
      span::after,
      img {
        transform: translateY(5px);
      }
    }
  }
`;

export default Button;
