import styled from "styled-components";

const Global = styled.div`
  min-height: 84.7vh;
  min-width: 100%;
  padding-top: 145px;
  transition: 150ms;
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.globalShadow};

  a {
    cursor: default;
  }
`;

export default Global;
