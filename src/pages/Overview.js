import React from "react";

import OverviewWrapper from "../components/styles/wrappers/overview";
import FlexWrapper from "../components/styles/wrappers/flex-wrapper";
import GamesGrid from "../components/games/games-grid";
import OtherGrid from "../components/other/other-grid";

export default function Overview() {
  return (
    <>
    <FlexWrapper>
      <OverviewWrapper>
        <GamesGrid />
      </OverviewWrapper>
      <OverviewWrapper>
        <OtherGrid />
      </OverviewWrapper>
    </FlexWrapper>
    </>
  );
}
