import styled from "styled-components";

const TransparentText = styled.span`
  position: absolute;
  color: ${(props) => props.theme.shadowText};
  font-size: ${(props) => (props.titleText ? "70px" : "50px")};
  writing-mode: ${(props) =>
    props.titleText ? "horizontal-tb" : "vertical-rl"};
  top: ${(props) => (props.titleText ? "32px" : "155px")};
  right: ${(props) => (props.time ? "40px" : "unset")};
  left: ${(props) =>
    props.titleText ? props.theme.titleText : props.time ? "unset" : "40px"};
  text-shadow: ${(props) =>
    props.titleText ? props.theme.titleShadow : props.theme.lightTextShadow};
  text-align: center;
  user-select: none;
  transition: 150ms;
  font-weight: 200;
  font-family: "Cardo", sans-serif;
  p {
    margin: 0;
  }

  span {
    min-height: 54px;
    padding: 2px 0;
    writing-mode: vertical-lr;
    transform: rotate(-90deg);
  }
`;

export default TransparentText;
