import React from "react";
import styled from "styled-components";

import FlexWrapper from "../styles/wrappers/flex-wrapper";

const TitleText = styled.div`
  position: absolute;
  top: 34px;
  text-shadow: ${(props) => props.theme.logoShadow};
  color: ${(props) => props.theme.lightText};
  font-size: 70px;
  user-select: none;
  font-family: "Cardo", sans-serif;
  font-weight: 200;
  transition: 150ms;
`;

const Title = () => {
  return (
    <FlexWrapper>
      <TitleText>
        <span>YUMIRU</span>
      </TitleText>
    </FlexWrapper>
  );
};

export default Title;
