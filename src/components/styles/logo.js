import styled from 'styled-components';

const Logo = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 80px auto 0;
  max-height: 530px;
  position: absolute;
  height: 100%;
  background: ${(props) => props.theme.logo};
  background-repeat: no-repeat;
  background-size: 100%;
  transition: 150ms;
  @media (max-width: 660px) {
    background: ${(props) => props.theme.logoMobile};
    bottom: 0;
    max-height: 100vh;
    width: 650px;
    max-width: 90%;
    background-size: 80%;
    background-position: center 80px;
    background-repeat: no-repeat;
  }
`;

export default Logo;
