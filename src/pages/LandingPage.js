import React from "react";
import { Link } from "react-router-dom";

import FlexWrapper from "../components/styles/wrappers/flex-wrapper";
import Games from "../components/styles/wrappers/games";
import Other from "../components/styles/wrappers/other";
import Button from "../components/styles/small-elements/default-button";

export default function LandingPage() {
  let randomGame;
  let randomAnime;
  return (
    <>
      <FlexWrapper>
        <Link to={randomGame}>
          <Games>
            <span></span>
          </Games>
        </Link>
        <Link to="/overview">
          <Button>
            <span></span>
            <div></div>
          </Button>
        </Link>
        <Link to={randomAnime}>
          <Other>
            <span></span>
          </Other>
        </Link>
      </FlexWrapper>
    </>
  );
}
