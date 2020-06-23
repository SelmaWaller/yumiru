import styled from "styled-components";

const Global = styled.div`
  min-height: ${(props) => props.theme.globalShrinkHeight};
  min-width: ${(props) => props.theme.globalShrinkWidth};
  right: 0;
  bottom: 0;
  transition: 400ms;
  background: ${(props) => props.theme.globalBackground};
`;

export default Global;
