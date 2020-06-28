import styled from 'styled-components';

const TransparentText = styled.span`
  position: absolute;
  color: ${(props) => props.theme.lightText};
  font-size: ${(props) => (props.title ? '70px' : '50px')};
  writing-mode: ${(props) => (props.title ? 'horizontal-tb' : 'vertical-rl')};
  top: ${(props) => (props.title ? '32px' : '155px')};
  right: ${(props) => (props.time ? '40px' : 'unset')};
  left: ${(props) =>
    props.title ? props.theme.title : props.time ? 'unset' : '40px'};
  text-shadow: ${(props) =>
    props.title ? props.theme.titleShadow : props.theme.lightTextShadow};
  text-align: center;
  user-select: none;
  transition: 150ms;
  font-weight: 200;
  font-family: 'Cardo', sans-serif;
  @media (max-width: 660px) {
    font-size: ${(props) => (props.title ? '35px' : '20px')};
    top: ${(props) => (props.title ? '32px' : '100px')};
    right: ${(props) => (props.time ? '25px' : 'unset')};
    left: ${(props) =>
      props.title ? props.theme.title : props.time ? 'unset' : '25px'};
    text-shadow: ${(props) =>
      props.title
        ? props.theme.titleShadowMobile
        : props.theme.lightTextShadowMobile};
  }
  p {
    margin: 0;
  }

  span {
    min-height: 54px;
    padding: 2px 0;
    writing-mode: vertical-lr;
    transform: rotate(-90deg);
  }
`;

export default TransparentText;
