import React from "react";
import { Link } from "react-router-dom";

import LandingPageWrapper from "../components/styles/wrappers/landing-page";
import Games from "../components/styles/wrappers/games";
import Other from "../components/styles/wrappers/other";
import Button from "../components/styles/small-elements/default-button";

export default function LandingPage() {
  let randomGame;
  let randomAnime;
  return (
    <>
      <LandingPageWrapper>
        <Link to={randomGame}>
          <Games
            onClick={() => {
              console.log("create popups for games");
            }}
          >
            <span></span>
          </Games>
        </Link>
        <Link to="/Dashboard">
          <Button>
            <span></span>
          </Button>
        </Link>
        <Link to={randomAnime}>
          <Other
            onClick={() => {
              console.log("create popup for other things");
            }}
          >
            <span></span>
          </Other>
        </Link>
      </LandingPageWrapper>
    </>
  );
}
