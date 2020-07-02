import styled from 'styled-components';

const OverviewCard = styled.div`
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

  h1,
  h2,
  h3 {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: normal;
    font-family: 'Sawarabi Mincho', sans-serif;
    color: ${(props) => props.theme.globalText};
    font-size: 28px;
    margin: 0;
    padding: 0 20px;
    cursor: pointer;
    transition: 250ms;
  }

  h2 {
    top: 10px;
    left: -5px;
    font-size: 18px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: normal;
    opacity: 0.6;
    writing-mode: vertical-rl;
    position: absolute;
    text-align: justify;
    padding-bottom: 50px;
  }

  h3 {
    font-family: 'Comfortaa', sans-serif;
    bottom: 15px;
    left: 0;
    font-size: 15px;
    opacity: 0.6;
    position: absolute;
  }

  &:hover {
    box-shadow: ${(props) => props.theme.contentShadowHover};
    transition: 200ms;
  }
`;
export default OverviewCard;
