import styled from "styled-components";

import GridMedium from "../../styles/grid-medium";

const InfoBlock = styled(GridMedium)`
  max-width: 1200px;
  grid-template-columns: ${(props) =>
    props.small
      ? "repeat(auto-fit, minmax(150px, 1fr))"
      : "repeat(auto-fit, minmax(250px, 1fr))"};
  border-bottom: ${(props) => props.theme.alphabetLine};
  transition: 250ms;
  font-size: 16px;
  &:nth-last-child(1) {
    border: none;
  }
  ul {
    transition: 150ms;
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText}a9;
    padding-bottom: 20px;
    li {
      transition: 250ms;
      line-height: 26px;
      max-width: 100%;
      margin: 0 10px;
      padding: 5px 0;
      span {
        font-weight: bold;
      }
      &:nth-child(1) {
        list-style: none;
      }
    }
  }
  &:nth-last-child(1) {
    ul {
      padding-bottom: 50px;
    }
  }
`;

export default InfoBlock;
