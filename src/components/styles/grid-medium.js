import styled from "styled-components";

const GridMedium = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1600px;
  padding: 0 130px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  div {
    display: flex;
  }
`;

export default GridMedium;
