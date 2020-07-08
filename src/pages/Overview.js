import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import OverviewObjects from "../components/overview-objects";

import Title from "../components/global/title";
import GridLarge from "../components/styles/grid-large";
import OverviewCard from "../components/styles/overview-card";

const Disabled = styled(OverviewCard)`
  box-shadow: ${(props) => props.theme.contentShadowHover};
  cursor: default;
  opacity: 0.8;
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
