import React from "react";
import styled from "styled-components";

import kanjiNumbers from "../kanji-numbers";
import counters from "../counters";

import Card from "../../styles/card";

const LineHeight = styled.div`
  padding-bottom: 10px;
`;

const CounterCard = styled(Card)`
  td {
    transition-delay: 50ms;
    position: relative;
    max-width: 170px;
    &:hover span {
      transition: 150ms;
      opacity: 1;
      transform: scale(1);
      right: -160px;
      top: -20px;
    }
  }
  span:nth-last-child(2) {
    opacity: 0;
    transform: scale(0.3);
    top: 0;
    right: -60px;
    max-width: 200px;
    position: absolute;
    transition: 150ms;
    color: ${(props) => props.theme.globalText};
    box-shadow: ${(props) => props.theme.floatShadow};
    padding: 10px;
    background: ${(props) => props.theme.globalBackgroundLight};
  }
`;

const NumberTable = ({
  isButtonOne,
  buttonOneTabOne,
  buttonOneTabTwo,
  buttonOneTabThree,
  buttonOneTabFour,
  buttonTwoTabOne,
  buttonTwoTabTwo,
  buttonTwoTabThree,
  buttonTwoTabFour,
}) => {
  return (
    <>
      {isButtonOne
        ? kanjiNumbers.map((number, index) => {
            return (
              <Card key={index}>
                <tbody>
                  <tr>
                    <th>
                      {buttonOneTabOne ? number.ten_romaji : " "}
                      {buttonOneTabTwo ? number.hundred_romaji : " "}
                      {buttonOneTabThree ? number.thousand_romaji : " "}
                      {buttonOneTabFour ? number.tenthousand_romaji : " "}
                      <sup>
                        {buttonOneTabFour
                          ? number.tenthousand_elevated_top
                          : ""}
                      </sup>
                      <span>
                        <sub>i</sub>
                        <sup>
                          {!buttonOneTabFour
                            ? number.ten_alternative
                            : number.tenthousand_alternative}
                        </sup>
                        {buttonOneTabOne ? number.ten_romaji_top : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_top : " "}
                        {buttonOneTabThree ? number.thousand_romaji_top : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_top : " "}
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_1 : " "}
                      {buttonOneTabTwo ? number.hundred_1 : " "}
                      {buttonOneTabThree ? number.thousand_1 : " "}
                      {buttonOneTabFour ? number.tenthousand_1 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_1 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_1 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_1 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_1 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_1 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_2 : " "}
                      {buttonOneTabTwo ? number.hundred_2 : " "}
                      {buttonOneTabThree ? number.thousand_2 : " "}
                      {buttonOneTabFour ? number.tenthousand_2 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_2 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_2 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_2 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_2 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_2 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_3 : " "}
                      {buttonOneTabTwo ? number.hundred_3 : " "}
                      {buttonOneTabThree ? number.thousand_3 : " "}
                      {buttonOneTabFour ? number.tenthousand_3 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_3 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_3 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_3 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_3 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_3 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_4 : " "}
                      {buttonOneTabTwo ? number.hundred_4 : " "}
                      {buttonOneTabThree ? number.thousand_4 : " "}{" "}
                      {buttonOneTabFour ? number.tenthousand_4 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_4 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_4 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_4 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_4 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_4 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_5 : " "}
                      {buttonOneTabTwo ? number.hundred_5 : " "}
                      {buttonOneTabThree ? number.thousand_5 : " "}
                      {buttonOneTabFour ? number.tenthousand_5 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_5 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_5 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_5 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_5 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_5 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_6 : " "}
                      {buttonOneTabTwo ? number.hundred_6 : " "}
                      {buttonOneTabThree ? number.thousand_6 : " "}
                      {buttonOneTabFour ? number.tenthousand_6 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_6 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_6 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_6 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_6 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_6 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_7 : " "}
                      {buttonOneTabTwo ? number.hundred_7 : " "}
                      {buttonOneTabThree ? number.thousand_7 : " "}
                      {buttonOneTabFour ? number.tenthousand_7 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_7 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_7 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_7 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_7 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_7 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_8 : " "}
                      {buttonOneTabTwo ? number.hundred_8 : " "}
                      {buttonOneTabThree ? number.thousand_8 : " "}
                      {buttonOneTabFour ? number.tenthousand_8 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_8 : " "}
                      </sup>
                      <span>
                        {buttonOneTabOne ? number.ten_romaji_8 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_8 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_8 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_8 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? number.ten_9 : " "}
                      {buttonOneTabTwo ? number.hundred_9 : " "}
                      {buttonOneTabThree ? number.thousand_9 : " "}
                      {buttonOneTabFour ? number.tenthousand_9 : " "}
                      {buttonOneTabFour ? number.tenthousand : " "}
                      <sup>
                        {buttonOneTabFour ? number.tenthousand_elevated_9 : " "}
                      </sup>

                      <span>
                        {buttonOneTabOne ? number.ten_romaji_9 : " "}
                        {buttonOneTabTwo ? number.hundred_romaji_9 : " "}
                        {buttonOneTabThree ? number.thousand_romaji_9 : " "}
                        {buttonOneTabFour ? number.tenthousand_romaji_9 : " "}
                      </span>
                    </td>
                  </tr>
                  {buttonOneTabOne ? (
                    <>
                      <tr>
                        <td>
                          {number.ten_10}

                          <span>{number.ten_romaji_10}</span>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </Card>
            );
          })
        : counters.map((counter, index) => {
            return (
              <CounterCard key={index}>
                <tbody>
                  <tr>
                    <th>
                      {buttonTwoTabOne ? counter.heading_1 : counter.heading_2}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? counter.category : " "}
                      {buttonTwoTabOne ? counter.counter_1_1 : " "}
                      {buttonTwoTabTwo ? counter.counter_2_1 : " "}
                      {buttonTwoTabThree ? counter.counter_3_1 : " "}
                      {buttonTwoTabFour ? counter.counter_4_1 : " "}
                      <span>
                        {buttonTwoTabOne ? counter.counter_hiragana_1_1 : ""}
                        {buttonTwoTabTwo ? counter.counter_hiragana_2_1 : ""}
                        {buttonTwoTabThree ? counter.counter_hiragana_3_1 : " "}
                        {buttonTwoTabFour ? counter.counter_hiragana_4_1 : " "}
                      </span>
                      <span>
                        {buttonTwoTabOne ? counter.title_1_1 : ""}
                        {buttonTwoTabTwo ? counter.title_2_1 : ""}
                        {buttonTwoTabThree ? counter.title_3_1 : " "}
                        {buttonTwoTabFour ? counter.title_4_1 : " "}
                      </span>
                      <span>
                        {buttonTwoTabOne ? counter.list_1_1 : ""}
                        {buttonTwoTabTwo ? counter.list_2_1 : ""}
                        {buttonTwoTabThree ? counter.list_3_1 : " "}
                        {buttonTwoTabFour ? counter.list_4_1 : " "}
                      </span>
                      <div as={LineHeight}>
                        <span>&nbsp;</span>
                      </div>
                    </td>
                  </tr>
                  {!buttonTwoTabOne ? (
                    <>
                      <tr>
                        <td>
                          {buttonTwoTabTwo ? counter.counter_2_2 : " "}
                          {buttonTwoTabThree ? counter.counter_3_2 : " "}
                          {buttonTwoTabFour ? counter.counter_4_2 : " "}
                          <span>
                            {buttonTwoTabTwo
                              ? counter.counter_hiragana_2_2
                              : ""}
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_2
                              : " "}
                            {buttonTwoTabFour
                              ? counter.counter_hiragana_4_2
                              : " "}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.title_2_2 : ""}
                            {buttonTwoTabThree ? counter.title_3_2 : " "}
                            {buttonTwoTabFour ? counter.title_4_2 : " "}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.list_2_2 : ""}
                            {buttonTwoTabThree ? counter.list_3_2 : " "}
                            {buttonTwoTabFour ? counter.list_4_2 : " "}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabTwo || buttonTwoTabFour
                            ? counter.category
                            : " "}
                          {buttonTwoTabTwo ? counter.counter_2_3 : " "}
                          {buttonTwoTabThree ? counter.counter_3_3 : " "}
                          {buttonTwoTabFour ? counter.counter_4_3 : " "}
                          <span>
                            {buttonTwoTabTwo
                              ? counter.counter_hiragana_2_3
                              : ""}
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_3
                              : " "}
                            {buttonTwoTabFour
                              ? counter.counter_hiragana_4_3
                              : " "}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.title_2_3 : ""}
                            {buttonTwoTabThree ? counter.title_3_3 : ""}
                            {buttonTwoTabFour ? counter.title_4_3 : ""}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.list_2_3 : ""}
                            {buttonTwoTabThree ? counter.list_3_3 : ""}
                            {buttonTwoTabFour ? counter.list_4_3 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabTwo ? counter.counter_2_4 : " "}
                          {buttonTwoTabThree ? counter.counter_3_4 : " "}
                          {buttonTwoTabFour ? counter.counter_4_4 : " "}
                          <span>
                            {buttonTwoTabTwo
                              ? counter.counter_hiragana_2_4
                              : ""}
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_4
                              : ""}
                            {buttonTwoTabFour
                              ? counter.counter_hiragana_4_4
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.title_2_4 : ""}
                            {buttonTwoTabThree ? counter.title_3_4 : ""}
                            {buttonTwoTabFour ? counter.title_4_4 : ""}
                          </span>
                          <span>
                            {buttonTwoTabTwo ? counter.list_2_4 : ""}
                            {buttonTwoTabThree ? counter.list_3_4 : ""}
                            {buttonTwoTabFour ? counter.list_4_4 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                  {buttonTwoTabThree ? (
                    <>
                      <tr>
                        <td>
                          {buttonTwoTabThree ? counter.category : " "}
                          {buttonTwoTabThree ? counter.counter_3_5 : " "}
                          <span>
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_5
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.title_3_5 : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.list_3_5 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabThree ? counter.counter_3_6 : " "}
                          <span>
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_6
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.title_3_6 : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.list_3_6 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabThree ? counter.counter_3_7 : " "}
                          <span>
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_7
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.title_3_7 : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.list_3_7 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabThree ? counter.counter_3_8 : " "}
                          <span>
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_8
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.title_3_8 : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.list_3_8 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {buttonTwoTabThree ? counter.counter_3_9 : " "}
                          <span>
                            {buttonTwoTabThree
                              ? counter.counter_hiragana_3_9
                              : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.title_3_9 : ""}
                          </span>
                          <span>
                            {buttonTwoTabThree ? counter.list_3_9 : ""}
                          </span>
                          <div as={LineHeight}>
                            <span>&nbsp;</span>
                          </div>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </CounterCard>
            );
          })}
    </>
  );
};

export default NumberTable;
