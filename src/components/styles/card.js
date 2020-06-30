import styled from 'styled-components';

const Card = styled.table`
  max-width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  text-align: center;
  font-family: 'Monsterrat', sans-serif;
  color: ${(props) => props.theme.globalText};
  background: ${(props) => props.theme.globalBackground};
  box-shadow: ${(props) => props.theme.alphabetShadow};
  border-right: ${(props) => props.theme.alphabetLine};
  transition: 150ms;
  th,
  td {
    margin: 0;
    padding: 0;
    height: 80px;
    font-size: 22px;
    font-weight: normal;
    transition: 250ms;
  }
  th {
    color: ${(props) => props.theme.globalText}a9;
  }
  span {
    display: block;
    font-size: 16px;
    opacity: 0.7;
    padding-top: 2px;
  }
`;
export default Card;
