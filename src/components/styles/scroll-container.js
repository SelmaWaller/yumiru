import styled from "styled-components";

const ScrollContainer = styled.div`
  max-width: 1300px;
  min-width: 300px;
  max-height: 510px;
  overflow: scroll;
  direction: rtl;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-transition: 150ms;
    transition: 150ms;
    border-radius: 100px;
    background: ${(props) => props.theme.globalScroll};
    &:hover {
      -webkit-transition: 150ms;
      transition: 150ms;
      background: ${(props) => props.theme.globalScrollHover};
    }
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-resizer {
    background: transparent;
    border: none;
  }
`;

export default ScrollContainer;
