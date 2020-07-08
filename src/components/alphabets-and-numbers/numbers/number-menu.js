import React from "react";

import SmallButton from "../../styles/colored-button-small";
import TabButton from "../styles/tab-button";
import Kanji from "../styles/kanji";
import Counting from "../styles/counting";

const NumberMenu = ({
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
          as={Kanji}
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
          <span>十</span>
          <div>
            <span>ten</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabTwoActive}
          as={TabButton}
          onClick={() => {
            toTabTwo();
          }}
        >
          <span>百</span>
          <div>
            <span>hundred</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabThreeActive}
          as={TabButton}
          onClick={() => {
            toTabThree();
          }}
        >
          <span>千</span>
          <div>
            <span>thousand</span>
          </div>
        </TabButton>
        <TabButton
          disabled={tabFourActive}
          as={TabButton}
          onClick={() => {
            toTabFour();
          }}
        >
          <span>万+</span>
          <div>
            <span>tenthousand&nbsp;+</span>
          </div>
        </TabButton>
      </div>
      <div>
        <SmallButton
          disabled={!isButtonOne}
          secondary
          as={Counting}
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
export default NumberMenu;
