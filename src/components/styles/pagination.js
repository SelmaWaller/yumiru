import styled from "styled-components";

const PaginationButton = styled.button`
  margin-bottom: 25px;
  background: none;
  box-shadow: none;
  color: ${(props) => props.theme.globalText};
  font-family: "Comfortaa", sans-serif;
  position: relative;
  min-width: 70px;
  min-height: 25px;
  font-size: 14px;
  outline: 0 transparent;
  border: none;
  background: none;
  cursor: pointer;
  transition: 250ms;

  span {
    transition: 250ms;
  }
  span::after {
    transition: 250ms;
    position: absolute;
    content: "༶";
    font-size: 18px;
    top: -3px;
    bottom: 0;
    right: 86px;
  }
  &:hover {
    transition: 250ms;
    span::before {
      opacity: 1;
    }
    span::after {
      transform: rotate(-90deg);
    }
  }
  &:disabled {
    cursor: default;
    opacity: 0.5;
    span::after {
      transform: rotate(-90deg);
    }
    &:hover {
      span::after {
        transform: rotate(-90deg);
      }
    }
  }
  @media (max-width: 1200px) {
    span::after {
      right: 60px;
    }
  }
`;

export default PaginationButton;
