import styled from "styled-components";

const DefaultButton = styled.button`
  background: ${(props) => props.theme.mainButtonDefault};
  border: none;
  border-radius: 100px;
  padding: 15px 40px;
  min-height: 63px;
  min-width: 235px;
  box-shadow: ${(props) => props.theme.mainButtonShadow};
  cursor: pointer;
  transition: 200ms;
  color: #ffffff;
  outline: 0px transparent;

  span {
    transition: 100ms;
  }
  span::before {
    content: "ダッシュボード";
    font-family: "Sawarabi Mincho", serif;
    font-size: 22px;
  }
  &:hover {
    box-shadow: ${(props) => props.theme.mainButtonShadowHover};
    transform: translateY(-2px);
    transition: 200ms;
    span::before {
      content: "";
    }
    span::after {
      transition: 100ms;
      content: "DASHBOARD";
      font-family: "Comfortaa", sans-serif;
      font-size: 18px;
    }
  }
`;

export default DefaultButton;
