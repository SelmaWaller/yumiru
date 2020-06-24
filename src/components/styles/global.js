import styled from "styled-components";

const Global = styled.div`
  min-height: 100vh;
  min-width: 100%;
  padding-top: 145px;
  transition: 250ms ease-out;
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.globalShadow};

  a {
    cursor: default;
  }
`;

export default Global;
