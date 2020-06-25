import React from "react";
import { Link } from "react-router-dom";

import FlexWrapper from "../components/styles/wrappers/flex-wrapper";
import Logo from "../components/styles/wrappers/logo";
import Button from "../components/styles/small-elements/default-button";

export default function LandingPage() {
  return (
    <>
      <FlexWrapper>
        <Logo />
        <Link to="/overview">
          <Button>
            <span></span>
            <div></div>
          </Button>
        </Link>
      </FlexWrapper>
    </>
  );
}
