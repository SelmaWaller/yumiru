import styled from "styled-components";

const GridSmall = styled.div`
  display: grid;
  background: ${(props) => props.theme.globalBackground};
  margin: 0 auto;
  padding: 0 130px;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));

  table {
    box-shadow: ${(props) => props.theme.contentShadowHover};
  }
`;

export default GridSmall;
