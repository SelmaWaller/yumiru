import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import OverviewObjects from "../components/overview-objects";

import Title from "../components/global/title";
import GridLarge from "../components/styles/grid-large";
import GlobalCard from "../components/styles/global-card";

const OverviewCard = styled(GlobalCard)`
  background-size: 100%;
  position: realtive;
  img {
    position: absolute;
    height: 80%;
    opacity: 0;
  }

  &:hover {
    img {
      opacity: 1;
    }
    h1,
    h2,
    h3 {
      opacity: 0;
    }
  }

  h1,
  h2,
  h3 {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: normal;
    font-family: "Sawarabi Mincho", sans-serif;
    color: ${(props) => props.theme.globalText};
    font-size: 28px;
    margin: 0;
    padding: 0 20px;
    transition: 250ms;
  }

  h2 {
    top: 10px;
    left: -5px;
    font-size: 18px;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: normal;
    opacity: 0.6;
    writing-mode: vertical-rl;
    position: absolute;
    text-align: justify;
    padding-bottom: 50px;
  }

  h3 {
    font-family: "Comfortaa", sans-serif;
    bottom: 15px;
    left: 0;
    font-size: 15px;
    opacity: 0.6;
    position: absolute;
  }
`;

const Disabled = styled(OverviewCard)`
  box-shadow: ${(props) => props.theme.contentShadowHover};
  cursor: default;
  opacity: 0.8;

  &:hover {
    h1 {
      opacity: 1;
    }
    h2,
    h3 {
      opacity: 0.6;
    }
  }
`;

export default function Overview() {
  useEffect(() => {
    document.title = "Yumiru | Overview";
  }, []);

  return (
    <>
      <Title />
      <GridLarge>
        {OverviewObjects.map((item, index) => {
          return (
            <div key={index}>
              {!item.disabled ? (
                <Link
                  to={item.disabled ? "" : item.url}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <OverviewCard
                    game={item.game}
                    as={item.disabled ? Disabled : ""}
                  >
                    <img src={item.preview} alt="preview" />
                    <div>
                      <h1>{item.japName}</h1>
                      <h2>{item.furigana}</h2>
                      <h3>{item.engName}</h3>
                    </div>
                  </OverviewCard>
                </Link>
              ) : (
                <OverviewCard
                  game={item.game}
                  as={item.disabled ? Disabled : ""}
                >
                  <div>
                    <h1>{item.japName}</h1>
                    <h2>{item.furigana}</h2>
                    <h3>{item.engName}</h3>
                  </div>
                </OverviewCard>
              )}
            </div>
          );
        })}
      </GridLarge>
    </>
  );
}
