import styled from "styled-components";

const Titles = styled.div`
  margin-top: 20px;
  z-index: 999;
  div:nth-child(1) {
    position: relative;
    p {
      text-align: center;
      transition-delay: 50ms;
      margin-top: 0px;
      margin-bottom: 0;
      font-size: 18px;
      transition: 150ms ease-out;
      color: ${(props) => props.theme.globalText};
      font-family: "Comfortaa", sans-serif;
      span {
        font-family: "Noto Sans JP", sans-serif;
        transform: translateX(0);
        position: absolute;
        right: 0;
        left: 0;
        top: -10px;
        color: ${(props) => props.theme.globalText}00;
        pointer-events: none;
        position: absolute;
        padding: 10px 12px 8px;
      }
      &:nth-child(2) {
        margin-bottom: 10px;
        font-size: 20px;
        font-family: "Noto Sans JP", sans-serif;
      }
    }
    &:hover {
      p:nth-child(2) {
        transform: translateX(0);
        color: ${(props) => props.theme.globalText}00;
      }
      span {
        transition-delay: 50ms;
        transform: translateX(0);
        color: ${(props) => props.theme.globalText};
      }
    }
  }

  .Collapsible {
    font-weight: bold;
    margin: 10px 0;
    display: block;
    text-align: center;
    &__trigger {
      cursor: pointer;
      transition: 100ms;
      transition-delay: 100ms;
      margin-left: -22px;
      position: relative;
      font-family: "Comfortaa", sans-serif;
      color: ${(props) => props.theme.globalText};
      &:hover {
        transition: 100ms;
        color: ${(props) => props.theme.globalText}9c;
      }
    }

    .is-closed::after {
      content: "\\276F";
      position: absolute;
      margin-left: 10px;
      top: -2px;
      transform: rotate(90deg);
      transition: 200ms ease;
    }

    .is-open::after {
      content: "\\276F";
      position: absolute;
      margin-left: 10px;
      transform: rotate(270deg);
      transition: 200ms ease;
    }

    &__contentOuter {
      margin: 5px 10px 0;
    }

    table {
      overflow: auto;
      width: 100%;
      box-shadow: ${(props) => props.theme.contentShadowHover};
      background: ${(props) => props.theme.globalBackground}f2;
      padding: 10px 20px;
      font-family: "Comfortaa", sans-serif;
      font-size: 15px;
      text-transform: uppercase;
      display: inline-block;
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
      tr {
        border-bottom: 1px solid grey;
      }
      td {
        min-width: 120px;
        text-align: left;
        line-height: 30px;
        &:nth-child(2) {
          font-size: 22px;
          font-weight: normal;
        }
        span {
          font-weight: bold;
          color: ${(props) => props.theme.shadowText}bb;
        }
      }
      &:hover span {
        color: ${(props) => props.theme.shadowText}bb;
      }
    }
  }
`;

export default Titles;
