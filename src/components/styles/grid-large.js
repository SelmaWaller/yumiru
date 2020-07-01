import styled from 'styled-components';

const GridLarge = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1600px;
  padding: 0 130px;
  grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
`;

export default GridLarge;
