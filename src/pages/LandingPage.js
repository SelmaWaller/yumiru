import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Games from "../components/landing-page/games";
import Other from "../components/landing-page/other";
import Button from "../components/styles/small-elements/default-button";

export default function Home(toggleTheme) {
  return (
    <>
      <Games />
      <BrowserRouter>
        <Button>
          <Link to="/Dashboard">
            <span>ダッシュボード</span>
          </Link>
        </Button>
      </BrowserRouter>
      <Other />
    </>
  );
}
