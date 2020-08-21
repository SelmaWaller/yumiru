import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import GridLarge from "../styles/grid-large";
import GlobalCard from "../styles/global-card";
import People from "./illustrations/people";
import PeopleInfo from "./people-info";
import Buildings from "./illustrations/buildings";
import BuildingsInfo from "./buildings-info";
import Nature from "./illustrations/nature";
import NatureInfo from "./nature-info.js";
import Travel from "./illustrations/travel";
import TravelInfo from "./travel-info.js";

const IllustrationCard = styled(GlobalCard)`
  position: relative;
  display: block;
  max-width: 100%;
  min-height: 500px;
  margin: 20px;
  transition: 300ms ease-out;
  cursor: default;
  &:hover {
    box-shadow: ${(props) => props.theme.contentShadow};
  }
  h1,
  h4 {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0;
    font-family: "Noto Sans JP", sans-serif;
    color: ${(props) => props.theme.globalText};
    font-size: 24px;
  }
  h4 {
    font-weight: normal;
    font-family: "Comfortaa", sans-serif;
    margin-top: 0;
    opacity: 0.65;
    font-size: 18px;
  }
  p {
    font-family: "Comfortaa", sans-serif;
    color: ${(props) => props.theme.globalText};
  }
  &:active,
  &:focus {
    transition: 200ms ease-out;
    max-width: 100%;
  }
`;

const closed = styled(IllustrationCard)`
  display: none;
`;

const arrow = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-5px);
  }
`;

const ExpandCategory = styled.div`
  cursor: pointer;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  z-index: 99;
  justify-content: center;
  align-items: center;
  display: flex;
  animation: ${arrow} infinite 1s;
  p {
    margin-left: 40px;
    font-size: 30px;
  }
`;

const Categories = () => {
  const [people, setPeople] = useState(true);
  const [home, setHome] = useState(true);
  const [nature, setNature] = useState(true);
  const [travel, setTravel] = useState(true);
  const [info, setInfo] = useState(false);

  const arrow = info ? "«" : "»";

  return (
    <GridLarge>
      <IllustrationCard as={travel ? "" : closed}>
        <ExpandCategory
          onClick={() => {
            window.scrollTo(0, 0);
            setInfo(!info);
            setPeople(!people);
            setHome(!home);
            setNature(!nature);
          }}
        >
          <p>{arrow}</p>
        </ExpandCategory>
        <h1>旅行</h1>
        <h4>TRAVEL</h4>
        {info ? <TravelInfo /> : ""}
        <Travel />
      </IllustrationCard>
      <IllustrationCard as={nature ? "" : closed}>
        <ExpandCategory
          onClick={() => {
            window.scrollTo(0, 0);
            setInfo(!info);
            setPeople(!people);
            setHome(!home);
            setTravel(!travel);
          }}
        >
          <p>{arrow}</p>
        </ExpandCategory>
        <h1>自然</h1>
        <h4>NATURE</h4>
        {info ? <NatureInfo /> : ""}
        <Nature />
      </IllustrationCard>
      <IllustrationCard as={home ? "" : closed}>
        <ExpandCategory
          onClick={() => {
            window.scrollTo(0, 0);
            setInfo(!info);
            setPeople(!people);
            setNature(!nature);
            setTravel(!travel);
          }}
        >
          <p>{arrow}</p>
        </ExpandCategory>
        <h1>造営物と家具</h1>
        <h4>BUILDINGS & FURNITURE</h4>
        {info ? <BuildingsInfo /> : ""}
        <Buildings />
      </IllustrationCard>
      <IllustrationCard as={people ? "" : closed}>
        <ExpandCategory
          onClick={() => {
            window.scrollTo(0, 0);
            setInfo(!info);
            setHome(!home);
            setNature(!nature);
            setTravel(!travel);
          }}
        >
          <p>{arrow}</p>
        </ExpandCategory>
        <h1>人</h1>
        <h4>PEOPLE</h4>
        {info ? <PeopleInfo /> : ""}
        <People />
      </IllustrationCard>
    </GridLarge>
  );
};

export default Categories;
