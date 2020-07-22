import styled from "styled-components";

const GlobalCard = styled.div`
  background: ${(props) => props.theme.globalBackground};
  background-image: ${(props) =>
    props.game ? props.theme.gameTag : props.theme.otherTag};
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 180px;
  box-shadow: ${(props) => props.theme.contentShadow};
  border-radius: 5px;
  margin: 15px;
  min-height: 250px;
  max-width: 100%;
  transition: 200ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    box-shadow: ${(props) => props.theme.contentShadowHover};
    transition: 200ms;
  }
`;
export default GlobalCard;
