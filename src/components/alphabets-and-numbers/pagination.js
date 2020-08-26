import React from "react";

import FlexWrapper from "../styles/flex-wrapper";
import GridSmall from "../styles/grid-small";

import PaginationButton from "../styles/pagination";
import CurrentPage from "../styles/current-page";
import NextPage from "../styles/next-page";

const Pagination = ({ alphabets, setAlphabets }) => {
  const toggleNumbers = () => {
    setAlphabets(!alphabets);
  };

  return (
    <FlexWrapper>
      <GridSmall>
        <PaginationButton
          disabled={alphabets}
          onClick={() => {
            toggleNumbers();
          }}
        >
          <span>PREV</span>
        </PaginationButton>
        <CurrentPage>
          <span>{alphabets ? `ALPHABETS` : `NUMBERS`}</span>
        </CurrentPage>
        <PaginationButton
          as={NextPage}
          disabled={!alphabets}
          onClick={() => {
            toggleNumbers();
          }}
        >
          <span>NEXT</span>
        </PaginationButton>
      </GridSmall>
    </FlexWrapper>
  );
};
export default Pagination;
