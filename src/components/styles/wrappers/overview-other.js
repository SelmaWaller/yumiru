import styled from "styled-components";
const OverviewCard = styled.div`
  background: ${(props) => props.theme.globalBackground};
  background-image: ${props => props.theme.otherTag};
  background-position: right top;
  background-repeat: no-repeat;
  background-size: 180px;
  box-shadow: ${(props) => props.theme.contentShadow};
  border-radius: 7px;
  margin: 20px;
  min-height: 250px;
  max-width: 100%;
  transition: 200ms;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;

  * {
      text-decoration: none;
    text-transform: uppercase;
    font-weight: normal;
    font-family: "Sawarabi Mincho", serif;
    color: ${(props) => props.theme.globalText};
    font-size: 28px;
    margin: 0;
    padding: 0 20px;
  cursor: pointer;
  }

  h2 {
    top: 10px;
    left: -15px;
    font-size: 18px;
    font-family: "Comfortaa", sans-serif;
    opacity: 0.6;
    writing-mode: vertical-rl;
    position: absolute;
  text-align: justify;
  padding-bottom: 50px;
}
  h3 {
    font-family: "Comfortaa", sans-serif;
    bottom: 8px;
    left: -10px;
    font-size: 15px;
    opacity: 0.6;
    position: absolute;
  }

  &:hover {
      box-shadow: ${props=>props.theme.contentShadowHover};
  transition: 200ms;
  }
`;
export default OverviewCard;
