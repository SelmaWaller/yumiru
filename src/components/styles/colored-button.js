import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.buttonDefault};
  border: none;
  border-radius: 100px;
  padding: 15px 40px;
  min-height: 63px;
  min-width: 235px;
  box-shadow: ${(props) => props.theme.buttonShadow};
  cursor: pointer;
  transition: 300ms;
  color: #ffffff;
  outline: 0px transparent;
  position: relative;
  text-align: left;
  transition: 150ms;
  @media (max-width: 660px) {
    transform: scale(0.6);
    top: -70px;
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
    font-family: 'Sawarabi Mincho', serif;
    font-size: 22px;
    position: absolute;
    top: 15px;
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

  img {
    width: 23px;
    top: 20px;
    position: absolute;
    transition: 300ms;
  }
`;

export default Button;
