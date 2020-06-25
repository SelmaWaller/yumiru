import styled from "styled-components";

const Logo = styled.div`
  width: 100%;
  max-width: 700px;
  margin: -115px auto 150px;
  bottom: -420px;
  position: absolute;
  height: 100%;
  background: ${(props) => props.theme.logo};
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 250ms;
`;

export default Logo;
