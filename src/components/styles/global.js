import styled from "styled-components";

const Global = styled.div`
  min-height: 100vh;
  min-width: 100%;
  transition: 150ms;
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.globalShadow};

  a {
    text-decoration: none;
  }
  button:disabled {
    cursor: default;
  }
`;

export default Global;
