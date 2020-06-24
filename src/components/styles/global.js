import styled from "styled-components";

const Global = styled.div`
  min-height: 100vh;
  min-width: 100%;
  transition: 250ms ease-out;
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.globalShadow};
`;

export default Global;
