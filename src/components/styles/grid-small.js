import styled from 'styled-components';

const GridSmall = styled.div`
  display: grid;
  background: ${(props) => props.theme.globalBackground};
  margin: 0 auto;
  padding: 25px 130px 70px;
  max-width: 1140px;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  transition: 150ms;
  @media (max-width: 950px) {
    padding: 0;
    transform: scale(0.8);
    margin: -25px 60px 0;
  }

  @media (max-width: 740px) {
    padding: 0;
    grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
  }

  table {
    &:nth-child(1) {
      border-left: none;
    }
    &:nth-last-child(1) {
      color: ${(props) => props.theme.globalText}a9;
    }
  }
`;

export default GridSmall;
