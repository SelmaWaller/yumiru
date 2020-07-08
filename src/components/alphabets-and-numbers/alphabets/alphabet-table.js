import React from "react";

import hiraganaAlphabets from "../../../components/hiragana-alphabets";
import katakanaAlphabets from "../../../components/katakana-alphabets";

import Card from "../../styles/card";

const AlphabetTable = ({
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
        ? hiraganaAlphabets.map((letter, index) => {
            return (
              <Card key={index}>
                <tbody>
                  <tr>
                    <th>
                      {buttonOneTabOne ? letter.gojuon_romaji : " "}
                      {buttonOneTabTwo ? letter.dakuon_romaji : " "}
                      {buttonOneTabThree ? letter.handakuon_romaji : " "}
                      {buttonOneTabFour ? letter.yoon_romaji : " "}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? letter.gojuon_a : " "}
                      {buttonOneTabTwo ? letter.dakuon_a : " "}
                      {buttonOneTabThree ? letter.handakuon_a : " "}
                      {buttonOneTabFour ? letter.yoon_1 : " "}

                      <span>
                        {buttonOneTabOne ? letter.gojuon_romaji_a : " "}
                        {buttonOneTabTwo ? letter.dakuon_romaji_a : " "}
                        {buttonOneTabThree ? letter.handakuon_romaji_a : " "}
                        {buttonOneTabFour ? letter.yoon_romaji_1 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? letter.gojuon_i : " "}
                      {buttonOneTabTwo ? letter.dakuon_i : " "}
                      {buttonOneTabThree ? letter.handakuon_i : " "}
                      {buttonOneTabFour ? letter.yoon_2 : " "}
                      <span>
                        {buttonOneTabOne ? letter.gojuon_romaji_i : " "}
                        {buttonOneTabTwo ? letter.dakuon_romaji_i : " "}
                        {buttonOneTabThree ? letter.handakuon_romaji_i : " "}
                        {buttonOneTabFour ? letter.yoon_romaji_2 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? letter.gojuon_u : " "}
                      {buttonOneTabTwo ? letter.dakuon_u : " "}
                      {buttonOneTabThree ? letter.handakuon_u : " "}
                      {buttonOneTabFour ? letter.yoon_3 : " "}
                      <span>
                        {buttonOneTabOne ? letter.gojuon_romaji_u : " "}
                        {buttonOneTabTwo ? letter.dakuon_romaji_u : " "}
                        {buttonOneTabThree ? letter.handakuon_romaji_u : " "}
                        {buttonOneTabFour ? letter.yoon_romaji_3 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? letter.gojuon_e : " "}
                      {buttonOneTabTwo ? letter.dakuon_e : " "}
                      {buttonOneTabThree ? letter.handakuon_e : " "}{" "}
                      {buttonOneTabFour ? letter.yoon_4 : " "}
                      <span>
                        {buttonOneTabOne ? letter.gojuon_romaji_e : " "}
                        {buttonOneTabTwo ? letter.dakuon_romaji_e : " "}
                        {buttonOneTabThree ? letter.handakuon_romaji_e : " "}
                        {buttonOneTabFour ? letter.yoon_romaji_4 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonOneTabOne ? letter.gojuon_o : " "}
                      {buttonOneTabTwo ? letter.dakuon_o : " "}
                      {buttonOneTabThree ? letter.handakuon_o : " "}
                      {buttonOneTabFour ? letter.yoon_5 : " "}

                      <span>
                        {buttonOneTabOne ? letter.gojuon_romaji_o : " "}
                        {buttonOneTabTwo ? letter.dakuon_romaji_o : " "}
                        {buttonOneTabThree ? letter.handakuon_romaji_o : " "}
                        {buttonOneTabFour ? letter.yoon_romaji_5 : " "}
                      </span>
                    </td>
                  </tr>
                  {buttonOneTabFour ? (
                    <>
                      <tr>
                        <td>
                          {letter.yoon_6}
                          <span>{letter.yoon_romaji_6}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_7}
                          <span>{letter.yoon_romaji_7}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_8}
                          <span>{letter.yoon_romaji_8}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_9}
                          <span>{letter.yoon_romaji_9}</span>
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
        : katakanaAlphabets.map((letter, index) => {
            return (
              <Card key={index}>
                <tbody>
                  <tr>
                    <th>
                      {buttonTwoTabOne ? letter.gojuon_romaji : " "}
                      {buttonTwoTabTwo ? letter.dakuon_romaji : " "}
                      {buttonTwoTabThree ? letter.handakuon_romaji : " "}
                      {buttonTwoTabFour ? letter.yoon_romaji : " "}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? letter.gojuon_a : " "}
                      {buttonTwoTabTwo ? letter.dakuon_a : " "}
                      {buttonTwoTabThree ? letter.handakuon_a : " "}
                      {buttonTwoTabFour ? letter.yoon_1 : " "}

                      <span>
                        {buttonTwoTabOne ? letter.gojuon_romaji_a : " "}
                        {buttonTwoTabTwo ? letter.dakuon_romaji_a : " "}
                        {buttonTwoTabThree ? letter.handakuon_romaji_a : " "}
                        {buttonTwoTabFour ? letter.yoon_romaji_1 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? letter.gojuon_i : " "}
                      {buttonTwoTabTwo ? letter.dakuon_i : " "}
                      {buttonTwoTabThree ? letter.handakuon_i : " "}
                      {buttonTwoTabFour ? letter.yoon_2 : " "}
                      <span>
                        {buttonTwoTabOne ? letter.gojuon_romaji_i : " "}
                        {buttonTwoTabTwo ? letter.dakuon_romaji_i : " "}
                        {buttonTwoTabThree ? letter.handakuon_romaji_i : " "}
                        {buttonTwoTabFour ? letter.yoon_romaji_2 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? letter.gojuon_u : " "}
                      {buttonTwoTabTwo ? letter.dakuon_u : " "}
                      {buttonTwoTabThree ? letter.handakuon_u : " "}
                      {buttonTwoTabFour ? letter.yoon_3 : " "}
                      <span>
                        {buttonTwoTabOne ? letter.gojuon_romaji_u : " "}
                        {buttonTwoTabTwo ? letter.dakuon_romaji_u : " "}
                        {buttonTwoTabThree ? letter.handakuon_romaji_u : " "}
                        {buttonTwoTabFour ? letter.yoon_romaji_3 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? letter.gojuon_e : " "}
                      {buttonTwoTabTwo ? letter.dakuon_e : " "}
                      {buttonTwoTabThree ? letter.handakuon_e : " "}{" "}
                      {buttonTwoTabFour ? letter.yoon_4 : " "}
                      <span>
                        {buttonTwoTabOne ? letter.gojuon_romaji_e : " "}
                        {buttonTwoTabTwo ? letter.dakuon_romaji_e : " "}
                        {buttonTwoTabThree ? letter.handakuon_romaji_e : " "}
                        {buttonTwoTabFour ? letter.yoon_romaji_4 : " "}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {buttonTwoTabOne ? letter.gojuon_o : " "}
                      {buttonTwoTabTwo ? letter.dakuon_o : " "}
                      {buttonTwoTabThree ? letter.handakuon_o : " "}
                      {buttonTwoTabFour ? letter.yoon_5 : " "}

                      <span>
                        {buttonTwoTabOne ? letter.gojuon_romaji_o : " "}
                        {buttonTwoTabTwo ? letter.dakuon_romaji_o : " "}
                        {buttonTwoTabThree ? letter.handakuon_romaji_o : " "}
                        {buttonTwoTabFour ? letter.yoon_romaji_5 : " "}
                      </span>
                    </td>
                  </tr>
                  {buttonTwoTabFour ? (
                    <>
                      <tr>
                        <td>
                          {letter.yoon_6}
                          <span>{letter.yoon_romaji_6}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_7}
                          <span>{letter.yoon_romaji_7}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_8}
                          <span>{letter.yoon_romaji_8}</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {letter.yoon_9}
                          <span>{letter.yoon_romaji_9}</span>
                        </td>
                      </tr>
                    </>
                  ) : (
                    <></>
                  )}
                </tbody>
              </Card>
            );
          })}
    </>
  );
};
export default AlphabetTable;
