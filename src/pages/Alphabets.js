import React, { useState, useEffect } from "react";

import Title from "../components/global/title";
import FlexWrapper from "../components/styles/flex-wrapper";
import PaddingContainer from "../components/styles/padding-container";
import ScrollContainer from "../components/styles/scroll-container";
import TableGrid from "../components/styles/table-grid";

import Pagination from "../components/alphabets-and-numbers/pagination";
import AlphabetMenu from "../components/alphabets-and-numbers/alphabets/alphabet-menu";
import NumberMenu from "../components/alphabets-and-numbers/numbers/number-menu";
import AlphabetTable from "../components/alphabets-and-numbers/alphabets/alphabet-table";
import NumberTable from "../components/alphabets-and-numbers/numbers/number-table";
import AlphabetInfo from "../components/alphabets-and-numbers/alphabets/alphabet-info";
import NumberInfo from "../components/alphabets-and-numbers/numbers/number-info";

export default function Alphabets() {
  const [alphabets, setAlphabets] = useState(false);
  const [isButtonOne, setIsButtonOne] = useState(false);

  const [buttonOneTabOne, setButtonOneTabOne] = useState(true);
  const [buttonOneTabTwo, setButtonOneTabTwo] = useState(false);
  const [buttonOneTabThree, setButtonOneTabThree] = useState(false);
  const [buttonOneTabFour, setButtonOneTabFour] = useState(false);
  const [buttonTwoTabOne, setButtonTwoTabOne] = useState(true);
  const [buttonTwoTabTwo, setButtonTwoTabTwo] = useState(false);
  const [buttonTwoTabThree, setButtonTwoTabThree] = useState(false);
  const [buttonTwoTabFour, setButtonTwoTabFour] = useState(false);

  const [tabOneActive, setTabOneActive] = useState(true);
  const [tabTwoActive, setTabTwoActive] = useState(false);
  const [tabThreeActive, setTabThreeActive] = useState(false);
  const [tabFourActive, setTabFourActive] = useState(false);

  useEffect(() => {
    document.title = "Yumiru | Alphabets";
  }, []);

  const clearTabs = () => {
    setTabOneActive(false);
    setTabTwoActive(false);
    setTabThreeActive(false);
    setTabFourActive(false);
  };

  const clearTables = () => {
    setButtonOneTabOne(false);
    setButtonOneTabTwo(false);
    setButtonOneTabThree(false);
    setButtonOneTabFour(false);
    setButtonTwoTabOne(false);
    setButtonTwoTabTwo(false);
    setButtonTwoTabThree(false);
    setButtonTwoTabFour(false);
  };

  const toTabOne = () => {
    isButtonOne ? setButtonOneTabOne(true) : setButtonTwoTabOne(true);
  };
  const toTabTwo = () => {
    isButtonOne ? setButtonOneTabTwo(true) : setButtonTwoTabTwo(true);
  };
  const toTabThree = () => {
    isButtonOne ? setButtonOneTabThree(true) : setButtonTwoTabThree(true);
  };
  const toTabFour = () => {
    isButtonOne ? setButtonOneTabFour(true) : setButtonTwoTabFour(true);
  };

  const toggleMainButtons = () => {
    setIsButtonOne(!isButtonOne);
    if (tabOneActive) {
      setButtonOneTabOne(true);
      setButtonTwoTabOne(true);
    } else if (tabTwoActive) {
      setButtonOneTabTwo(true);
      setButtonTwoTabTwo(true);
    } else if (tabThreeActive) {
      setButtonOneTabThree(true);
      setButtonTwoTabThree(true);
    } else if (tabFourActive) {
      setButtonOneTabFour(true);
      setButtonTwoTabFour(true);
    }
  };

  return (
    <>
      <Title />
      <Pagination alphabets={alphabets} setAlphabets={setAlphabets} />
      <FlexWrapper>
        {alphabets ? (
          <AlphabetMenu
            isButtonOne={isButtonOne}
            toggleMainButtons={() => {
              clearTables();
              toggleMainButtons();
            }}
            tabOneActive={tabOneActive}
            toTabOne={() => {
              clearTabs();
              clearTables();
              setTabOneActive(true);
              toTabOne();
            }}
            tabTwoActive={tabTwoActive}
            toTabTwo={() => {
              clearTabs();
              clearTables();
              setTabTwoActive(true);
              toTabTwo();
            }}
            tabThreeActive={tabThreeActive}
            toTabThree={() => {
              clearTabs();
              clearTables();
              setTabThreeActive(true);
              toTabThree();
            }}
            tabFourActive={tabFourActive}
            toTabFour={() => {
              clearTabs();
              clearTables();
              setTabFourActive(true);
              toTabFour();
            }}
          />
        ) : (
          <NumberMenu
            isButtonOne={isButtonOne}
            toggleMainButtons={() => {
              toggleMainButtons();
            }}
            tabOneActive={tabOneActive}
            toTabOne={() => {
              clearTabs();
              clearTables();
              setTabOneActive(true);
              toTabOne();
            }}
            tabTwoActive={tabTwoActive}
            toTabTwo={() => {
              clearTabs();
              clearTables();
              setTabTwoActive(true);
              toTabTwo();
            }}
            tabThreeActive={tabThreeActive}
            toTabThree={() => {
              clearTabs();
              clearTables();
              setTabThreeActive(true);
              toTabThree();
            }}
            tabFourActive={tabFourActive}
            toTabFour={() => {
              clearTabs();
              clearTables();
              setTabFourActive(true);
              toTabFour();
            }}
          />
        )}
      </FlexWrapper>
      <PaddingContainer>
        <ScrollContainer>
          <TableGrid>
            {alphabets ? (
              <AlphabetTable
                isButtonOne={isButtonOne}
                buttonOneTabOne={buttonOneTabOne}
                buttonOneTabTwo={buttonOneTabTwo}
                buttonOneTabThree={buttonOneTabThree}
                buttonOneTabFour={buttonOneTabFour}
                buttonTwoTabOne={buttonTwoTabOne}
                buttonTwoTabTwo={buttonTwoTabTwo}
                buttonTwoTabThree={buttonTwoTabThree}
                buttonTwoTabFour={buttonTwoTabFour}
              />
            ) : (
              <NumberTable
                isButtonOne={isButtonOne}
                isButtonTwo={!isButtonOne}
                buttonOneTabOne={buttonOneTabOne}
                buttonOneTabTwo={buttonOneTabTwo}
                buttonOneTabThree={buttonOneTabThree}
                buttonOneTabFour={buttonOneTabFour}
                buttonTwoTabOne={buttonTwoTabOne}
                buttonTwoTabTwo={buttonTwoTabTwo}
                buttonTwoTabThree={buttonTwoTabThree}
                buttonTwoTabFour={buttonTwoTabFour}
              />
            )}
          </TableGrid>
        </ScrollContainer>
      </PaddingContainer>
      {alphabets ? <AlphabetInfo /> : <NumberInfo isButtonOne={isButtonOne} />}
    </>
  );
}
