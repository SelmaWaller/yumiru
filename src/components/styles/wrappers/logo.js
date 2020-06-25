import styled from "styled-components";

const Logo = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 100px auto 0;
  max-height: 550px;
  position: absolute;
  height: 100%;
  background: ${(props) => props.theme.logo};
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 150ms;
`;

export default Logo;
