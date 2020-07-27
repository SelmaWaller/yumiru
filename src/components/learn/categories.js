import React from "react";
import styled from "styled-components";

import GridLarge from "../styles/grid-large";
import GlobalCard from "../styles/global-card";
import People from "./illustrations/people";
import Home from "./illustrations/home";

const IllustrationCard = styled(GlobalCard)`
  position: relative;
  display: block;
  max-width: 500px;
  height: 500px;
  margin: 20px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  h1,
  p {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText};
    font-size: 24px;
  }
  p {
    font-family: "Comfortaa", sans-serif;
    margin-top: 0;
    opacity: 0.65;
    font-size: 18px;
  }
`;

const Categories = () => {
  return (
    <GridLarge>
      <IllustrationCard>
        <h1>人</h1>
        <p>PEOPLE</p>
        <People />
      </IllustrationCard>
      <IllustrationCard>
        <h1>家</h1>
        <p>HOME</p>
        <Home />
      </IllustrationCard>
      <IllustrationCard>
        <h1>自然</h1>
        <p>NATURE</p>
        <Home />
      </IllustrationCard>
    </GridLarge>
  );
};

export default Categories;
