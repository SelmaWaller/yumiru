import styled from "styled-components";

const RaisedText = styled.span`
  position: absolute;
  color: ${(props) => props.theme.shadowText};
  font-size: ${(props) => (props.title ? "70px" : "50px")};
  writing-mode: ${(props) => (props.title ? "horizontal-tb" : "vertical-rl")};
  top: ${(props) => (props.title ? "32px" : "155px")};
  right: ${(props) => (props.time ? "40px" : "unset")};
  left: ${(props) =>
    props.title ? props.theme.title : props.time ? "unset" : "40px"};
  text-shadow: ${(props) =>
    props.title ? props.theme.titleShadow : props.theme.lightTextShadow};
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

export default RaisedText;
