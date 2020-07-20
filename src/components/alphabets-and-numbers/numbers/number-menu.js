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
          {isButtonOne ? (
            <>
              <span>十</span>
              <div>
                <span>ten</span>
              </div>
            </>
          ) : (
            <>
              <span>&#9733;&#9733;</span>
              <div>
                <span>most&nbsp;important</span>
              </div>
            </>
          )}
        </TabButton>
        <TabButton
          disabled={tabTwoActive}
          as={TabButton}
          onClick={() => {
            toTabTwo();
          }}
        >
          {isButtonOne ? (
            <>
              <span>百</span>
              <div>
                <span>hundred</span>
              </div>
            </>
          ) : (
            <>
              <span>&#9733;</span>
              <div>
                <span>important</span>
              </div>
            </>
          )}
        </TabButton>
        <TabButton
          disabled={tabThreeActive}
          as={TabButton}
          onClick={() => {
            toTabThree();
          }}
        >
          {isButtonOne ? (
            <>
              <span>千</span>
              <div>
                <span>thousand</span>
              </div>
            </>
          ) : (
            <>
              <span>&#9734;&#9734;</span>
              <div>
                <span>common</span>
              </div>
            </>
          )}
        </TabButton>
        <TabButton
          disabled={tabFourActive}
          as={TabButton}
          onClick={() => {
            toTabFour();
          }}
        >
          {isButtonOne ? (
            <>
              <span>万+</span>
              <div>
                <span>tenthousand&nbsp;+</span>
              </div>
            </>
          ) : (
            <>
              <span>&#9734;</span>
              <div>
                <span>less&nbsp;common</span>
              </div>
            </>
          )}
        </TabButton>
      </div>
      <div>
        <SmallButton
          disabled={!isButtonOne}
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
