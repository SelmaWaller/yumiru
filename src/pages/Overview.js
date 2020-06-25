import React from "react";

import Title from "../components/global/title";
import OverviewWrapper from "../components/styles/wrappers/overview";
import GamesGrid from "../components/games/games-grid";
import OtherGrid from "../components/other/other-grid";

export default function Overview() {
  return (
    <>
      <Title />
      <OverviewWrapper>
        <GamesGrid />
        <OtherGrid />
      </OverviewWrapper>
    </>
  );
}
