import styled from "styled-components";

const Card = styled.table`
  max-width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  text-align: center;
  font-family: "Monsterrat", sans-serif;
  color: ${(props) => props.theme.globalText};
  th,
  td {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 80px;
    transition: 200ms;
    transition: 150ms;
    font-size: 22px;
    font-weight: normal;
  }
`;
export default Card;
