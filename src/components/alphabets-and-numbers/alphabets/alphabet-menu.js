import React from "react";

import SmallButton from "../../styles/colored-button-small";
import TabButton from "../styles/tab-button";
import Katakana from "../styles/katakana";

const AlphabetMenu = ({
  isButtonOne,
  toggleMainButtons,
  tabOneActive,
  toTabOne,
  tabTwoActive,
  toTabTwo,
  tabThreeActive,
  toTabThree,
  tabFourActive,
  toTabFour,
}) => {
  return (
    <>
      <div>
        <SmallButton
          disabled={isButtonOne}
          onClick={() => {
            toggleMainButtons();
          }}
        >
          <span></span>
        </SmallButton>
      </div>
      <div>
        <TabButton
          disabled={tabOneActive}
          as={TabButton}
          onClick={() => {
            toTabOne();
          }}
        >
          <span>五十音</span>
          <div>
            <span>gojūon</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabTwoActive}
          as={TabButton}
          onClick={() => {
            toTabTwo();
          }}
        >
          <span>濁音</span>
          <div>
            <span>dakuon</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabThreeActive}
          as={TabButton}
          onClick={() => {
            toTabThree();
          }}
        >
          <span>半濁音</span>
          <div>
            <span>handakuon</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabFourActive}
          as={TabButton}
          onClick={() => {
            toTabFour();
          }}
        >
          <span>拗音</span>
          <div>
            <span>yōon</span>
          </div>
        </TabButton>
      </div>
      <div>
        <SmallButton
          disabled={!isButtonOne}
          secondary
          as={Katakana}
          onClick={() => {
            toggleMainButtons();
          }}
        >
          <span></span>
        </SmallButton>
      </div>
    </>
  );
};

export default AlphabetMenu;
