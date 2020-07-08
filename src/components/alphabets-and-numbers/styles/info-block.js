import styled from "styled-components";

import GridMedium from "../../styles/grid-medium";

const InfoBlock = styled(GridMedium)`
  max-width: 1200px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  border-bottom: ${(props) => props.theme.alphabetLine};
  &:nth-last-child(1) {
    border: none;
  }
  ul {
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText}a9;
    padding-bottom: 20px;
    li {
      line-height: 26px;
      max-width: 250px;
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
