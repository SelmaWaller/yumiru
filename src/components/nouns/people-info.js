import React from "react";
import Collapsible from "react-collapsible";

import FlexWrapper from "../styles/flex-wrapper";

const PeopleInfo = () => {
  return (
    <>
      <FlexWrapper>
        <Collapsible trigger="Relations">
          <p>relations</p>
          <p>professional</p>
          <p>clothes</p>
        </Collapsible>
        <Collapsible trigger="Body"></Collapsible>
      </FlexWrapper>
    </>
  );
};

export default PeopleInfo;
