import styled from "styled-components";

import FlexWrapper from "../../styles/flex-wrapper";

const InfoTitle = styled(FlexWrapper)`
  span {
    transition: 1s;
    font-size: 18px;
    padding: 60px 20px 20px;
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText}a9;
    font-weight: bold;
  }
`;

export default InfoTitle;
