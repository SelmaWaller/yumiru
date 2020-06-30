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
    margin-top: -20px;
  }

  table:nth-last-child(1) {
    border-right: none;
    background: ${(props) => props.theme.alphabetFade};
    background-size: 100% 800px;
    background-position: center top;
    color: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default GridSmall;
