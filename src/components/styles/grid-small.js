import styled from "styled-components";

const GridSmall = styled.div`
  display: grid;
  background: ${(props) => props.theme.globalBackground};
  margin: 0 auto;
  padding: 25px 130px 0;
  max-width: 500px;
  grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  transition: 150ms;
  table {
    &:nth-child(1) {
      border-right: none;
    }
    &:nth-child(1) {
      color: ${(props) => props.theme.globalText}a9;
    }
  }
  ul {
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText}a9;
    list-style: none;
    li {
      max-width: 250px;
      span {
        font-weight: bold;
      }
    }
  }
  sup {
    font-weight: bold;
  }
`;

export default GridSmall;
